import {
  BriefcaseBusiness,
  Compass,
  FlaskConical,
  Layers,
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

const objectives = [
  "Build industry-ready cybersecurity capability through applied, industry-aligned learning.",
  "Strengthen university–industry collaboration with a sustainable engagement model.",
  "Improve graduate employability and placement readiness.",
  "Support institutional quality, accreditation and reputation goals.",
  "Create a future-ready cybersecurity talent pipeline for industry.",
];

const approach = [
  {
    number: "01",
    title: "Co-design with faculty",
    description:
      "Align program design with institutional goals and the existing academic structure from the outset.",
  },
  {
    number: "02",
    title: "Industry-led delivery",
    description:
      "Practitioners bring current tools, methods and professional expectations into the learning experience.",
  },
  {
    number: "03",
    title: "Applied practice",
    description:
      "Students build capability in labs, real-world projects, cyber ranges and CTF environments.",
  },
  {
    number: "04",
    title: "Career preparation",
    description:
      "Portfolio development, mentorship and placement readiness prepare students for the transition to work.",
  },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Curriculum-safe",
    description: "Delivered as a value-added layer. No modification to the approved university curriculum.",
  },
  {
    icon: FlaskConical,
    title: "Practical by design",
    description: "Hands-on labs, projects and simulations sit at the centre of the learning experience.",
  },
  {
    icon: Users,
    title: "Joint governance",
    description: "A committee structure keeps academic alignment, quality and student outcomes visible.",
  },
  {
    icon: Target,
    title: "Outcome focus",
    description: "Progress is assessed against a defined, six-level cybersecurity competency framework.",
  },
  {
    icon: Layers,
    title: "Flexible engagement",
    description: "Annual, cohort-based, volume-based and customised partnership models are available.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career readiness built in",
    description: "Portfolio, interview and placement support accompany the technical learning journey.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about RudraShield Cyber Systems, our vision, mission and approach to industry-integrated cybersecurity education for universities."
        path="/about"
      />

      <PageHero
        eyebrow="About RudraShield"
        title="An education partner for the cybersecurity workforce of tomorrow."
        description="RudraShield Cyber Systems is a cybersecurity education and training organisation focused on university–industry collaboration, practical security training and cybersecurity career development."
        meta={[
          { label: "Focus", value: "Cybersecurity education" },
          { label: "Model", value: "Value-added delivery" },
          { label: "Curriculum", value: "No modification required" },
          { label: "Audience", value: "Universities & industry" },
        ]}
      />

      <section className="section section-bordered" aria-labelledby="overview-heading">
        <div className="container-shell">
          <div className="intro-grid">
            <div>
              <SectionHeading
                eyebrow="Company overview"
                title="We connect academic learning to industry practice."
                id="overview-heading"
              />
              <Reveal delay={0.08}>
                <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
                  <p>
                    RudraShield Cyber Systems works at the intersection of higher education and the cybersecurity
                    industry. We help universities strengthen graduate employability through structured, practical
                    learning that sits alongside existing degree programs.
                  </p>
                  <p>
                    Our work is organised around the {site.programAcronym} — {site.programName} — an industry-integrated
                    employability framework built on industry-led instruction, hands-on labs, realistic projects and
                    career preparation.
                  </p>
                  <p className="text-ink-dim">
                    Through a collaborative governance model, academic alignment remains with the university while
                    industry relevance is built in from day one.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="chip chip--cyan">Industry-integrated</span>
                  <span className="chip">Practical-first</span>
                  <span className="chip">Career-focused</span>
                  <span className="chip">University-governed</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="intro-media">
                <ImageFrame
                  className="intro-media__frame aspect-[4/5]"
                  name="student-discussion"
                  alt="Students and a mentor discussing work around a laptop"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
                <span className="intro-media__badge">University × Industry</span>
                <div className="intro-media__tag">
                  <Users size={14} className="text-cyber-500" aria-hidden="true" />
                  Collaborative by design
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="vision-heading">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Direction"
            title="A clear reason to exist. A practical way forward."
            id="vision-heading"
          />

          <div className="split-2 mt-12">
            <Reveal>
              <article className="panel panel-corners icon-card h-full">
                <div className="icon-card__head">
                  <span className="icon-card__icon">
                    <Compass aria-hidden="true" />
                  </span>
                  <span className="mono-label">01 / Vision</span>
                </div>
                <h3 className="display-sm mt-8">Our Vision</h3>
                <p className="mt-4">
                  A cybersecurity talent ecosystem where graduates enter the workforce with practical, verified
                  capability, professional confidence and a clear path to meaningful careers.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="panel panel-corners icon-card h-full">
                <div className="icon-card__head">
                  <span className="icon-card__icon">
                    <Target aria-hidden="true" />
                  </span>
                  <span className="mono-label">02 / Mission</span>
                </div>
                <h3 className="display-sm mt-8">Our Mission</h3>
                <p className="mt-4">
                  To work alongside universities and industry to deliver practical, industry-integrated cybersecurity
                  education that strengthens student employability and institutional outcomes — without disrupting
                  approved academic programs.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-bordered" aria-labelledby="objectives-heading">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Strategic objectives"
                title="Deliberate outcomes, not vague ambition."
                description="Our objectives connect institutional priorities with the practical capabilities employers need."
                id="objectives-heading"
              />
            </div>
            <Reveal>
              <ol className="numbered-list">
                {objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="approach-heading">
        <div className="container-shell">
          <SectionHeading
            align="split"
            eyebrow="Our approach"
            title="Academic alignment and industry relevance, together."
            description="We build with the institution, not around it. Each layer of the program is designed to fit the academic context and prepare students for professional practice."
            id="approach-heading"
          />

          <div className="split-2 mt-12">
            {approach.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <article className="panel panel-corners icon-card h-full">
                  <div className="flex items-start justify-between gap-4">
                    <span className="index-number">{step.number}</span>
                    <span className="table-note">Approach</span>
                  </div>
                  <h3 className="mt-8 text-lg">{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bordered" aria-labelledby="why-heading">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why RudraShield"
            title="Built for institutions that take employability seriously."
            description="A partnership designed to be academically credible, operationally practical and professionally relevant."
            id="why-heading"
          />

          <div className="split-3 mt-12">
            {differentiators.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="panel panel-corners icon-card h-full panel-interactive">
                  <div className="icon-card__head">
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

      <section className="section section-veil" aria-labelledby="commitment-heading">
        <div className="container-shell">
          <div className="intro-grid">
            <div>
              <SectionHeading
                eyebrow="Our commitment"
                title="Our Commitment to Cybersecurity Education"
                id="commitment-heading"
              />
              <Reveal delay={0.08}>
                <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
                  <p>
                    Cybersecurity capability cannot be built through theory alone. Our commitment is to practical,
                    applied education that respects the rigor of academic programs while responding to the pace of
                    industry.
                  </p>
                  <p className="text-ink-dim">
                    {site.programAcronym} is delivered alongside existing degree programs as a value-added /
                    industry-readiness initiative. The program is designed to complement the student's academic journey,
                    not compete with it.
                  </p>
                </div>

                <div className="callout mt-7">
                  <span className="callout__label">
                    <ShieldCheck size={14} aria-hidden="true" />
                    No curriculum modification
                  </span>
                  <p>
                    The program does not require modification of the university's approved curriculum. Industry
                    readiness is layered alongside the degree, preserving academic ownership and institutional
                    autonomy.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="intro-media">
                <ImageFrame
                  className="intro-media__frame aspect-[4/3]"
                  name="campus-building"
                  alt="A university campus building with open green space"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
                <div className="intro-media__tag">
                  <Compass size={14} className="text-cyber-500" aria-hidden="true" />
                  Aligned with academic structure
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Bring industry-ready cybersecurity education to your campus."
        description="Explore a value-added collaboration model designed around your institution, your students and your academic priorities."
        primaryLabel="Partner With Us"
        primaryTo="/contact?enquiry=University%20Partnership"
        secondaryLabel="Explore U-CSVAP"
        secondaryTo="/programs"
      />
    </>
  );
}
