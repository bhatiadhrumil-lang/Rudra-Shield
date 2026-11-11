import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { CircuitPattern } from "./CircuitPattern";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  meta?: Array<{ label: string; value: string }>;
  children?: ReactNode;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function PageHero({ eyebrow, title, description, meta = [], children }: PageHeroProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="page-hero">
      <div className="absolute inset-0 grid-backdrop opacity-70" aria-hidden="true" />
      <CircuitPattern className="opacity-[0.16]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-abyss-900" aria-hidden="true" />
      <div className="container-shell relative z-10">
        <div className="page-hero__grid">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <span className="eyebrow">
              <span className="eyebrow__live" aria-hidden="true" />
              {eyebrow}
            </span>
            <h1 className="display-lg page-hero__title">{title}</h1>
            <p className="lede page-hero__desc">{description}</p>
            {children ? <div className="mt-8">{children}</div> : null}
          </motion.div>

          {meta.length > 0 ? (
            <motion.div
              className="page-hero__aside"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
            >
              {meta.map((item) => (
                <div className="page-hero__meta" key={item.label}>
                  <span>{item.label}</span>
                  <span className="page-hero__meta-value">{item.value}</span>
                </div>
              ))}
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
