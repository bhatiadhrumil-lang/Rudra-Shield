import {
  ClipboardCheck,
  FileText,
  FolderKanban,
  GraduationCap,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { CTASection } from "../components/CTASection";
import { ImageFrame } from "../components/ImageFrame";
import { JourneyRail } from "../components/JourneyRail";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { journeyStages, programTargets } from "../data/learning";

const evidenceCards = [
  {
    icon: ClipboardCheck,
    title: "Assessment checkpoints",
    description: "Structured checks confirm conceptual understanding and practical performance at each level.",
  },
  {
    icon: FileText,
    title: "Lab and investigation reports",
    description: "Professional documentation demonstrates how findings were reached and communicated.",
  },
  {
    icon: FolderKanban,
    title: "Industry-aligned projects",
    description: "Applied project work shows the ability to solve realistic security problems end to end.",
  },
  {
    icon: UserRoundCheck,
    title: "Portfolio and interviews",
    description: "Students build evidence of capability and practise presenting it to technical audiences.",
  },
];

export default function LearningFramework() {
  return (
    <>
      <Seo
        title="Learning Framework"
        description="See the RudraShield learning journey: Learn, Practice, Simulate, Defend, Attack and Deploy, with program targets, student outcomes and evidence of progress."
        path="/learning-framework"
      />

      <PageHero
        eyebrow="Learning framework"
        title="From first principles to professional readiness."
        description="A six-stage learning journey that moves students from conceptual understanding to applied, professional capability through deliberate practice."
        meta={[
          { label: "Journey stages", value: "Six progressive stages" },
          { label: "Learning model", value: "Concept → application" },
          { label: "Assessment", value: "Evidence-led progression" },
          { label: "Destination", value: "Career readiness" },
        ]}
      />

      <section className="section section-bordered" aria-labelledby="journey-overview-heading">
        <div className="container-shell">
          <SectionHeading
            align="split"
            eyebrow="The student journey"
            title="Learn. Practice. Simulate. Defend. Attack. Deploy."
            description="The sequence creates a complete learning loop. Knowledge becomes skill, skill is tested in simulation, and the result is demonstrated through professional work."
            id="journey-overview-heading"
            aside={<span className="chip chip--cyan">Learn → Deploy</span>}
          />
          <JourneyRail linked={false} />
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="stage-detail-heading">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Stage by stage"
            title="What happens at each stage — and why it matters."
            description="Every stage has a specific purpose and builds toward the professional capabilities employers expect."
            id="stage-detail-heading"
          />

          <div className="stage-list">
            {journeyStages.map((stage, index) => (
              <Reveal key={stage.id} delay={index * 0.04}>
                <article className="stage-row">
                  <div className="stage-row__node">
                    <stage.icon aria-hidden="true" />
                  </div>
                  <div className="stage-row__title">
                    <span className="stage-row__index">0{index + 1}</span>
                    <h3>{stage.label}</h3>
                  </div>
                  <div className="stage-row__body">
                    <p>{stage.detail}</p>
                    <div className="stage-row__tags">
                      {stage.tags.map((tag) => (
                        <span className="chip" key={tag}>
                          {tag}
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

      <section className="section section-bordered" aria-labelledby="outcomes-heading">
        <div className="container-shell">
          <SectionHeading
            align="split"
            eyebrow="Student outcomes"
            title="The practical scope of the program."
            description="The U-CSVAP framework is designed around substantial laboratory practice, realistic scenarios and structured career preparation."
            id="outcomes-heading"
            aside={<span className="chip chip--warning">Program targets</span>}
          />

          <Reveal>
            <div className="stat-grid mt-12">
              {programTargets.map((target) => (
                <article
                  className="stat-card"
                  key={target.label}
                >
                  <div className="stat-card__value">{target.value}</div>
                  <div className="stat-card__label">{target.label}</div>
                  <div className="stat-card__hint">{target.hint}</div>
                </article>
              ))}
            </div>
          </Reveal>

          <div className="callout callout--warning mt-8">
            <span className="callout__label">
              <ShieldCheck size={14} aria-hidden="true" />
              About these figures
            </span>
            <p>
              The figures and outcomes shown on this page are program targets and intended scope as described in the
              RudraShield company profile. They are not independently audited achievements. Actual delivery depends on
              the institutional agreement, student participation and program design.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-veil" aria-labelledby="evidence-heading">
        <div className="container-shell">
          <div className="intro-grid">
            <div>
              <SectionHeading
                eyebrow="Evidence of progress"
                title="Readiness should be visible, not assumed."
                description="Students accumulate tangible evidence of capability throughout the journey — the kind of material that supports interviews, internships and professional credibility."
                id="evidence-heading"
              />
              <Reveal delay={0.08}>
                <div className="mt-8 grid gap-5">
                  {evidenceCards.map((card) => (
                    <div className="flex items-start gap-4" key={card.title}>
                      <span className="icon-card__icon shrink-0">
                        <card.icon aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-base">{card.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <ButtonLink to="/careers" variant="secondary" size="sm">
                    See career support
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="intro-media">
                <ImageFrame
                  className="intro-media__frame aspect-[4/5]"
                  name="library-study"
                  alt="Students studying and collaborating in a university library"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
                <span className="intro-media__badge">Outcome-led</span>
                <div className="intro-media__tag">
                  <GraduationCap size={14} className="text-cyber-500" aria-hidden="true" />
                  Practice with purpose
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Give your students a journey worth taking."
        description="Explore how the U-CSVAP learning framework can be integrated with your institution's academic and employability goals."
        primaryLabel="Partner With Us"
        primaryTo="/contact?enquiry=University%20Partnership"
        secondaryLabel="Explore Programs"
        secondaryTo="/programs"
      />
    </>
  );
}
