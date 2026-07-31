import { SKILL_GROUPS } from "../data.js";

export default function Ticker() {
  const items = SKILL_GROUPS.flatMap((g) => g.items.map((i) => i.toUpperCase()));

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((dup) =>
          items.map((name, i) => (
            <span key={`${dup}-${i}`}>
              <b>✚</b>
              {name}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
