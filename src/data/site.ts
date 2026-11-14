export const site = {
  name: "RudraShield Cyber Systems",
  shortName: "RudraShield",
  tagline: "Building the next generation of cybersecurity professionals.",
  description:
    "Cybersecurity education, practical security training, university-industry collaboration and cybersecurity career development.",
  programName: "University Cyber Security Value-Added Program",
  programAcronym: "U-CSVAP",
  programAlias: "Industry-Integrated Cyber Security Employability Framework",
  generalEmail: {
    value: "rudrashieldcybersystems@gmail.com",
    href: "mailto:rudrashieldcybersystems@gmail.com",
  },
  hiringEmail: {
    value: "hiring.rudrashield@gmail.com",
    href: "mailto:hiring.rudrashield@gmail.com",
  },
  phone: {
    value: "+91 9714207205",
    href: "tel:+919714207205",
  },
  owner: "Keval Mehta",
} as const;

export const enquiryTypes = [
  "University Partnership",
  "Cybersecurity Training",
  "Internship Opportunities",
  "Industry Collaboration",
  "General Enquiry",
] as const;

export type EnquiryType = (typeof enquiryTypes)[number];
