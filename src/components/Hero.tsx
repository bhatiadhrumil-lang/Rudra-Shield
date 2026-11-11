import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { journeyStages } from "../data/learning";
import { ButtonLink } from "./ButtonLink";
import { ParticleField } from "./ParticleField";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="absolute inset-0 grid-backdrop opacity-80" aria-hidden="true" />
      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        <ParticleField />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-abyss-900 to-transparent" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <div className="container-shell relative z-10">
        <div className="hero__grid">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="eyebrow">
              <span className="eyebrow__live" aria-hidden="true" />
              University–industry cybersecurity collaboration
            </span>

            <h1 id="hero-title" className="display-xl mt-6">
              Building the Next Generation of{" "}
              <span className="text-gradient">Cybersecurity Professionals</span>
            </h1>

            <p className="lede mt-7">
              Empowering universities and students through industry-integrated cybersecurity education, hands-on
              laboratories, real-world projects and professional career development.
            </p>

            <div className="hero-actions">
              <ButtonLink to="/programs" variant="primary">
                Explore Our Programs
              </ButtonLink>
              <ButtonLink to="/contact?enquiry=University%20Partnership" variant="secondary">
                Partner With Us
              </ButtonLink>
            </div>

            <div className="hero-flags">
              <span className="hero-flag">
                <ShieldCheck aria-hidden="true" />
                No curriculum modification
              </span>
              <span className="hero-flag">
                <CheckCircle2 aria-hidden="true" />
                Delivered alongside degree programs
              </span>
              <span className="hero-flag">
                <CheckCircle2 aria-hidden="true" />
                Hands-on lab ecosystem
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            aria-hidden="true"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
          >
            <div className="hero-visual__glow" />
            <div className="hero-sweep" />

            <div className="hero-orbit hero-orbit--outer">
              <span className="hero-orbit__node hero-orbit__node--top" />
              <span className="hero-orbit__node hero-orbit__node--bottom" />
            </div>
            <div className="hero-orbit hero-orbit--mid">
              <span className="hero-orbit__node hero-orbit__node--right" />
            </div>
            <div className="hero-orbit hero-orbit--inner" />

            <div className="hero-emblem">
              <span className="hero-emblem__ring" />
              <img src="/brand/logo-emblem.webp" alt="" width={540} height={597} />
            </div>

            <div className="hero-hud hero-hud--tl">
              <div className="hero-hud__label">
                <span className="h-1 w-1 rounded-full bg-cyber-500" />
                Program
              </div>
              <div className="hero-hud__value">U-CSVAP</div>
              <div className="hero-hud__sub">Industry-integrated</div>
            </div>

            <div className="hero-hud hero-hud--bl">
              <div className="hero-hud__label">Competency framework</div>
              <div className="hero-hud__value">06 Levels</div>
              <div className="hero-hud__bars">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="hero-hud hero-hud--br">
              <div className="hero-hud__label">Lab ecosystem</div>
              <div className="hero-hud__value">08 Environments</div>
              <div className="hero-hud__sub">SOC · Cloud · Range · CTF</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-rail"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <span className="hero-rail__label">Program pathway</span>
          <div className="hero-rail__stages">
            {journeyStages.map((stage, index) => (
              <span className="hero-rail__stage" key={stage.id}>
                <stage.icon aria-hidden="true" />
                {stage.label}
                {index < journeyStages.length - 1 ? (
                  <ArrowRight width={11} height={11} className="ml-2 text-ink-dim/60" aria-hidden="true" />
                ) : null}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
