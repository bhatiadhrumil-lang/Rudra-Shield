import type { ReactNode } from "react";
import { ButtonLink } from "./ButtonLink";
import { CircuitPattern } from "./CircuitPattern";
import { Reveal } from "./Reveal";

type CTASectionProps = {
  title: ReactNode;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  eyebrow?: string;
  note?: string;
};

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  eyebrow = "Next step",
  note,
}: CTASectionProps) {
  return (
    <section className="section-sm">
      <div className="container-shell">
        <Reveal>
          <div className="cta-panel panel-corners">
            <div className="absolute inset-0 grid-backdrop opacity-40" aria-hidden="true" />
            <CircuitPattern className="opacity-25" />
            <img
              src="/brand/logo-emblem.webp"
              alt=""
              className="cta-panel__emblem"
              loading="lazy"
              aria-hidden="true"
            />
            <div className="cta-panel__content">
              <span className="eyebrow">{eyebrow}</span>
              <h2 className="display-md mt-4 max-w-2xl">{title}</h2>
              <p className="lede mt-5">{description}</p>
              <div className="hero-actions">
                <ButtonLink to={primaryTo} variant="primary">
                  {primaryLabel}
                </ButtonLink>
                {secondaryLabel && secondaryTo ? (
                  <ButtonLink to={secondaryTo} variant="secondary">
                    {secondaryLabel}
                  </ButtonLink>
                ) : null}
              </div>
              {note ? <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-ink-dim">{note}</p> : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
