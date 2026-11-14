import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  FlaskConical,
  FolderKanban,
  Info,
  Presentation,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import { CTASection } from "../components/CTASection";
import { Hero } from "../components/Hero";
import { ImageFrame } from "../components/ImageFrame";
import { JourneyRail } from "../components/JourneyRail";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { labs } from "../data/labs";
import { programHighlights } from "../data/program";
import { site } from "../data/site";

const introPoints = [
  "Industry-integrated learning",
  "Practical cybersecurity training",
  "Hands-on laboratory experience",
  "Real-world projects",
  "Internship support",
  "Career and placement readiness",
];

const highlightIcons = [Presentation, FlaskConical, FolderKanban, BriefcaseBusiness, Target, BadgeCheck];

const institutionalBenefits = [
  {
    title: "Enhanced Academic Quality",
    description: "Strengthen curriculum with practical, skill-based cybersecurity education.",
  },
  {
    title: "Improved Student Experience",
    description: "Engaging, hands-on learning that builds confidence and competence.",
  },
  {
    title: "Future-Ready Graduates",
    description: "Well-prepared for the evolving demands of the digital world.",
  },
  {
    title: "Stronger Institutional Reputation",
    description: "Position the university as a leader in emerging technology education.",
  },
  {
    title: "Sustainable Academic Growth",
    description: "Long-term value through relevant programs and future-focused initiatives.",
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="RudraShield Cyber Systems | Building Industry-Ready Cybersecurity Professionals"
        description="RudraShield Cyber Systems partners with universities to deliver industry-integrated cybersecurity education, hands-on laboratories, real-world projects and career readiness through the U-CSVAP program."
        path="/"
      />

      <Hero />

      <section className="section section-bordered" aria-labelledby="intro-heading">
        <div className="container-shell">
          <div className="intro-grid">
            <Reveal>
              <div className="intro-media">
                <ImageFrame
                  className="intro-media__frame aspect-[4/3]"
                  name="students-lab"
                  alt="Close-up of hands using a laptop during a collaborative learning exercise"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  priority
                />
                <span className="intro-media__badge">No curriculum change</span>
                <div className="intro-media__tag">
                  <ShieldCheck size={14} className="text-cyber-500" aria-hidden="true" />
                  Industry-integrated learning layer
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Who we are"
                title="Securing the Future Through Practical Cybersecurity Education"
                description="RudraShield Cyber Systems works with universities and educational institutions to build industry-ready cybersecurity professionals. Our programs extend existing degree pathways with applied learning, structured labs, real-world projects and professional preparation."
                id="intro-heading"
              />

              <Reveal delay={0.1}>
                <p className="prose-muted mt-5 max-w-2xl">
                  The U-CSVAP framework is delivered alongside approved academic programs as a value-added industry
                  readiness initiative. Universities gain a practical, industry-aligned learning layer without
                  modifying their existing curriculum.
                </p>

                <div className="intro-points">
                  {introPoints.map((point) => (
                    <div className="intro-point" key={point}>
                      <CheckCircle2 aria-hidden="true" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink to="/about" variant="secondary" size="sm">
                    About RudraShield
                  </ButtonLink>
                  <Link to="/programs" className="link-arrow self-center">
                    Explore the program
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="highlights-heading">
        <div className="container-shell">
          <SectionHeading
            align="split"
            eyebrow="Program highlights"
            title="An education layer built around demonstrated capability."
            description="Six connected components turn cybersecurity theory into practical, professional readiness — designed to complement academic rigor with industry practice."
            id="highlights-heading"
            aside={<ButtonLink to="/programs" variant="secondary" size="sm">View the U-CSVAP program</ButtonLink>}
          />

          <Reveal>
            <div className="capability-grid">
              {programHighlights.map((highlight, index) => {
                const Icon = highlightIcons[index];
                return (
                  <article className="capability-cell" key={highlight.title}>
                    <div className="capability-cell__top">
                      <span className="capability-cell__icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="index-number">/ {String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-veil section-bordered" aria-labelledby="labs-preview-heading">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Lab ecosystem"
                title="Learn in environments that behave like the real thing."
                description="Eight specialised lab domains develop technical, operational and professional cybersecurity competencies through applied practice."
                id="labs-preview-heading"
              />
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="chip chip--cyan">08 Lab environments</span>
                <span className="chip">Virtual / on-campus</span>
              </div>
              <div className="mt-7">
                <ButtonLink to="/labs" variant="secondary" size="sm">
                  Explore the labs
                </ButtonLink>
              </div>
              <p className="mt-6 flex max-w-sm items-start gap-2 text-[0.72rem] leading-relaxed text-ink-dim">
                <Info size={14} className="mt-0.5 shrink-0 text-cyber-500" aria-hidden="true" />
                Lab infrastructure and delivery mode are scoped with each institution. This website does not claim an
                operational live SOC or physical facility.
              </p>
            </div>

            <Reveal>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {labs.map((lab) => (
                  <Link to={`/labs#${lab.slug}`} className="lab-tile group" key={lab.slug}>
                    <div className="lab-tile__top">
                      <span className="lab-tile__icon">
                        <lab.icon aria-hidden="true" />
                      </span>
                      <ArrowUpRight className="lab-tile__arrow" aria-hidden="true" />
                    </div>
                    <div className="relative z-10 mt-4">
                      <span className="mono-label">{lab.code}</span>
                      <h3>{lab.name}</h3>
                      <p>{lab.capabilities.slice(0, 2).join(" · ")}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="journey-heading">
        <div className="container-shell">
          <SectionHeading
            align="split"
            eyebrow="Learning journey"
            title="A deliberate path from fundamentals to professional readiness."
            description="Every stage builds on the last. Students learn, practise, simulate, defend, attack and deploy their capability in increasingly realistic contexts."
            id="journey-heading"
            aside={<ButtonLink to="/learning-framework" variant="secondary" size="sm">See the framework</ButtonLink>}
          />
          <JourneyRail />
        </div>
      </section>

      <section className="section section-veil section-bordered" aria-labelledby="benefits-heading">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Institutional benefits"
            title="Value that extends beyond the classroom."
            description="A practical cybersecurity layer strengthens the student experience and the institution's position in a rapidly evolving technology landscape."
            id="benefits-heading"
          />
          <Reveal>
            <div className="benefit-rail">
              {institutionalBenefits.map((benefit, index) => (
                <article className="benefit-item" key={benefit.title}>
                  <span className="benefit-item__num">IMPACT / {String(index + 1).padStart(2, "0")}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  <span className="benefit-item__line" aria-hidden="true" />
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Build with RudraShield"
        title="Build the Future of Cybersecurity With RudraShield"
        description="Create a practical, industry-integrated cybersecurity pathway for your students without changing your approved curriculum."
        primaryLabel="Become a University Partner"
        primaryTo="/contact?enquiry=University%20Partnership"
        secondaryLabel="Contact Our Team"
        secondaryTo="/contact"
        note={`${site.programAcronym} · Value-added program · No curriculum modification required`}
      />
    </>
  );
}
