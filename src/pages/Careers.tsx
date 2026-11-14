import {
  Award,
  BriefcaseBusiness,
  Building2,
  Check,
  FileText,
  FolderKanban,
  GraduationCap,
  Layers,
  MessagesSquare,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { CTASection } from "../components/CTASection";
import { ImageFrame } from "../components/ImageFrame";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { site } from "../data/site";

const supportAreas = [
  {
    icon: BriefcaseBusiness,
    title: "Internship Support",
    description:
      "Guidance on identifying opportunities, preparing applications and approaching internship interviews.",
  },
  {
    icon: Users,
    title: "Industry Mentorship",
    description:
      "Structured exposure to practitioner perspective and feedback throughout the learning journey.",
  },
  {
    icon: FolderKanban,
    title: "Practical Projects",
    description: "Industry-aligned projects that create tangible examples of applied capability.",
  },
  {
    icon: Layers,
    title: "Professional Portfolio Development",
    description:
      "Build a body of evidence: lab reports, project work, CTF write-ups and security assessments.",
  },
  {
    icon: Award,
    title: "Certification Readiness",
    description: "Preparation aligned with industry-recognised certification pathways and expectations.",
  },
  {
    icon: FileText,
    title: "Résumé Building",
    description: "Translate technical experience into a clear, credible professional profile.",
  },
  {
    icon: MessagesSquare,
    title: "Interview Preparation",
    description: "Practise technical explanations, scenario discussions and professional communication.",
  },
  {
    icon: Target,
    title: "Career & Placement Support",
    description:
      "Structured readiness support connected to the institution's placement ecosystem where available.",
  },
];

const readinessSteps = [
  {
    number: "01",
    title: "Assess",
    description:
      "Identify strengths, gaps and career direction against the technical and professional expectations of cybersecurity roles.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Develop capability through labs, projects and assessments, while assembling evidence of what you can do.",
  },
  {
    number: "03",
    title: "Practise",
    description:
      "Rehearse interviews, explain technical decisions and present work clearly to a professional audience.",
  },
  {
    number: "04",
    title: "Present",
    description:
      "Bring together portfolio, résumé and communication skills for internship and placement conversations.",
  },
];

const portfolioEvidence = [
  "Lab investigation reports",
  "Vulnerability assessment write-ups",
  "SOC monitoring or incident notes",
  "CTF challenge write-ups",
  "Industry project case studies",
  "Certification preparation records",
];

export default function Careers() {
  return (
    <>
      <Seo
        title="Career & Opportunities"
        description="Discover RudraShield career-readiness support and recruitment opportunities: internship preparation, industry mentorship, practical projects, portfolio development and placement support."
        path="/careers"
      />

      <PageHero
        eyebrow="Career & opportunities"
        title="Career readiness that compounds."
        description="Technical skill matters. So does the ability to demonstrate it. RudraShield supports students in building the portfolio, professional profile and confidence to pursue cybersecurity opportunities."
        meta={[
          { label: "Focus", value: "Career readiness" },
          { label: "Support", value: "Mentorship · Projects · Placement prep" },
          { label: "Hiring", value: "Recruitment email" },
          { label: "Important", value: "No employment guarantee" },
        ]}
      />

      <section className="section section-bordered" aria-labelledby="readiness-heading">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Career readiness"
                title="Prepared for the work, not just the interview."
                description="Our career support is built into the learning journey. Students develop capability and learn how to present that capability clearly and credibly."
                id="readiness-heading"
              />
            </div>
            <Reveal delay={0.08}>
              <div className="callout callout--warning">
                <span className="callout__label">
                  <ShieldCheck size={14} aria-hidden="true" />
                  Readiness, not a guarantee
                </span>
                <p>
                  RudraShield provides career-readiness support. We do not promise or guarantee employment, internship
                  placement, a job offer or a specific salary outcome. Results depend on individual performance, market
                  conditions and employer decisions.
                </p>
              </div>
              <p className="prose-muted mt-6">
                The U-CSVAP framework prepares students with practical skills, professional evidence and structured
                preparation. The institution's placement ecosystem and each student's own effort remain central to the
                outcome.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="support-heading">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Support areas"
            title="Eight forms of support. One professional direction."
            id="support-heading"
          />
          <div className="split-4 mt-12">
            {supportAreas.map((area, index) => (
              <Reveal key={area.title} delay={(index % 4) * 0.04}>
                <article className="panel panel-corners icon-card h-full panel-interactive">
                  <div className="flex items-center justify-between gap-3">
                    <span className="icon-card__icon">
                      <area.icon aria-hidden="true" />
                    </span>
                    <span className="index-number">/ {String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5">{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bordered" aria-labelledby="pathway-heading">
        <div className="container-shell">
          <SectionHeading
            align="split"
            eyebrow="Readiness pathway"
            title="A structured route from capability to confidence."
            description="Career readiness is not a single workshop. It is a sequence of deliberate steps integrated into the learning journey."
            id="pathway-heading"
            aside={<span className="chip chip--cyan">Four-stage pathway</span>}
          />

          <div className="split-4 mt-12">
            {readinessSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <article className="panel panel-corners icon-card h-full">
                  <span className="display-md text-cyber-300/80">{step.number}</span>
                  <h3 className="mt-6">{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="portfolio-heading">
        <div className="container-shell">
          <div className="intro-grid">
            <div>
              <SectionHeading
                eyebrow="Professional portfolio"
                title="Evidence speaks louder than a list of topics."
                description="Students are encouraged to build a portfolio of applied work that demonstrates how they think, investigate, document and communicate."
                id="portfolio-heading"
              />
              <Reveal delay={0.08}>
                <ul className="mt-8 grid gap-0 sm:grid-cols-2">
                  {portfolioEvidence.map((item) => (
                    <li
                      className="flex items-start gap-2.5 border-t border-white/5 py-3.5 text-sm text-ink-soft"
                      key={item}
                    >
                      <Check size={14} className="mt-1 shrink-0 text-cyber-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="table-note mt-5">
                  Examples of evidence students can build. Portfolio content depends on program participation and the
                  projects completed.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="intro-media">
                <ImageFrame
                  className="intro-media__frame aspect-[4/3]"
                  name="team-overhead"
                  alt="A team working together around a table with laptops and documents"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
                <span className="intro-media__badge">Professional evidence</span>
                <div className="intro-media__tag">
                  <Layers size={14} className="text-cyber-500" aria-hidden="true" />
                  Portfolio · Résumé · Interviews
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-bordered" aria-labelledby="who-heading">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Who this supports"
            title="Built for students — and for the institutions that serve them."
            id="who-heading"
          />
          <div className="split-2 mt-12">
            <Reveal>
              <article className="panel panel-corners icon-card h-full">
                <div className="icon-card__head">
                  <span className="icon-card__icon">
                    <GraduationCap aria-hidden="true" />
                  </span>
                  <h3>For students</h3>
                </div>
                <p>
                  Grow from learner to professional with structured practice, feedback, portfolio development and
                  interview preparation. The goal is a credible, demonstrable base from which to pursue opportunities.
                </p>
                <span className="chip chip--cyan mt-5">Career-readiness support</span>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="panel panel-corners icon-card h-full">
                <div className="icon-card__head">
                  <span className="icon-card__icon">
                    <Building2 aria-hidden="true" />
                  </span>
                  <h3>For institutions</h3>
                </div>
                <p>
                  Strengthen student employability and placement readiness across cohorts with a structured program
                  that connects technical learning to professional outcomes and institutional priorities.
                </p>
                <span className="chip mt-5">University partnership</span>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Hiring & recruitment"
        title="Interested in joining RudraShield?"
        description={`Send your resume and career enquiry to our hiring team at ${site.hiringEmail.value}.`}
        primaryLabel="Email Hiring Team"
        primaryTo={site.hiringEmail.href}
        secondaryLabel="Career Enquiry Form"
        secondaryTo="/contact?enquiry=Internship%20Opportunities"
        note="Career readiness support · No guaranteed employment or internship placement"
      />
    </>
  );
}
