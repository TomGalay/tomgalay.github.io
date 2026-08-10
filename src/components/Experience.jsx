import { Fragment, useState } from "react";
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

function concurrentOf(job) {
  if (!job.link) return [];
  return EXPERIENCE.filter((j) => j.link === job.link && j.rev !== job.rev);
}

export default function Experience() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(0);
  const isMobile = useIsMobile();
  const job = EXPERIENCE[active];
  const paired = job.link ? EXPERIENCE.filter((j) => j.link === job.link) : [job];
  const isPair = paired.length > 1;
  const lastIdx = EXPERIENCE.indexOf(paired[paired.length - 1]);

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
                        {concurrentOf(j).length > 0 && (
                          <p className="tl-acc-link">
                            ⟂ Concurrent with{" "}
                            {concurrentOf(j)
                              .map((o) => o.role)
                              .join(" · ")}
                          </p>
                        )}
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
                  className={isPair ? "tl-fill pair" : "tl-fill"}
                  animate={{ height: `${((lastIdx + 1) / EXPERIENCE.length) * 100}%` }}
                  transition={{ duration: 0.5, ease }}
                />
              </span>
              {EXPERIENCE.map((j, i) => {
                const linked = isPair && paired.some((p) => p.rev === j.rev) && i !== active;
                return (
                  <li key={j.rev}>
                    <button
                      type="button"
                      className={`tl-item${i === active ? " active" : ""}${linked ? " linked" : ""}`}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-pressed={i === active}
                    >
                      <span className="tl-dot" aria-hidden="true" />
                      <span className="tl-role">{j.role}</span>
                      <span className="tl-company">{j.company}</span>
                      <span className="tl-span">{j.span}</span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="tl-detail">
              <AnimatePresence mode="wait">
                <motion.div
                  key={job.link ?? job.rev}
                  className="tl-stack"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease }}
                >
                  {paired.map((j, k) => (
                    <Fragment key={j.rev}>
                      {k > 0 && (
                        <div className="tl-pair-link" aria-hidden="true">
                          <span>ADDITIONAL ROLE</span>
                        </div>
                      )}
                      <article
                        className={`tl-card${isPair ? " tl-card--mini" : ""}${
                          j.rev === job.rev ? " primary" : " secondary"
                        }`}
                        onMouseEnter={isPair ? () => setActive(EXPERIENCE.indexOf(j)) : undefined}
                      >
                        {j.rev === job.rev && (
                          <span className="tl-ghost" aria-hidden="true">
                            {j.period.split(" – ")[0]}
                          </span>
                        )}
                        <div className="tl-card-top">
                          <h3>{j.role}</h3>
                          <span className="tl-company">{j.company}</span>
                          <Meta job={j} />
                        </div>
                        <JobBody job={j} />
                      </article>
                    </Fragment>
                  ))}
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={job.link ?? job.rev}
                  className="tl-controls"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                >
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
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
