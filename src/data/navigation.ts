export type NavItem = {
  label: string;
  to: string;
};

export const mainNavigation: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Cyber Labs", to: "/labs" },
  { label: "Learning Framework", to: "/learning-framework" },
  { label: "University Partnerships", to: "/partnerships" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const footerNavigation = [
  {
    heading: "Company",
    links: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "University Partnerships", to: "/partnerships" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Program",
    links: [
      { label: "U-CSVAP Program", to: "/programs" },
      { label: "Cyber Security Labs", to: "/labs" },
      { label: "Learning Framework", to: "/learning-framework" },
      { label: "Career & Opportunities", to: "/careers" },
    ],
  },
];
