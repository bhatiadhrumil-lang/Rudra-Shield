import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  aside?: ReactNode;
  align?: "left" | "center" | "split";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  aside,
  align = "left",
  className = "",
  id,
}: SectionHeadingProps) {
  const content = (
    <>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 id={id} className="display-md section-heading__title">
        {title}
      </h2>
      {description ? <p className="section-heading__desc prose-muted">{description}</p> : null}
    </>
  );

  if (align === "split") {
    return (
      <Reveal>
        <div className={`section-heading section-heading--split ${className}`}>
          <div className="section-heading">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h2 id={id} className="display-md section-heading__title">
              {title}
            </h2>
          </div>
          <div className="section-heading__aside">
            {description ? <p className="prose-muted">{description}</p> : null}
            {aside}
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <div className={`section-heading ${align === "center" ? "section-heading--center" : ""} ${className}`}>
        {content}
        {aside ? <div className="section-heading__aside">{aside}</div> : null}
      </div>
    </Reveal>
  );
}
