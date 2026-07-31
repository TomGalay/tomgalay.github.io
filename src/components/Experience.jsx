import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SheetHeader from "./SheetHeader.jsx";
import useIsMobile from "../hooks/useIsMobile.js";
import { EXPERIENCE } from "../data.js";

const ease = [0.22, 1, 0.36, 1];

function JobBody({ job }) {
  return (
    <>
      <p className="tl-summary">{job.summary}</p>
      <ul className="tl-points">
        {job.points.map((p, j) => (
          <li key={j}>{p}</li>
        ))}
      </ul>
      <div className="tl-tags">
        {job.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </>
  );
}

function Meta({ job }) {
  return (
    <span className="tl-meta">
      {job.current ? <span className="current">● {job.period}</span> : job.period}
      <br />
      {job.place}
    </span>
  );
}

export default function Experience() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(0);
  const isMobile = useIsMobile();
  const job = EXPERIENCE[active];

  return (
    <section id="experience">
      <span className="sheet-no" aria-hidden="true">
        01
      </span>
      <div className="wrap">
        <SheetHeader no="01" title="Work Experience" note="INTERACTIVE ASSEMBLY LOG — SELECT A REVISION TO INSPECT" />

        {isMobile ? (
          <ol className="tl-acc">
            {EXPERIENCE.map((j, i) => (
              <li key={j.rev} className={`tl-acc-item${open === i ? " open" : ""}`}>
                <button
                  type="button"
                  className="tl-acc-head"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="tl-rev">{j.rev}</span>
                  <span className="tl-acc-titles">
                    <span className="tl-acc-role">{j.role}</span>
                    <span className="tl-acc-co">{j.company}</span>
                  </span>
                  <span className="tl-span">{j.span}</span>
                  <span className="tl-acc-ind" aria-hidden="true">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      className="tl-acc-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                    >
                      <div className="tl-acc-inner">
                        <p className="tl-acc-meta">
                          {j.period} · {j.place}
                        </p>
                        <JobBody job={j} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ol>
        ) : (
          <div className="tl">
            <ol className="tl-spine">
              <span className="tl-track" aria-hidden="true">
                <motion.span
                  className="tl-fill"
                  animate={{ height: `${((active + 1) / EXPERIENCE.length) * 100}%` }}
                  transition={{ duration: 0.5, ease }}
                />
              </span>
              {EXPERIENCE.map((j, i) => (
                <li key={j.rev}>
                  <button
                    type="button"
                    className={`tl-item${i === active ? " active" : ""}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                  >
                    <span className="tl-dot" aria-hidden="true" />
                    <span className="tl-rev">{j.rev}</span>
                    <span className="tl-role">{j.role}</span>
                    <span className="tl-company">{j.company}</span>
                    <span className="tl-span">{j.span}</span>
                  </button>
                </li>
              ))}
            </ol>

            <div className="tl-detail">
              <AnimatePresence mode="wait">
                <motion.article
                  key={job.rev}
                  className="tl-card"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <span className="tl-ghost" aria-hidden="true">
                    {job.rev}
                  </span>
                  <div className="tl-card-top">
                    <h3>{job.role}</h3>
                    <span className="tl-company">{job.company}</span>
                    <Meta job={job} />
                  </div>
                  <JobBody job={job} />
                  <div className="tl-controls">
                    <button
                      type="button"
                      className="tl-btn"
                      onClick={() => setActive(active - 1)}
                      disabled={active === 0}
                    >
                      ← PREV REV
                    </button>
                    <button
                      type="button"
                      className="tl-btn"
                      onClick={() => setActive(active + 1)}
                      disabled={active === EXPERIENCE.length - 1}
                    >
                      NEXT REV →
                    </button>
                    <span className="tl-count">
                      <b>{String(active + 1).padStart(2, "0")}</b> /{" "}
                      {String(EXPERIENCE.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
