import {
  Activity,
  BookOpenCheck,
  BriefcaseBusiness,
  Crosshair,
  LockKeyhole,
  type LucideIcon,
  Terminal,
} from "lucide-react";

export type ProgramLevel = {
  id: number;
  number: string;
  title: string;
  description: string;
  focus: string[];
  capabilities: string[];
  icon: LucideIcon;
};

export const programLevels: ProgramLevel[] = [
  {
    id: 1,
    number: "01",
    title: "Foundation Skills",
    description:
      "Build strong fundamentals and a working understanding of core cybersecurity concepts, systems and professional cyber hygiene.",
    focus: [
      "Cybersecurity fundamentals",
      "Networking essentials",
      "Linux fundamentals",
      "Cyber hygiene & awareness",
    ],
    capabilities: [
      "Explain core security principles and threat models",
      "Work confidently in Linux and networked environments",
      "Apply baseline cyber hygiene practices",
      "Build the vocabulary for advanced security work",
    ],
    icon: BookOpenCheck,
  },
  {
    id: 2,
    number: "02",
    title: "Technical Security Skills",
    description:
      "Develop core technical security skills through hands-on learning across applications, networks and operating systems.",
    focus: [
      "Web application security",
      "Secure coding practices",
      "Vulnerability assessment",
      "Network security",
      "Operating system security",
    ],
    capabilities: [
      "Identify and assess common vulnerability classes",
      "Apply secure coding and hardening practices",
      "Assess network and operating system exposure",
      "Validate findings with structured assessment methods",
    ],
    icon: Terminal,
  },
  {
    id: 3,
    number: "03",
    title: "Security Operations",
    description:
      "Understand security operations and threat management in real-world environments, from monitoring and detection to response.",
    focus: [
      "Security Operations Center (SOC)",
      "Threat intelligence",
      "Security monitoring",
      "Incident response",
      "Log analysis & SIEM",
    ],
    capabilities: [
      "Triage and investigate security alerts",
      "Analyse logs across multiple data sources",
      "Apply structured incident response workflows",
      "Use threat intelligence to inform detection",
    ],
    icon: Activity,
  },
  {
    id: 4,
    number: "04",
    title: "Advanced Security",
    description:
      "Gain advanced skills to address complex security challenges across cloud, applications, systems and investigations.",
    focus: [
      "Cloud security",
      "Digital forensics",
      "Malware analysis",
      "Application security",
      "Threat hunting",
    ],
    capabilities: [
      "Assess cloud configuration and security controls",
      "Conduct structured forensic investigation",
      "Analyse malicious behaviour and indicators",
      "Hunt proactively for hidden threats",
    ],
    icon: LockKeyhole,
  },
  {
    id: 5,
    number: "05",
    title: "Industry Readiness",
    description:
      "Apply skills in advanced labs, simulations and industry projects that mirror the pressure and complexity of real security work.",
    focus: [
      "Penetration testing (VAPT)",
      "Red team exercises",
      "Blue team exercises",
      "Capture The Flag (CTF)",
      "Cyber range exercises",
    ],
    capabilities: [
      "Plan and execute ethical penetration tests",
      "Operate in adversarial attack and defence exercises",
      "Solve progressive CTF security challenges",
      "Communicate security outcomes with professional clarity",
    ],
    icon: Crosshair,
  },
  {
    id: 6,
    number: "06",
    title: "Professional Readiness",
    description:
      "Prepare for career entry through real-world exposure, mentorship and structured professional development.",
    focus: [
      "Industry projects",
      "Internship program",
      "Professional portfolio development",
      "Interview & placement readiness",
    ],
    capabilities: [
      "Deliver industry-aligned project work",
      "Build a portfolio that evidences practical capability",
      "Prepare for technical and professional interviews",
      "Enter the job market with structured career support",
    ],
    icon: BriefcaseBusiness,
  },
];

export const programHighlights = [
  {
    title: "Industry Expert-Led Training",
    description:
      "Learn directly from cybersecurity practitioners and domain experts through structured, industry-aligned sessions.",
  },
  {
    title: "Hands-on Laboratories",
    description:
      "Build practical confidence in specialized lab and virtual environments designed for active learning.",
  },
  {
    title: "Real-world Projects",
    description:
      "Apply security concepts to industry-aligned projects, case studies and realistic problem scenarios.",
  },
  {
    title: "Internship Opportunities",
    description:
      "Prepare for and pursue guided internship pathways that bridge academic learning and professional practice.",
  },
  {
    title: "Placement Readiness",
    description:
      "Develop resumes, interview skills, professional portfolios and the confidence to enter the cybersecurity workforce.",
  },
  {
    title: "Industry Certifications",
    description:
      "Prepare for industry-recognized certification pathways and structured assessments that validate practical capability.",
  },
];

export const studentOutcomes = [
  "Develop industry-relevant cybersecurity skills",
  "Gain hands-on practical experience",
  "Work on real-world projects and case studies",
  "Enhance internship readiness",
  "Improve employability and placement readiness",
  "Build professional portfolio and confidence",
];

export const institutionalOutcomes = [
  "Enhance student value proposition and program attractiveness",
  "Improve placement statistics and graduate employability",
  "Strengthen industry collaboration and engagement",
  "Support accreditation, ranking and quality initiatives",
  "Develop future-ready talent pipelines for industry",
  "Build institutional reputation and differentiation",
];
