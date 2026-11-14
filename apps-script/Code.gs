const CONTACT_CONFIG = {
  spreadsheetIdProperty: "SPREADSHEET_ID",
  sheetNameProperty: "CONTACT_SHEET_NAME",
  maxBodyCharacters: 20000,
  duplicateWindowSeconds: 120,
  rateLimitWindowSeconds: 600,
  rateLimitMax: 5,
};

const CONTACT_HEADERS = [
  "Timestamp",
  "Full name",
  "E-mail",
  "Phone number",
  "Organization / University",
  "Designation",
  "Enquiry type",
  "Message",
  "Status",
];

const CONTACT_ENQUIRY_TYPES = [
  "University Partnership",
  "Cybersecurity Training",
  "Internship Opportunities",
  "Industry Collaboration",
  "General Enquiry",
];

const CONTACT_PAYLOAD_FIELDS = [
  "fullName",
  "email",
  "phone",
  "organization",
  "designation",
  "enquiryType",
  "message",
];

function doGet() {
  try {
    contactGetSheet_();
    return contactJson_({
      ok: true,
      status: "ready",
      message: "Contact endpoint and spreadsheet configuration are ready.",
    });
  } catch (error) {
    return contactJson_({
      ok: false,
      status: "error",
      code: contactErrorCode_(error),
      message: contactConfigurationMessage_(error),
    });
  }
}

function doPost(event) {
  const lock = LockService.getScriptLock();

  try {
    contactLog_("request received");
    contactLog_("content type=" + contactContentType_(event));
    contactLog_("body characters=" + contactBodyLength_(event));

    if (!lock.tryLock(20000)) {
      contactLog_("lock=busy");
      return contactJson_({
        ok: false,
        code: "BUSY",
        message: "The enquiry service is busy. Please try again.",
      });
    }

    const payload = contactParse_(event);
    if (!payload.ok) {
      contactLog_("parse=failed code=" + payload.code);
      return contactJson_(payload);
    }

    contactLog_("property names=" + payload.keys.join(","));
    contactLog_("missing fields=" + (contactMissingFields_(payload.data).join(",") || "none"));
    contactLog_("populated fields=" + contactPopulatedFieldCount_(payload.data) + "/7");

    const validation = contactValidate_(payload.data);
    if (!validation.ok) {
      contactLog_("validation=failed fields=" + Object.keys(validation.errors).sort().join(","));
      return contactJson_(validation);
    }

    contactLog_("validation=passed");

    const emailHash = contactHash_(payload.data.email.toLowerCase());
    const rateLimit = contactRateLimit_(emailHash);
    if (!rateLimit.ok) {
      contactLog_("rate-limit=failed");
      return contactJson_(rateLimit);
    }

    const sheet = contactGetSheet_();
    const spreadsheet = sheet.getParent();
    contactLog_("spreadsheet=" + (spreadsheet ? spreadsheet.getName() : "unknown"));
    contactLog_("worksheet=" + sheet.getName());

    if (contactIsDuplicate_(sheet, payload.data)) {
      contactLog_("duplicate=skipped append");
      return contactJson_({
        ok: true,
        status: "duplicate",
        duplicate: true,
        message: "This enquiry has already been received.",
      });
    }

    const row = [
      new Date(),
      contactSafeCell_(payload.data.fullName),
      contactSafeCell_(payload.data.email),
      contactString_(payload.data.phone),
      contactSafeCell_(payload.data.organization),
      contactSafeCell_(payload.data.designation),
      contactSafeCell_(payload.data.enquiryType),
      contactSafeCell_(payload.data.message),
      "Pending",
    ];

    sheet.appendRow(row);
    contactLog_("append=success row fields=" + row.length);

    return contactJson_({
      ok: true,
      status: "accepted",
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error("contact: append/request failure code=" + contactSafeErrorCode_(error));
    return contactJson_({
      ok: false,
      code: "SERVICE_UNAVAILABLE",
      message: "The enquiry service is temporarily unavailable. Please try again.",
    });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function contactParse_(event) {
  if (!event || !event.postData || !event.postData.contents) {
    return {
      ok: false,
      code: "INVALID_REQUEST",
      message: "The enquiry request was empty.",
    };
  }

  if (event.postData.contents.length > CONTACT_CONFIG.maxBodyCharacters) {
    return {
      ok: false,
      code: "INVALID_REQUEST",
      message: "The enquiry request was too large.",
    };
  }

  let input;
  try {
    input = JSON.parse(event.postData.contents);
  } catch (error) {
    return {
      ok: false,
      code: "INVALID_REQUEST",
      message: "The enquiry request was not valid JSON.",
    };
  }

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return {
      ok: false,
      code: "INVALID_REQUEST",
      message: "The enquiry request was not valid.",
    };
  }

  return {
    ok: true,
    keys: Object.keys(input)
      .map(function (key) {
        return contactString_(key).replace(/\s+/g, " ").slice(0, 40);
      })
      .sort()
      .slice(0, 30),
    data: {
      fullName: contactString_(input.fullName),
      email: contactString_(input.email),
      phone: contactString_(input.phone),
      organization: contactString_(input.organization),
      designation: contactString_(input.designation),
      enquiryType: contactString_(input.enquiryType),
      message: contactString_(input.message),
    },
  };
}

function contactContentType_(event) {
  if (!event || !event.postData || !event.postData.type) return "missing";
  return contactString_(event.postData.type).replace(/\s+/g, " ").slice(0, 80) || "missing";
}

function contactBodyLength_(event) {
  if (!event || !event.postData || typeof event.postData.contents !== "string") return 0;
  return event.postData.contents.length;
}

function contactMissingFields_(data) {
  return CONTACT_PAYLOAD_FIELDS.filter(function (field) {
    return !contactString_(data[field]);
  });
}

function contactPopulatedFieldCount_(data) {
  return CONTACT_PAYLOAD_FIELDS.length - contactMissingFields_(data).length;
}

function contactLog_(message) {
  console.log("contact: " + message);
}

function contactSafeErrorCode_(error) {
  const code = contactErrorCode_(error);
  return /^[A-Z_]{1,64}$/.test(code) ? code : "UNEXPECTED";
}

function contactValidate_(data) {
  const errors = {};

  if (data.fullName.length < 2 || data.fullName.length > 100) {
    errors.fullName = "Enter a full name between 2 and 100 characters.";
  }

  if (
    data.email.length < 1 ||
    data.email.length > 160 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  if (
    data.phone.length < 6 ||
    data.phone.length > 30 ||
    !/^\+?[0-9][0-9\s()\-]{5,}$/.test(data.phone)
  ) {
    errors.phone = "Enter a valid phone number.";
  }

  if (data.organization.length < 2 || data.organization.length > 160) {
    errors.organization = "Enter an organization or university name.";
  }

  if (data.designation.length < 2 || data.designation.length > 120) {
    errors.designation = "Enter a designation.";
  }

  if (CONTACT_ENQUIRY_TYPES.indexOf(data.enquiryType) === -1) {
    errors.enquiryType = "Select a valid enquiry type.";
  }

  if (data.message.length < 20 || data.message.length > 2000) {
    errors.message = "Enter a message between 20 and 2,000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      code: "VALIDATION_ERROR",
      message: "Please check the required fields.",
      errors: errors,
    };
  }

  return { ok: true };
}

function contactGetSheet_() {
  const properties = PropertiesService.getScriptProperties();
  const spreadsheetId = contactString_(properties.getProperty(CONTACT_CONFIG.spreadsheetIdProperty));
  const sheetName = contactString_(properties.getProperty(CONTACT_CONFIG.sheetNameProperty));

  let spreadsheet;
  try {
    spreadsheet = spreadsheetId
      ? SpreadsheetApp.openById(spreadsheetId)
      : SpreadsheetApp.getActiveSpreadsheet();
  } catch (error) {
    throw new Error("SPREADSHEET_NOT_FOUND");
  }

  if (!spreadsheet) throw new Error("SPREADSHEET_NOT_FOUND");

  const sheet = sheetName ? spreadsheet.getSheetByName(sheetName) : spreadsheet.getSheets()[0];
  if (!sheet) throw new Error("SHEET_NOT_FOUND");
  if (sheet.getMaxColumns() < CONTACT_HEADERS.length) throw new Error("HEADER_MISMATCH");

  const headers = sheet.getRange(1, 1, 1, CONTACT_HEADERS.length).getDisplayValues()[0];
  for (let index = 0; index < CONTACT_HEADERS.length; index += 1) {
    if (contactHeaderKey_(headers[index]) !== contactHeaderKey_(CONTACT_HEADERS[index])) {
      throw new Error("HEADER_MISMATCH");
    }
  }

  return sheet;
}

function contactIsDuplicate_(sheet, data) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;

  const rowCount = Math.min(10, lastRow - 1);
  const rows = sheet.getRange(lastRow - rowCount + 1, 1, rowCount, CONTACT_HEADERS.length).getValues();
  const candidate = contactDuplicateKey_(data);
  const cutoff = Date.now() - CONTACT_CONFIG.duplicateWindowSeconds * 1000;

  for (let index = rows.length - 1; index >= 0; index -= 1) {
    const row = rows[index];
    const timestamp = row[0] instanceof Date ? row[0].getTime() : new Date(row[0]).getTime();
    if (!isFinite(timestamp) || timestamp < cutoff) continue;

    const existing = contactDuplicateKey_({
      fullName: row[1],
      email: row[2],
      phone: row[3],
      organization: row[4],
      designation: row[5],
      enquiryType: row[6],
      message: row[7],
    });

    if (existing === candidate) return true;
  }

  return false;
}

function contactRateLimit_(emailHash) {
  const cache = CacheService.getScriptCache();
  const bucket = Math.floor(Date.now() / (CONTACT_CONFIG.rateLimitWindowSeconds * 1000));
  const key = "contact-rate-" + emailHash + "-" + bucket;
  const count = Number(cache.get(key) || 0);

  if (count >= CONTACT_CONFIG.rateLimitMax) {
    return {
      ok: false,
      code: "RATE_LIMITED",
      message: "Too many enquiries. Please wait before trying again.",
    };
  }

  cache.put(key, String(count + 1), CONTACT_CONFIG.rateLimitWindowSeconds);
  return { ok: true };
}

function contactDuplicateKey_(data) {
  return [
    data.fullName,
    data.email,
    data.phone,
    data.organization,
    data.designation,
    data.enquiryType,
    data.message,
  ]
    .map(function (value) {
      return contactString_(value).toLowerCase();
    })
    .join("\u0001");
}

function contactSafeCell_(value) {
  const text = contactString_(value);
  return /^[=+\-@\t]/.test(text) ? "'" + text : text;
}

function contactString_(value) {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
}

function contactHeaderKey_(value) {
  return contactString_(value).toLowerCase().replace(/[^a-z0-9]/g, "");
}

function contactHash_(value) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value)
    .map(function (byte) {
      return ((byte + 256) % 256).toString(16).padStart(2, "0");
    })
    .join("");
}

function contactErrorCode_(error) {
  if (error && error.message) return error.message;
  return "UNKNOWN";
}

function contactConfigurationMessage_(error) {
  const code = contactErrorCode_(error);

  if (code === "SPREADSHEET_NOT_FOUND") {
    return "Set the Script Property SPREADSHEET_ID or bind this script to the target spreadsheet.";
  }

  if (code === "SHEET_NOT_FOUND") {
    return "Set the Script Property CONTACT_SHEET_NAME to an existing sheet tab.";
  }

  if (code === "HEADER_MISMATCH") {
    return "The header row must contain the required nine columns in the documented order.";
  }

  return "The spreadsheet configuration could not be verified.";
}

function contactJson_(payload) {
  const response = Object.assign({ service: "rudrashield-contact" }, payload);
  if (response.ok === false && !response.status) response.status = "error";

  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}
