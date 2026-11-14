import type { EnquiryType } from "../data/site";

export type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  enquiryType: EnquiryType;
  message: string;
};

export type ContactSuccessResponse = {
  status?: "accepted" | "duplicate";
  message?: string;
  referenceId?: string;
};

export type ContactErrorResponse = {
  message?: string;
  errors?: Record<string, string>;
};

export class ContactConfigurationError extends Error {
  constructor() {
    super("Contact endpoint is not configured.");
    this.name = "ContactConfigurationError";
  }
}

export class ContactSubmissionError extends Error {
  readonly status: number | null;
  readonly code: string | null;

  constructor(
    message: string,
    options: { status?: number; code?: string; cause?: unknown } = {},
  ) {
    super(message, { cause: options.cause });
    this.name = "ContactSubmissionError";
    this.status = options.status ?? null;
    this.code = options.code ?? null;
  }
}

function normalizeEndpoint(value: string): string {
  if (!value) return "";

  try {
    const endpoint = new URL(value);
    const isLocalHttp =
      endpoint.protocol === "http:" &&
      (endpoint.hostname === "localhost" || endpoint.hostname === "127.0.0.1");
    if (endpoint.protocol !== "https:" && !isLocalHttp) return "";
    if (endpoint.username || endpoint.password) return "";
    return endpoint.toString();
  } catch {
    return "";
  }
}

export const contactEndpoint = normalizeEndpoint((import.meta.env.VITE_CONTACT_ENDPOINT ?? "").trim());
export const isContactEndpointConfigured = contactEndpoint.length > 0;

async function readJsonBody(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text.trim()) return null;

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function responseObject(body: unknown): Record<string, unknown> | null {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  return body as Record<string, unknown>;
}

function hasExplicitSuccess(body: unknown): boolean {
  const candidate = responseObject(body);
  if (!candidate) return false;

  return (
    candidate.ok === true &&
    candidate.service === "rudrashield-contact" &&
    (candidate.status === "accepted" || candidate.status === "duplicate")
  );
}

function normalizeSuccessResponse(body: unknown): ContactSuccessResponse {
  const candidate = responseObject(body);
  if (!candidate) return {};

  return {
    status:
      candidate.status === "accepted" || candidate.status === "duplicate"
        ? candidate.status
        : undefined,
    message: typeof candidate.message === "string" ? candidate.message : undefined,
    referenceId: typeof candidate.referenceId === "string" ? candidate.referenceId : undefined,
  };
}

function errorCode(body: unknown): string | null {
  const candidate = responseObject(body);
  if (!candidate) return null;
  return typeof candidate.code === "string" ? candidate.code : null;
}

export async function sendEnquiry(payload: ContactPayload): Promise<ContactSuccessResponse> {
  if (!contactEndpoint) {
    throw new ContactConfigurationError();
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(contactEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
      signal: controller.signal,
    });
    const body = await readJsonBody(response);

    if (!response.ok) {
      throw new ContactSubmissionError("The enquiry endpoint rejected the submission.", {
        status: response.status,
        code: errorCode(body) ?? undefined,
      });
    }

    if (!hasExplicitSuccess(body)) {
      throw new ContactSubmissionError("The enquiry endpoint did not confirm acceptance.", {
        status: response.status,
        code: errorCode(body) ?? "UNCONFIRMED_RESPONSE",
      });
    }

    return normalizeSuccessResponse(body);
  } catch (error) {
    if (error instanceof ContactSubmissionError) throw error;
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new ContactSubmissionError("The enquiry request timed out.", {
        code: "TIMEOUT",
        cause: error,
      });
    }
    throw new ContactSubmissionError("The enquiry could not be delivered.", { cause: error });
  } finally {
    window.clearTimeout(timeout);
  }
}
