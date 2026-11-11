import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { programLevels } from "../data/program";

export function ProgramLevels() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLevel = programLevels[activeIndex];
  const reducedMotion = useReducedMotion();

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % programLevels.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + programLevels.length) % programLevels.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = programLevels.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setActiveIndex(nextIndex);
      document.getElementById(`level-tab-${programLevels[nextIndex].id}`)?.focus();
    }
  };

  return (
    <div className="level-layout">
      <div
        className="level-tabs"
        role="tablist"
        aria-label="Six-level cybersecurity competency framework"
        aria-orientation="vertical"
      >
        {programLevels.map((level, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={level.id}
              id={`level-tab-${level.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="level-panel"
              tabIndex={isActive ? 0 : -1}
              className="level-tab"
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className="level-tab__num">LEVEL {level.number}</span>
              <span className="level-tab__name">{level.title}</span>
              <span className="level-tab__icon" aria-hidden="true">
                <level.icon />
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="level-panel"
        className="panel panel-corners level-panel"
        role="tabpanel"
        aria-labelledby={`level-tab-${activeLevel.id}`}
        tabIndex={0}
      >
        <span className="level-panel__watermark" aria-hidden="true">
          {activeLevel.number}
        </span>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeLevel.id}
            initial={reducedMotion ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, x: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="level-panel__eyebrow">
              <span className="level-panel__icon">
                <activeLevel.icon aria-hidden="true" />
              </span>
              <div>
                <span className="mono-label">Competency level {activeLevel.number} / 06</span>
                <h3>{activeLevel.title}</h3>
              </div>
            </div>

            <p className="level-panel__desc">{activeLevel.description}</p>

            <div className="level-columns">
              <div>
                <h4>Focus areas</h4>
                <div className="level-chips">
                  {activeLevel.focus.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4>Key capabilities</h4>
                <ul className="level-caps">
                  {activeLevel.capabilities.map((capability) => (
                    <li key={capability}>
                      <Check aria-hidden="true" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="level-progress" aria-hidden="true">
              {programLevels.map((level) => (
                <span key={level.id} className={level.id <= activeLevel.id ? "is-active" : ""} />
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <span className="table-note">Progression: foundation → professional readiness</span>
              {activeIndex < programLevels.length - 1 ? (
                <button
                  type="button"
                  className="link-arrow"
                  onClick={() => setActiveIndex(activeIndex + 1)}
                >
                  Next level
                  <ChevronRight aria-hidden="true" />
                </button>
              ) : (
                <span className="link-arrow text-cyber-300">
                  Career readiness
                  <ChevronRight aria-hidden="true" />
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
