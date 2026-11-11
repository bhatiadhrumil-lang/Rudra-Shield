import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  FileCheck2,
  FlaskConical,
  FolderKanban,
  GraduationCap,
  Layers,
  Presentation,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { CTASection } from "../components/CTASection";
import { ImageFrame } from "../components/ImageFrame";
import { PageHero } from "../components/PageHero";
import { ProgramLevels } from "../components/ProgramLevels";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import {
  institutionalOutcomes,
  programHighlights,
  studentOutcomes,
} from "../data/program";
import { site } from "../data/site";

const objectiveCards = [
  {
    icon: Target,
    title: "Employability",
    description: "Strengthen student employability and placement readiness through applied preparation.",
  },
  {
    icon: FlaskConical,
    title: "Practical skills",
    description: "Develop industry-relevant cybersecurity capability through hands-on learning.",
  },
  {
    icon: Users,
    title: "Industry connection",
    description: "Create structured, sustainable collaboration between academia and industry.",
  },
  {
    icon: Building2,
    title: "Institutional value",
    description: "Support accreditation, reputation, student outcomes and future talent pipelines.",
  },
];

const highlightIcons = [Presentation, FlaskConical, FolderKanban, BriefcaseBusiness, Target, BadgeCheck];

const practicalPrinciples = [
  {
    title: "Learn in context",
    description: "Labs and scenarios mirror the workflows, tools and decisions of professional security teams.",
  },
  {
    title: "Progress with evidence",
    description: "Structured assessments make capability visible at every level of the framework.",
  },
  {
    title: "Work as a team",
    description: "Simulation, cyber range and CTF exercises develop collaboration and communication.",
  },
  {
    title: "Connect to industry",
    description: "Practitioner mentors and industry-aligned projects keep learning connected to real expectations.",
  },
];

const certificationCards = [
  {
    icon: FileCheck2,
    title: "Structured assessments",
    description: "Progressive checks confirm conceptual understanding and practical capability.",
  },
  {
    icon: Award,
    title: "Certification readiness",
    description: "Preparation is aligned with industry-recognised certification pathways and expectations.",
  },
  {
    icon: Layers,
    title: "Portfolio evidence",
    description: "Projects, lab work and reports become tangible evidence of applied cybersecurity skill.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous feedback",
    description: "Assessment outcomes inform individual development and ongoing program quality.",
  },
];

export default function Programs() {
  return (
    <>
      <Seo
        title="U-CSVAP Program"
        description="Explore the University Cyber Security Value-Added Program: a six-level, industry-integrated employability framework with hands-on labs, projects and career readiness."
        path="/programs"
      />

      <PageHero
        eyebrow={`${site.programAcronym} program`}
        title="University Cyber Security Value-Added Program"
        description="Industry-Integrated Cyber Security Employability Framework. A structured learning layer that develops practical capability alongside existing university degree programs."
        meta={[
          { label: "Program code", value: site.programAcronym },
          { label: "Framework", value: "Six competency levels" },
          { label: "Curriculum", value: "No modification required" },
          { label: "Delivery", value: "Alongside degree programs" },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <span className="chip chip--cyan">Industry-integrated</span>
          <span className="chip">Value-added program</span>
          <span className="chip">Career readiness</span>
        </div>
      </PageHero>

      <section className="section section-bordered" aria-labelledby="program-overview-heading">
        <div className="container-shell">
          <div className="intro-grid">
            <div>
              <SectionHeading
                eyebrow="Program overview"
                title="An industry readiness layer that fits your academic model."
                id="program-overview-heading"
              />
              <Reveal delay={0.08}>
                <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
                  <p>
                    {site.programAcronym} is an industry-integrated learning initiative designed to strengthen student
                    employability, practical skills and placement outcomes across existing academic programs.
                  </p>
                  <p>
                    The program is delivered as a value-added / industry readiness initiative alongside degree
                    programs. It does not require modification of the university's approved curriculum.
                  </p>
                  <p className="text-ink-dim">
                    Students progress through six competency levels, moving from fundamentals to professional
                    readiness with the support of industry experts, hands-on labs, real-world projects and structured
                    career preparation.
                  </p>
                </div>
                <div className="callout mt-7">
                  <span className="callout__label">
                    <ShieldCheck size={14} aria-hidden="true" />
                    Additive by design
                  </span>
                  <p>
                    The university retains ownership of its approved curriculum. {site.programAcronym} adds an
                    industry-aligned learning layer without displacing core academic content.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="panel panel-corners">
                <div className="border-b border-white/5 px-6 py-5">
                  <span className="mono-label">Program specification</span>
                  <h3 className="mt-2 text-lg">At a glance</h3>
                </div>
                <dl className="divide-y divide-white/5">
                  {[
                    ["Program type", "Value-added / industry readiness"],
                    ["Delivery model", "Alongside existing degree programs"],
                    ["Curriculum impact", "No modification required"],
                    ["Competency framework", "Six progressive levels"],
                    ["Learning methods", "Industry sessions, labs, projects, cyber range, CTF"],
                    ["Career support", "Internship readiness, portfolio, placement preparation"],
                  ].map(([label, value]) => (
                    <div className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6" key={label}>
                      <dt className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-dim">{label}</dt>
                      <dd className="text-left text-[0.82rem] leading-relaxed text-ink-soft sm:max-w-[58%] sm:text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="px-6 py-4">
                  <p className="table-note">Specific delivery scope is confirmed in the institutional partnership agreement.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="objectives-heading">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Program objectives"
            title="Four objectives shape every engagement."
            description="The program is designed to create measurable value for students, universities and the wider cybersecurity talent ecosystem."
            id="objectives-heading"
          />

          <div className="split-4 mt-12">
            {objectiveCards.map((objective, index) => (
              <Reveal key={objective.title} delay={index * 0.06}>
                <article className="panel panel-corners icon-card h-full panel-interactive">
                  <div className="flex items-center justify-between gap-3">
                    <span className="icon-card__icon">
                      <objective.icon aria-hidden="true" />
                    </span>
                    <span className="index-number">/ 0{index + 1}</span>
                  </div>
                  <h3 className="mt-6">{objective.title}</h3>
                  <p>{objective.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bordered" aria-labelledby="outcomes-heading">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Program outcomes"
            title="Designed for student capability and institutional value."
            description="The framework connects individual student development with outcomes that matter to the institution."
            id="outcomes-heading"
          />

          <div className="split-2 mt-12">
            <Reveal>
              <article className="panel panel-corners icon-card h-full">
                <div className="icon-card__head">
                  <span className="icon-card__icon">
                    <GraduationCap aria-hidden="true" />
                  </span>
                  <div>
                    <span className="mono-label">Outcome set 01</span>
                    <h3 className="mt-1">Student Outcomes</h3>
                  </div>
                </div>
                <ul className="mt-2">
                  {studentOutcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5 border-b border-white/5 py-3 text-sm text-ink-soft last:border-0">
                      <Check size={14} className="mt-1 shrink-0 text-cyber-500" aria-hidden="true" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="panel panel-corners icon-card h-full">
                <div className="icon-card__head">
                  <span className="icon-card__icon">
                    <Building2 aria-hidden="true" />
                  </span>
                  <div>
                    <span className="mono-label">Outcome set 02</span>
                    <h3 className="mt-1">Institutional Outcomes</h3>
                  </div>
                </div>
                <ul className="mt-2">
                  {institutionalOutcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5 border-b border-white/5 py-3 text-sm text-ink-soft last:border-0">
                      <Check size={14} className="mt-1 shrink-0 text-cyber-500" aria-hidden="true" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="program-highlights-heading">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Program highlights"
            title="A complete learning experience, not a collection of sessions."
            id="program-highlights-heading"
          />

          <div className="split-3 mt-12">
            {programHighlights.map((highlight, index) => {
              const Icon = highlightIcons[index];
              return (
                <Reveal key={highlight.title} delay={index * 0.05}>
                  <article className="panel panel-corners icon-card h-full panel-interactive">
                    <div className="flex items-center justify-between gap-3">
                      <span className="icon-card__icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="index-number">/ 0{index + 1}</span>
                    </div>
                    <h3 className="mt-6">{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-bordered" aria-labelledby="framework-heading">
        <div className="container-shell">
          <SectionHeading
            align="split"
            eyebrow="Competency framework"
            title="Six levels. One coherent progression."
            description="Each level builds on the last, from security fundamentals to professional readiness. Select a level to explore its focus areas and key capabilities."
            id="framework-heading"
            aside={<span className="chip chip--cyan">06 Progressive levels</span>}
          />
          <ProgramLevels />
          <p className="table-note mt-6 max-w-3xl">
            The competency framework follows the six-level structure described in the RudraShield company profile.
            Content emphasis may be adapted to institutional requirements during program design.
          </p>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="practical-heading">
        <div className="container-shell">
          <div className="intro-grid">
            <div>
              <SectionHeading
                eyebrow="Practical learning approach"
                title="Practice is the curriculum, not an accessory."
                description="Students build capability by doing: investigating, testing, defending, attacking and delivering work in environments that reflect professional security practice."
                id="practical-heading"
              />
              <Reveal delay={0.08}>
                <ol className="numbered-list mt-8">
                  {practicalPrinciples.map((principle) => (
                    <li key={principle.title} className="flex-col gap-1.5 md:flex-row md:gap-6">
                      <span className="min-w-44 font-display text-[0.98rem] font-medium text-white">{principle.title}</span>
                      <span className="text-sm text-ink-dim">{principle.description}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="intro-media">
                <ImageFrame
                  className="intro-media__frame aspect-[4/3]"
                  name="students-collab"
                  alt="Students collaborating around laptops in a lab-style learning environment"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
                <span className="intro-media__badge">Applied learning</span>
                <div className="intro-media__tag">
                  <FlaskConical size={14} className="text-cyber-500" aria-hidden="true" />
                  Labs · Projects · Simulation
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-bordered" aria-labelledby="career-support-heading">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Internship & career support"
                title="Career support that starts before graduation."
                description="Professional readiness is woven through the program, so students can connect technical growth with how they present, apply and interview for opportunities."
                id="career-support-heading"
              />
              <Reveal delay={0.08}>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Internship readiness and guided support",
                    "Industry mentorship and practitioner exposure",
                    "Professional portfolio development",
                    "Interview preparation and placement readiness",
                    "Résumé and professional profile development",
                    "Industry interaction through projects and sessions",
                  ].map((item) => (
                    <li className="flex items-start gap-2.5 border-t border-white/5 pt-3 text-sm text-ink-soft" key={item}>
                      <Check size={14} className="mt-1 shrink-0 text-cyber-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="callout callout--warning mt-7">
                  <span className="callout__label">Important distinction</span>
                  <p>
                    The program provides career-readiness support. It does not guarantee an internship, employment or
                    a specific salary outcome. Results depend on individual performance, market conditions and employer
                    decisions.
                  </p>
                </div>
                <div className="mt-7">
                  <ButtonLink to="/careers" variant="secondary" size="sm">
                    Explore career support
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="intro-media">
                <ImageFrame
                  className="intro-media__frame aspect-[4/5]"
                  name="graduates"
                  alt="University graduates celebrating the completion of their studies"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="intro-media__tag">
                  <GraduationCap size={14} className="text-cyber-500" aria-hidden="true" />
                  Prepared for the next step
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="certifications-heading">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Certifications & assessments"
            title="Capability made visible."
            description="Progress is verified through structured assessment, applied work and professional presentation."
            id="certifications-heading"
          />
          <div className="split-4 mt-12">
            {certificationCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <article className="panel panel-corners icon-card h-full">
                  <span className="icon-card__icon">
                    <card.icon aria-hidden="true" />
                  </span>
                  <h3 className="mt-5">{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="notice-strip mt-8">
            <ShieldCheck size={15} aria-hidden="true" />
            <span>
              <strong className="font-medium text-white">Certification details:</strong> specific certification bodies,
              credential names and award criteria are determined per institutional engagement and are not stated on this
              website.
            </span>
          </div>
        </div>
      </section>

      <CTASection
        title="Bring U-CSVAP to your institution."
        description="Build a practical cybersecurity pathway around your students, your academic structure and your employability priorities."
        primaryLabel="Discuss University Partnership"
        primaryTo="/contact?enquiry=University%20Partnership"
        secondaryLabel="Explore Cyber Labs"
        secondaryTo="/labs"
        note="Value-added delivery · No approved curriculum modification"
      />
    </>
  );
}
