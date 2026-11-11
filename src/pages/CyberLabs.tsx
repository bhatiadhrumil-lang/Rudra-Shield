import { ArrowUpRight, ClipboardCheck, Info, ShieldCheck, Users, Wrench } from "lucide-react";
import { CTASection } from "../components/CTASection";
import { ImageFrame } from "../components/ImageFrame";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { labs } from "../data/labs";

const practicalPrinciples = [
  {
    icon: Wrench,
    title: "Work with real workflows",
    description:
      "Students use industry-relevant tools and methods, not abstract exercises that stop at the theory.",
  },
  {
    icon: Users,
    title: "Operate as a team",
    description:
      "Attack and defence simulations build the communication and coordination expected in security teams.",
  },
  {
    icon: ClipboardCheck,
    title: "Debrief and evidence",
    description:
      "Each exercise ends with analysis, documentation and feedback that turns activity into demonstrated capability.",
  },
];

export default function CyberLabs() {
  return (
    <>
      <Seo
        title="Cybersecurity Labs"
        description="Explore the eight cybersecurity lab domains in the RudraShield U-CSVAP ecosystem: SOC simulation, penetration testing, cloud security, forensics, secure coding, threat intelligence, cyber range and CTF."
        path="/labs"
      />

      <PageHero
        eyebrow="Learning environments"
        title="Cyber Security Learning & Lab Ecosystem"
        description="Developing practical technical, operational and professional cybersecurity competencies through industry-integrated learning environments."
        meta={[
          { label: "Lab domains", value: "Eight specialised areas" },
          { label: "Delivery", value: "Virtual / on-campus" },
          { label: "Learning model", value: "Applied and scenario-led" },
          { label: "Provisioning", value: "Scoped per partnership" },
        ]}
      />

      <section className="section section-bordered" aria-labelledby="labs-heading">
        <div className="container-shell">
          <SectionHeading
            align="split"
            eyebrow="Lab ecosystem"
            title="Eight environments. A connected capability pathway."
            description="Each lab develops a distinct set of skills, while the ecosystem as a whole prepares students to operate across the security lifecycle."
            id="labs-heading"
            aside={<span className="chip chip--cyan">08 Lab environments</span>}
          />

          <div className="notice-strip mt-8">
            <Info size={15} aria-hidden="true" />
            <span>
              <strong className="font-medium text-white">Infrastructure note:</strong> the ecosystem describes learning
              environments within the U-CSVAP framework. It does not represent an existing physical facility, live SOC
              or operational lab infrastructure. Delivery mode and provisioning are agreed with each institution during
              partnership scoping.
            </span>
          </div>

          <div className="lab-feature-grid">
            {labs.map((lab, index) => (
              <Reveal key={lab.slug} delay={(index % 2) * 0.08}>
                <article id={lab.slug} className="lab-feature anchor-offset h-full">
                  <div className="lab-feature__media">
                    <ImageFrame
                      name={lab.image}
                      alt={`${lab.name} learning environment`}
                      className="h-full w-full"
                      sizes="(min-width: 1024px) 45vw, 100vw"
                    />
                    <span className="lab-feature__code">{lab.code}</span>
                    <span className="lab-feature__icon">
                      <lab.icon aria-hidden="true" />
                    </span>
                  </div>
                  <div className="lab-feature__body">
                    <div className="flex items-start justify-between gap-4">
                      <h3>{lab.name}</h3>
                      <ArrowUpRight size={16} className="mt-1 shrink-0 text-cyber-500" aria-hidden="true" />
                    </div>
                    <p className="lab-feature__desc">{lab.description}</p>
                    <div className="lab-feature__caps">
                      {lab.capabilities.map((capability) => (
                        <span className="chip" key={capability}>
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="practical-learning-heading">
        <div className="container-shell">
          <div className="intro-grid">
            <div>
              <SectionHeading
                eyebrow="Practical learning"
                title="Labs are where understanding becomes capability."
                description="A lab is not a demonstration. It is a controlled environment for making decisions, using tools, seeing the consequences and improving through feedback."
                id="practical-learning-heading"
              />
              <Reveal delay={0.08}>
                <p className="prose-muted mt-5">
                  The U-CSVAP lab model places applied practice at the centre of the learning journey. Students work
                  through industry-aligned scenarios, document their findings and receive structured feedback that makes
                  progress visible.
                </p>
                <div className="mt-8 grid gap-5">
                  {practicalPrinciples.map((principle, index) => (
                    <div className="flex items-start gap-4" key={principle.title}>
                      <span className="icon-card__icon shrink-0">
                        <principle.icon aria-hidden="true" />
                      </span>
                      <div>
                        <span className="mono-label">Practice / 0{index + 1}</span>
                        <h3 className="mt-1 text-base">{principle.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="intro-media">
                <ImageFrame
                  className="intro-media__frame aspect-[4/5]"
                  name="soc-monitoring"
                  alt="Security monitoring dashboards displayed on a computer screen"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
                <span className="intro-media__badge">Industry context</span>
                <div className="intro-media__tag">
                  <ShieldCheck size={14} className="text-cyber-500" aria-hidden="true" />
                  Monitor · Investigate · Respond
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-bordered" aria-labelledby="delivery-heading">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How lab learning is delivered"
            title="Brief. Operate. Debrief."
            description="Each lab experience follows a disciplined cycle that builds judgment, not just familiarity with tools."
            id="delivery-heading"
          />

          <div className="split-3 mt-12">
            {[
              {
                number: "01",
                title: "Brief",
                description:
                  "Students receive context, objectives, constraints and the professional standard their work must meet.",
              },
              {
                number: "02",
                title: "Operate",
                description:
                  "They work through the scenario using appropriate tools and methods, making decisions under realistic conditions.",
              },
              {
                number: "03",
                title: "Debrief",
                description:
                  "Findings are analysed, documented and reviewed. Feedback turns the exercise into demonstrable capability.",
              },
            ].map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07}>
                <article className="panel panel-corners icon-card h-full">
                  <span className="display-md text-cyber-300/80">{step.number}</span>
                  <h3 className="mt-6">{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="callout mt-10">
            <span className="callout__label">
              <Info size={14} aria-hidden="true" />
              Lab availability
            </span>
            <p>
              Lab domains, environment configuration and delivery format are confirmed during partnership scoping. The
              program can be designed for virtual, on-campus or blended delivery, subject to institutional
              requirements.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Build a lab ecosystem around your students."
        description="Explore how the U-CSVAP lab framework can be scoped for your institution's programs, infrastructure and outcomes."
        primaryLabel="Discuss Lab Provisioning"
        primaryTo="/contact?enquiry=University%20Partnership"
        secondaryLabel="Explore the Framework"
        secondaryTo="/learning-framework"
        note="Lab environments are provisioned per partnership"
      />
    </>
  );
}
