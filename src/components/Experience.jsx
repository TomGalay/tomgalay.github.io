import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SheetHeader from "./SheetHeader.jsx";
import useIsMobile from "../hooks/useIsMobile.js";
import { EXPERIENCE } from "../data.js";

const ease = [0.22, 1, 0.36, 1];

const mi = (s) => {
  const [y, m] = s.split("-").map(Number);
  return y * 12 + (m - 1);
};

const NOW = new Date();
const NOW_MI = NOW.getFullYear() * 12 + NOW.getMonth();
const T0 = Math.min(...EXPERIENCE.map((j) => mi(j.start)));
const T1 = NOW_MI + 3;
const TOTAL = T1 - T0;

const pos = (m) => `${(((m - T0) / TOTAL) * 100).toFixed(3)}%`;
const len = (a, b) => `${(((b - a) / TOTAL) * 100).toFixed(3)}%`;
const endOf = (j) => (j.end ? mi(j.end) + 1 : NOW_MI + 1);

const YEARS = [];
for (let y = Math.floor(T0 / 12) + 1; y * 12 <= T1; y += 1) YEARS.push(y);

const GROUPS = (() => {
  const map = new Map();
  for (const j of EXPERIENCE) {
    if (!map.has(j.company)) {
      const [name, kind] = j.company.split(" · ");
      map.set(j.company, { key: j.company, name, kind: kind ?? null, place: j.place, jobs: [] });
    }
    map.get(j.company).jobs.push(j);
  }
  return [...map.values()].sort((a, b) => Math.max(...b.jobs.map(endOf)) - Math.max(...a.jobs.map(endOf)));
})();

function concurrentOf(job) {
  return EXPERIENCE.filter(
    (o) => o.rev !== job.rev && o.company === job.company && mi(o.start) < endOf(job) && mi(job.start) < endOf(o)
  );
}

function JobBody({ job }) {
  const concurrent = concurrentOf(job);
  return (
    <>
      <p className="gnt-summary">{job.summary}</p>
      {job.points.length > 0 && (
        <ul className="gnt-points">
          {job.points.map((p, j) => (
            <li key={j}>{p}</li>
          ))}
        </ul>
      )}
      <div className="gnt-tags">
        {job.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      {concurrent.length > 0 && (
        <p className="gnt-conc">
          ⟂ CONCURRENT WITH {concurrent.map((o) => `${o.role.toUpperCase()} (${o.rev})`).join(" · ")}
        </p>
      )}
    </>
  );
}

function Chart({ active, setActive }) {
  return (
    <motion.div
      className="gnt-frame"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="gnt-axis">
        <span className="gnt-axis-corner">EMPLOYER / TIME</span>
        <div className="gnt-axis-track">
          {YEARS.map((y) => (
            <Fragment key={y}>
              <span className="gnt-year" style={{ left: pos(y * 12) }}>
                {y}
              </span>
              <i className="gnt-tick" style={{ left: pos(y * 12) }} aria-hidden="true" />
            </Fragment>
          ))}
          <span className="gnt-nowtag" style={{ left: pos(NOW_MI + 1) }}>
            NOW
          </span>
        </div>
      </div>
      <div className="gnt-body">
        <div className="gnt-grid" aria-hidden="true">
          {YEARS.map((y) => (
            <span key={y} className="gnt-gy" style={{ left: pos(y * 12) }} />
          ))}
          {YEARS.map((y) =>
            y * 12 + 6 < T1 ? <span key={`m${y}`} className="gnt-gy mid" style={{ left: pos(y * 12 + 6) }} /> : null
          )}
          <span className="gnt-now" style={{ left: pos(NOW_MI + 1) }} />
        </div>
        {GROUPS.map((g, gi) => (
          <div className="gnt-row" key={g.key}>
            <div className="gnt-label">
              <span className="gnt-co">{g.name}</span>
              <span className="gnt-sub">{[g.kind, g.place].filter(Boolean).join(" · ")}</span>
              <span className="gnt-sub gnt-sub-dim">
                {g.jobs.length} {g.jobs.length > 1 ? "ROLES" : "ROLE"}
              </span>
            </div>
            <div className="gnt-lane">
              {g.jobs.map((j, k) => {
                const idx = EXPERIENCE.indexOf(j);
                return (
                  <motion.div
                    key={j.rev}
                    className="gnt-slot"
                    style={{ marginLeft: pos(mi(j.start)), width: len(mi(j.start), endOf(j)) }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.6, ease, delay: gi * 0.08 + k * 0.07 }}
                  >
                    <button
                      type="button"
                      className={`gnt-bar${idx === active ? " active" : ""}${j.current ? " current" : ""}`}
                      onMouseEnter={() => setActive(idx)}
                      onFocus={() => setActive(idx)}
                      onClick={() => setActive(idx)}
                      aria-pressed={idx === active}
                      aria-label={`${j.role}, ${g.name}, ${j.period}`}
                    >
                      <span className="gnt-bar-rev">{j.rev}</span>
                      <span className="gnt-bar-role">{j.role.toUpperCase()}</span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function MobileGroups({ open, setOpen }) {
  return (
    <div className="gnt-m">
      {GROUPS.map((g) => (
        <section className="gnt-m-group" key={g.key}>
          <header className="gnt-m-gh">
            <div className="gnt-m-gh-top">
              <span className="gnt-m-co">{g.name}</span>
              <span className="gnt-m-sub">
                {[g.kind, g.place].filter(Boolean).join(" · ")} · {g.jobs.length}{" "}
                {g.jobs.length > 1 ? "ROLES" : "ROLE"}
              </span>
            </div>
            <div className="gnt-m-lane" aria-hidden="true">
              {g.jobs.map((j) => (
                <div
                  key={j.rev}
                  className={`gnt-m-bar${j.current ? " current" : ""}`}
                  style={{ marginLeft: pos(mi(j.start)), width: len(mi(j.start), endOf(j)) }}
                />
              ))}
            </div>
          </header>
          <ol className="gnt-m-list">
            {g.jobs.map((j) => {
              const i = EXPERIENCE.indexOf(j);
              return (
                <li key={j.rev} className={`gnt-m-item${open === i ? " open" : ""}`}>
                  <button
                    type="button"
                    className="gnt-m-head"
                    onClick={() => setOpen(open === i ? -1 : i)}
                    aria-expanded={open === i}
                  >
                    <span className="gnt-m-titles">
                      <span className="gnt-m-role">{j.role}</span>
                      <span className="gnt-m-rev">{j.rev}</span>
                    </span>
                    <span className="gnt-m-span">{j.span}</span>
                    <span className="gnt-m-ind" aria-hidden="true">
                      {open === i ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        className="gnt-m-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                      >
                        <div className="gnt-m-inner">
                          <p className="gnt-m-meta">
                            {j.period} · {j.place}
                          </p>
                          <JobBody job={j} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
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
        <SheetHeader no="01" tab="CAREER" title="Work Experience" note="career schedule — select a bar to inspect a role" />

        {isMobile ? (
          <MobileGroups open={open} setOpen={setOpen} />
        ) : (
          <div className="gnt">
            <Chart active={active} setActive={setActive} />

            <div className="gnt-legend">
              <span className="gnt-key">
                <i className="gnt-key-sq sel" />
                SELECTED
              </span>
              <span className="gnt-key">
                <i className="gnt-key-sq" />
                COMPLETED
              </span>
              <span className="gnt-key">
                <i className="gnt-key-dot" />
                ONGOING
              </span>
              <span className="gnt-range">
                {EXPERIENCE[EXPERIENCE.length - 1].rev} → {EXPERIENCE[0].rev} · {GROUPS.length} EMPLOYERS ·{" "}
                {EXPERIENCE.length} ROLES
              </span>
            </div>

            <div className="gnt-detail">
              <AnimatePresence mode="wait">
                <motion.article
                  key={job.rev}
                  className="gnt-card"
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <span className="gnt-ghost" aria-hidden="true">
                    {job.rev}
                  </span>
                  <div className="gnt-top">
                    <span className="gnt-revchip">{job.rev}</span>
                    <h3>{job.role}</h3>
                    <span className="gnt-company">{job.company.split(" · ")[0]}</span>
                    <span className="gnt-meta">
                      {job.current ? <span className="current">● {job.period}</span> : job.period}
                      <br />
                      {job.place}
                    </span>
                  </div>
                  <JobBody job={job} />
                </motion.article>
              </AnimatePresence>
              <div className="gnt-controls">
                <button
                  type="button"
                  className="gnt-btn"
                  onClick={() => setActive(active - 1)}
                  disabled={active === 0}
                >
                  ← PREV REV
                </button>
                <button
                  type="button"
                  className="gnt-btn"
                  onClick={() => setActive(active + 1)}
                  disabled={active === EXPERIENCE.length - 1}
                >
                  NEXT REV →
                </button>
                <span className="gnt-count">
                  <b>{String(active + 1).padStart(2, "0")}</b> / {String(EXPERIENCE.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
