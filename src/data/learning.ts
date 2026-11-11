import {
  BookOpen,
  Crosshair,
  FlaskConical,
  GraduationCap,
  MonitorPlay,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type JourneyStage = {
  id: string;
  label: string;
  description: string;
  detail: string;
  tags: string[];
  icon: LucideIcon;
};

export const journeyStages: JourneyStage[] = [
  {
    id: "learn",
    label: "Learn",
    description: "Conceptual learning with industry-aligned instruction.",
    detail:
      "Build conceptual foundations through industry-aligned instruction across security fundamentals, networking, operating systems and defensive principles.",
    tags: ["Foundations", "Networking", "Linux", "Security concepts"],
    icon: BookOpen,
  },
  {
    id: "practice",
    label: "Practice",
    description: "Hands-on labs to build practical technical skills.",
    detail:
      "Turn concepts into capability in hands-on labs focused on real tools, real workflows and deliberate repetition.",
    tags: ["Guided labs", "Tooling", "Secure coding", "Assessment"],
    icon: FlaskConical,
  },
  {
    id: "simulate",
    label: "Simulate",
    description: "Simulated environments and cyber range exercises.",
    detail:
      "Operate inside simulated environments and cyber-range exercises that mirror the complexity of production security work.",
    tags: ["Cyber range", "Scenarios", "Team exercises", "Pressure"],
    icon: MonitorPlay,
  },
  {
    id: "defend",
    label: "Defend",
    description: "SOC operations and defensive security practices.",
    detail:
      "Apply blue-team discipline in SOC operations: monitor, detect, investigate and respond to live-style scenarios.",
    tags: ["SOC operations", "Detection", "Incident response", "SIEM"],
    icon: ShieldCheck,
  },
  {
    id: "attack",
    label: "Attack",
    description: "Ethical hacking and realistic attack simulations.",
    detail:
      "Think like an adversary in ethical hacking and realistic attack simulations that expose weakness — and build defensive judgment.",
    tags: ["Ethical hacking", "VAPT", "Red team", "CTF"],
    icon: Crosshair,
  },
  {
    id: "deploy",
    label: "Deploy",
    description: "Industry projects, internships and career readiness.",
    detail:
      "Bring it together through industry projects, internship preparation and career support, and step forward with evidence of practical capability.",
    tags: ["Industry projects", "Internship prep", "Portfolio", "Interviews"],
    icon: GraduationCap,
  },
];

export const programTargets = [
  {
    value: "300+",
    label: "Hours of Hands-on Labs",
    hint: "Practical laboratory time",
  },
  {
    value: "50+",
    label: "Real-world Security Scenarios",
    hint: "Scenario-based exercises",
  },
  {
    value: "10+",
    label: "Industry Projects & Case Studies",
    hint: "Applied project work",
  },
  {
    value: "CTF",
    label: "Challenges & Competitions",
    hint: "Gamified skill development",
  },
  {
    value: "GUIDED",
    label: "Internship Support & Mentorship",
    hint: "Professional support",
  },
  {
    value: "READY",
    label: "Placement Readiness & Career Support",
    hint: "Career preparation",
  },
  {
    value: "BUILD",
    label: "Professional Portfolio & Certification Readiness",
    hint: "Evidence of capability",
  },
];
