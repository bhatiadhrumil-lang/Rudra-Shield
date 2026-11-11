import type { EnquiryType } from "../data/site";

export type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  enquiryType: EnquiryType;
  message: string;
  consent: boolean;
  submittedAt: string;
  source: string;
};

export class ContactConfigurationError extends Error {
  constructor() {
    super("Contact endpoint is not configured.");
    this.name = "ContactConfigurationError";
  }
}

export const contactEndpoint = (import.meta.env.VITE_CONTACT_ENDPOINT ?? "").trim();
export const isContactEndpointConfigured = contactEndpoint.length > 0;

export async function sendEnquiry(payload: ContactPayload): Promise<void> {
  if (!contactEndpoint) {
    throw new ContactConfigurationError();
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(contactEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Enquiry endpoint returned ${response.status}.`);
    }
  } finally {
    window.clearTimeout(timeout);
  }
}
