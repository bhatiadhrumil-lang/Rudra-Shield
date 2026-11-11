import { Link } from "react-router-dom";
import { journeyStages } from "../data/learning";

type JourneyRailProps = {
  linked?: boolean;
};

export function JourneyRail({ linked = true }: JourneyRailProps) {
  return (
    <ol className="journey">
      {journeyStages.map((stage, index) => {
        const content = (
          <>
            <span className="journey__index" aria-hidden="true">
              0{index + 1}
            </span>
            <span className="journey__node">
              <stage.icon aria-hidden="true" />
            </span>
            <span className="journey__content">
              <span className="journey__stage">{stage.label}</span>
              <span className="journey__desc">{stage.description}</span>
            </span>
          </>
        );

        return (
          <li className="journey__step" key={stage.id}>
            {linked ? (
              <Link
                to="/learning-framework"
                className="flex h-full flex-col items-center gap-3 text-center max-md:flex-row max-md:text-left"
              >
                {content}
              </Link>
            ) : (
              <div className="flex h-full flex-col items-center gap-3 text-center max-md:flex-row max-md:text-left">
                {content}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
