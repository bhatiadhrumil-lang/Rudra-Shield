import { Plus } from "lucide-react";
import { useId, useState } from "react";
import type { FaqItem } from "../data/faqs";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId().replace(/:/g, "");

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-faq-button-${index}`;
        const panelId = `${baseId}-faq-panel-${index}`;

        return (
          <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.question}>
            <h3 className="faq-item__heading">
              <button
                type="button"
                id={buttonId}
                className="faq-item__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="faq-item__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="faq-item__question">{item.question}</span>
                <span className="faq-item__icon" aria-hidden="true">
                  <Plus />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              className={`faq-item__panel ${isOpen ? "is-open" : ""}`}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
            >
              <div className="faq-item__panel-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
