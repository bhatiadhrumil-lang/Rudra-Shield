export const site = {
  name: "RudraShield Cyber Systems",
  shortName: "RudraShield",
  tagline: "Building the next generation of cybersecurity professionals.",
  description:
    "Cybersecurity education, practical security training, university-industry collaboration and cybersecurity career development.",
  programName: "University Cyber Security Value-Added Program",
  programAcronym: "U-CSVAP",
  programAlias: "Industry-Integrated Cyber Security Employability Framework",
  email: {
    value: "contact@rudrashield.example",
    isPlaceholder: true,
  },
  phone: {
    value: "To be confirmed",
    isPlaceholder: true,
  },
  address: {
    value: "To be confirmed",
    isPlaceholder: true,
  },
  responseNote:
    "Official contact channels are pending publication. Please use the enquiry form once delivery is configured.",
} as const;

export const enquiryTypes = [
  "University Partnership",
  "Cybersecurity Training",
  "Internship Opportunities",
  "Industry Collaboration",
  "General Enquiry",
] as const;

export type EnquiryType = (typeof enquiryTypes)[number];
