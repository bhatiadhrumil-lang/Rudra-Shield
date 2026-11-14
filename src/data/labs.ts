import {
  Cloud,
  Code2,
  Crosshair,
  Fingerprint,
  Flag,
  MonitorPlay,
  Network,
  Radar,
  type LucideIcon,
} from "lucide-react";

export type Lab = {
  slug: string;
  code: string;
  name: string;
  shortName: string;
  description: string;
  capabilities: string[];
  image: string;
  imageAlt: string;
  icon: LucideIcon;
};

export const labs: Lab[] = [
  {
    slug: "soc-simulation",
    code: "LAB/01",
    name: "SOC Simulation Lab",
    shortName: "SOC Simulation",
    description:
      "Experience the rhythm of a security operations centre: triage alerts, read logs across multiple sources, correlate events and escalate incidents using a structured detection workflow.",
    capabilities: [
      "Real-time monitoring",
      "Log analysis",
      "Threat detection",
      "Incident escalation",
    ],
    image: "soc-monitors",
    imageAlt: "Security operations centre monitors showing live log and network dashboards",
    icon: MonitorPlay,
  },
  {
    slug: "penetration-testing",
    code: "LAB/02",
    name: "Penetration Testing Lab",
    shortName: "Penetration Testing",
    description:
      "Move from theory to controlled offensive testing: scope targets ethically, enumerate systems, validate vulnerabilities and communicate findings with professional rigor.",
    capabilities: [
      "Vulnerability assessment",
      "Ethical hacking",
      "Security testing",
      "Technical reporting",
    ],
    image: "code-screen",
    imageAlt: "A darkened laptop screen displaying scrolling terminal code during a penetration-testing exercise",
    icon: Crosshair,
  },
  {
    slug: "cloud-security",
    code: "LAB/03",
    name: "Cloud Security Lab",
    shortName: "Cloud Security",
    description:
      "Configure and assess cloud environments against security baselines. Explore identity, network segmentation, encryption, logging and compliance controls.",
    capabilities: [
      "Cloud configurations",
      "Security controls",
      "Compliance mapping",
      "Identity hardening",
    ],
    image: "network-mesh",
    imageAlt: "Abstract blue network mesh representing cloud infrastructure and connected services",
    icon: Cloud,
  },
  {
    slug: "digital-forensics",
    code: "LAB/04",
    name: "Digital Forensics Lab",
    shortName: "Digital Forensics",
    description:
      "Follow evidence through a disciplined investigative process — from acquisition and preservation to analysis and clear, defensible reporting.",
    capabilities: [
      "Forensic analysis",
      "Data recovery",
      "Investigation",
      "Evidence reporting",
    ],
    image: "server-racks",
    imageAlt: "Illuminated server racks with network cabling in a secure data centre",
    icon: Fingerprint,
  },
  {
    slug: "secure-coding",
    code: "LAB/05",
    name: "Secure Coding Lab",
    shortName: "Secure Coding",
    description:
      "Write, review and harden applications with secure-by-design practices, covering common weakness classes and remediation patterns.",
    capabilities: [
      "Secure coding",
      "Code review",
      "Application security",
      "Remediation",
    ],
    image: "code-stream",
    imageAlt: "Streams of application source code on a dark display",
    icon: Code2,
  },
  {
    slug: "threat-intelligence",
    code: "LAB/06",
    name: "Threat Intelligence Lab",
    shortName: "Threat Intelligence",
    description:
      "Turn raw intelligence into defensive value by researching adversaries, analysing indicators and producing actionable intelligence.",
    capabilities: [
      "Threat research",
      "Analysis",
      "Intelligence feeds",
      "Adversary tracking",
    ],
    image: "earth-network",
    imageAlt: "Satellite view of Earth at night with illuminated city networks",
    icon: Radar,
  },
  {
    slug: "cyber-range",
    code: "LAB/07",
    name: "Cyber Range",
    shortName: "Cyber Range",
    description:
      "Train in simulated enterprise environments where attack and defence exercises test judgment, communication and response under pressure.",
    capabilities: [
      "Simulated enterprise environment",
      "Attack scenarios",
      "Defensive exercises",
      "Team coordination",
    ],
    image: "network-switch",
    imageAlt: "Ethernet cables connected to a network switch in a lab rack",
    icon: Network,
  },
  {
    slug: "ctf-platform",
    code: "LAB/08",
    name: "CTF Platform",
    shortName: "CTF Platform",
    description:
      "Gamified challenges sharpen problem-solving and practical skill through progressive, competitive exercises.",
    capabilities: [
      "Gamified challenges",
      "Problem-solving",
      "Practical cybersecurity skills",
      "Team competition",
    ],
    image: "circuit-macro",
    imageAlt: "Macro view of a densely populated circuit board",
    icon: Flag,
  },
];
