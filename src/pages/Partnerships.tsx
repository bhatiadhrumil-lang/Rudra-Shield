import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  FolderKanban,
  Gauge,
  GraduationCap,
  Handshake,
  Layers,
  Milestone,
  RefreshCw,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { CTASection } from "../components/CTASection";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";

const partnershipFramework = [
  {
    icon: Handshake,
    title: "Collaborative Partnership",
    description: "A strategic collaboration aligned with the university's academic priorities and student goals.",
  },
  {
    icon: ShieldCheck,
    title: "No Curriculum Change",
    description:
      "Delivered as a value-added / industry-readiness program alongside existing degree programs. It does not require modification of the university's approved curriculum.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Co-created for Impact",
    description: "Designed jointly with faculty and industry to ensure relevance, rigor and real-world applicability.",
  },
  {
    icon: Target,
    title: "Outcome-Driven Collaboration",
    description: "Focused on measurable outcomes in skills, placements, certifications and industry engagement.",
  },
  {
    icon: RefreshCw,
    title: "Long-term Sustainability",
    description: "Continuous innovation, updates and support to keep pace with evolving industry needs.",
  },
];

const deliveryModel = [
  {
    icon: GraduationCap,
    title: "Industry Expert-Led Sessions",
    description:
      "Interactive sessions delivered by cybersecurity practitioners and domain experts.",
  },
  {
    icon: Workflow,
    title: "Hands-on Lab Experience",
    description: "Extensive practical exposure in specialised labs and virtual environments.",
  },
  {
    icon: FolderKanban,
    title: "Real-world Projects & Case Studies",
    description: "Industry-aligned projects that build problem-solving and application skills.",
  },
  {
    icon: Milestone,
    title: "Capture The Flag Challenges",
    description: "Gamified cyber range exercises and CTF challenges that strengthen attack–defence skill.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Internship & Industry Exposure",
    description: "Guided internship support and structured industry interaction opportunities.",
  },
  {
    icon: BadgeCheck,
    title: "Career & Placement Readiness",
    description: "Résumé building, interview preparation and placement-readiness support.",
  },
];

const universityRepresentatives = [
  "Dean Academics",
  "Head / Director of Departments",
  "Faculty Coordinators",
  "Training & Placement Cell",
  "IQAC Representative",
];

const industryRepresentatives = [
  "Program Director",
  "Technical Leads / Architects",
  "Industry Mentors",
  "Placement & Outreach Lead",
  "Subject Matter Experts",
];

const committeeResponsibilities = [
  "Review program progress and outcomes",
  "Ensure academic alignment and quality",
  "Approve industry projects and initiatives",
  "Monitor student performance",
  "Plan placements and industry engagement",
];

const qualityAssurance = [
  "Regular assessments and feedback",
  "Data-driven program performance analysis",
  "Stakeholder feedback from students, faculty and industry",
  "Continuous curriculum enhancement",
  "Outcome tracking and impact measurement",
];

const commercialModels = [
  {
    number: "01",
    title: "Annual Program Model",
    description:
      "Annual subscription per student for access to training, labs, projects, certifications and placement support.",
  },
  {
    number: "02",
    title: "Cohort-Based Model",
    description: "Structured engagement for specific student cohorts or batches.",
  },
  {
    number: "03",
    title: "Volume-Based Model",
    description: "Scalable pricing based on the number of students and selected program components.",
  },
  {
    number: "04",
    title: "Customized Packages",
    description: "Modular options to choose the right mix of labs, certifications, projects and services.",
  },
];

const included = [
  { icon: Users, label: "Training & Mentorship" },
  { icon: Layers, label: "Lab Access & Cyber Range" },
  { icon: Award, label: "Certifications & Assessments" },
  { icon: BriefcaseBusiness, label: "Placement & Career Support" },
];

const institutionalCase = [
  {
    icon: GraduationCap,
    title: "Enhance Student Outcomes",
    description: "Equip students with industry-relevant skills, practical experience and professional confidence.",
  },
  {
    icon: Gauge,
    title: "Improve Placement Outcomes",
    description: "Support higher placement readiness and stronger graduate employability.",
  },
  {
    icon: Handshake,
    title: "Strengthen Industry Connect",
    description: "Deepen engagement with industry through projects, guest sessions, mentorship and more.",
  },
  {
    icon: Award,
    title: "Support Accreditation & Rankings",
    description: "Contribute to key quality metrics including NAAC, NBA and other ranking frameworks.",
  },
  {
    icon: Building2,
    title: "Build Institutional Reputation",
    description: "Position the university as a leader in future-focused cybersecurity education.",
  },
  {
    icon: Milestone,
    title: "Create a Future-Ready Ecosystem",
    description: "Build a sustainable pipeline for talent development, research and innovation.",
  },
];

export default function Partnerships() {
  return (
    <>
      <Seo
        title="University Partnerships"
        description="Explore RudraShield's university partnership framework: collaborative governance, a no-curriculum-change delivery model and flexible commercial engagement options."
        path="/partnerships"
      />

      <PageHero
        eyebrow="University partnerships"
        title="Building Strong University-Industry Partnerships"
        description="A flexible and sustainable collaboration model designed to create long-term value for the university, students and industry."
        meta={[
          { label: "Partnership", value: "Collaborative" },
          { label: "Curriculum", value: "No change required" },
          { label: "Governance", value: "Joint committee" },
          { label: "Engagement", value: "Flexible models" },
        ]}
      />

      <section className="section section-bordered" aria-labelledby="framework-heading">
        <div className="container-shell">
          <SectionHeading
            align="split"
            eyebrow="Partnership framework"
            title="A partnership designed to respect academic ownership."
            description="RudraShield works with institutional leadership, faculty and industry practitioners to deliver a program that is academically aligned and professionally relevant."
            id="framework-heading"
            aside={<span className="chip chip--cyan">Value-added delivery</span>}
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partnershipFramework.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article
                  className={`panel icon-card h-full ${
                    item.highlight ? "border-cyber-500/40 bg-[linear-gradient(150deg,rgba(0,207,255,0.1),rgba(8,15,30,0.6))]" : "panel-corners panel-interactive"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="icon-card__icon">
                      <item.icon aria-hidden="true" />
                    </span>
                    <span className="index-number">/ 0{index + 1}</span>
                  </div>
                  <h3 className="mt-6">{item.title}</h3>
                  <p>{item.description}</p>
                  {item.highlight ? <span className="chip chip--cyan mt-5">Core principle</span> : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="delivery-heading">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Program delivery model"
            title="How the program comes to life on campus."
            description="A blend of academic rigor and industry practice, delivered through six connected components."
            id="delivery-heading"
          />

          <div className="split-3 mt-12">
            {deliveryModel.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="panel panel-corners icon-card h-full panel-interactive">
                  <div className="flex items-center justify-between gap-3">
                    <span className="icon-card__icon">
                      <item.icon aria-hidden="true" />
                    </span>
                    <span className="index-number">D / 0{index + 1}</span>
                  </div>
                  <h3 className="mt-6">{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bordered" aria-labelledby="governance-heading">
        <div className="container-shell">
          <SectionHeading
            align="split"
            eyebrow="Governance framework"
            title="Shared oversight. Clear accountability."
            description="A joint governance committee brings university leadership and industry together to protect academic alignment, quality and student outcomes."
            id="governance-heading"
            aside={<span className="chip">Joint program governance</span>}
          />

          <Reveal>
            <div className="governance-grid">
              <div className="panel panel-corners governance-col">
                <span className="governance-col__label">
                  <Building2 size={13} aria-hidden="true" />
                  University representatives
                </span>
                <h3>Academic leadership</h3>
                <ul>
                  {universityRepresentatives.map((representative) => (
                    <li key={representative}>{representative}</li>
                  ))}
                </ul>
                <p className="governance-col__foot">
                  Academic ownership, institutional priorities and student interests remain represented at every review.
                </p>
              </div>

              <div className="panel panel-corners governance-col governance-col--center">
                <span className="governance-col__label">
                  <Users size={13} aria-hidden="true" />
                  Joint committee
                </span>
                <h3>Joint Program Governance Committee</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-dim">
                  Collaborative oversight for academic alignment, quality assurance, student outcomes and industry
                  engagement.
                </p>
                <ul className="mt-5">
                  {["Academic alignment", "Quality assurance", "Student outcomes", "Industry engagement"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="governance-col__foot">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck size={13} className="text-cyber-500" aria-hidden="true" />
                    Continuous joint review
                  </span>
                </div>
              </div>

              <div className="panel panel-corners governance-col">
                <span className="governance-col__label">
                  <BriefcaseBusiness size={13} aria-hidden="true" />
                  Industry representatives
                </span>
                <h3>Industry delivery</h3>
                <ul>
                  {industryRepresentatives.map((representative) => (
                    <li key={representative}>{representative}</li>
                  ))}
                </ul>
                <p className="governance-col__foot">
                  Current industry practice, delivery quality and employability expectations are brought into the
                  partnership.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="responsibility-grid">
            {committeeResponsibilities.map((responsibility, index) => (
              <div className="responsibility-item" key={responsibility}>
                <span className="responsibility-item__num">R / 0{index + 1}</span>
                <p>{responsibility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="quality-heading">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              eyebrow="Quality assurance"
              title="Continuous improvement is part of the operating model."
              description="The program is monitored and refined through structured feedback, performance data and joint review."
              id="quality-heading"
            />
            <Reveal>
              <div className="grid gap-3 sm:grid-cols-2">
                {qualityAssurance.map((item, index) => (
                  <div
                    className={`panel panel-corners flex items-start gap-3 p-5 ${
                      index === qualityAssurance.length - 1 ? "sm:col-span-2 border-cyber-500/30 bg-cyber-500/[0.04]" : ""
                    }`}
                    key={item}
                  >
                    <span className="font-mono text-[0.6rem] tracking-[0.1em] text-cyber-500">0{index + 1}</span>
                    <p className="text-sm leading-relaxed text-ink-soft">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-bordered" aria-labelledby="commercial-heading">
        <div className="container-shell">
          <SectionHeading
            align="split"
            eyebrow="Commercial engagement model"
            title="Flexible engagement options, scoped to the institution."
            description="RudraShield does not publish prices on this website. Commercial structures are tailored to the institution, cohort size and selected program components."
            id="commercial-heading"
            aside={<span className="chip chip--warning">No published pricing</span>}
          />

          <div className="split-2 mt-12">
            {commercialModels.map((model, index) => (
              <Reveal key={model.number} delay={index * 0.05}>
                <article className="panel panel-corners icon-card h-full panel-interactive">
                  <div className="flex items-start justify-between gap-4">
                    <span className="display-md text-cyber-300/80">{model.number}</span>
                    <span className="table-note">Engagement model</span>
                  </div>
                  <h3 className="mt-6">{model.title}</h3>
                  <p>{model.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {included.map((item) => (
              <div className="flex items-center gap-3 border-t border-white/10 pt-4" key={item.label}>
                <item.icon size={16} className="shrink-0 text-cyber-500" aria-hidden="true" />
                <span className="text-sm text-ink-soft">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="callout mt-10">
            <span className="callout__label">
              <ShieldCheck size={14} aria-hidden="true" />
              Commercial transparency
            </span>
            <p>
              No prices, fees or commercial commitments are displayed on this website. A tailored proposal is prepared
              after an institutional scoping conversation and formalised in the partnership agreement.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="why-partner-heading">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why partner with us"
            title="The institutional case for a practical cybersecurity layer."
            description="Together, we can build a future-ready cybersecurity talent pipeline and create lasting value for students and the institution."
            id="why-partner-heading"
          />

          <div className="split-3 mt-12">
            {institutionalCase.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="panel panel-corners icon-card h-full">
                  <div className="flex items-center gap-3">
                    <span className="icon-card__icon">
                      <item.icon aria-hidden="true" />
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss Partnership Opportunities"
        description="Start a scoping conversation about your institution, your students and the outcomes you want to strengthen."
        primaryLabel="Discuss Partnership Opportunities"
        primaryTo="/contact?enquiry=University%20Partnership"
        secondaryLabel="Review U-CSVAP"
        secondaryTo="/programs"
        note="No curriculum modification required · Commercial terms tailored per engagement"
      />
    </>
  );
}
