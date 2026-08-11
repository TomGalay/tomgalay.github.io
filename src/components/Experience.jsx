import { Fragment, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SheetHeader from "./SheetHeader.jsx";
import useIsMobile from "../hooks/useIsMobile.js";
import { EXPERIENCE } from "../data.js";

const ease = [0.22, 1, 0.36, 1];
const easeLine = [0.65, 0, 0.35, 1];

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const mi = (s) => {
  const [y, m] = s.split("-").map(Number);
  return y * 12 + (m - 1);
};
const fmt = (m) => `${MONTHS[m % 12]} ${Math.floor(m / 12)}`;
const sta = (m) => `${Math.floor(m / 12)}+${String((m % 12) + 1).padStart(2, "0")}`;

const NOW = new Date();
const NOW_MI = NOW.getFullYear() * 12 + NOW.getMonth();
const T0 = Math.min(...EXPERIENCE.map((j) => mi(j.start)));
const T1 = NOW_MI + 3;

const CHRON = [...EXPERIENCE].sort((a, b) => mi(a.start) - mi(b.start));

const BREAK = (() => {
  let best = null;
  for (let i = 1; i < CHRON.length; i += 1) {
    const gap = mi(CHRON[i].start) - mi(CHRON[i - 1].start);
    if (gap > 14 && (!best || gap > mi(best.to) - mi(best.from))) {
      best = { from: CHRON[i - 1].start, to: CHRON[i].start };
    }
  }
  return best ? { start: mi(best.from) + 1, end: mi(best.to) } : null;
})();

const P1 = 55;
const P2 = 65;

function pos(m) {
  if (!BREAK) return ((m - T0) / (T1 - T0)) * 100;
  if (m <= BREAK.start) return ((m - T0) / (BREAK.start - T0)) * P1;
  if (m < BREAK.end) return P1 + ((m - BREAK.start) / (BREAK.end - BREAK.start)) * (P2 - P1);
  return P2 + ((m - BREAK.end) / (T1 - BREAK.end)) * (100 - P2);
}

function monthAt(p) {
  if (!BREAK) return T0 + (p / 100) * (T1 - T0);
  if (p <= P1) return T0 + (p / P1) * (BREAK.start - T0);
  if (p <= P2) return BREAK.start + ((p - P1) / (P2 - P1)) * (BREAK.end - BREAK.start);
  return BREAK.end + ((p - P2) / (100 - P2)) * (T1 - BREAK.end);
}

const YEARS = [];
for (let y = Math.floor(T0 / 12) + 1; y * 12 <= T1; y += 1) YEARS.push(y);

const NODES = CHRON.map((job, i) => ({ job, side: i % 2 === 0 ? "top" : "bottom" }));

const GROUPS = (() => {
  const map = new Map();
  for (const j of EXPERIENCE) {
    if (!map.has(j.company)) {
      const [name, kind] = j.company.split(" · ");
      map.set(j.company, { key: j.company, name, kind: kind ?? null, place: j.place, jobs: [] });
    }
    map.get(j.company).jobs.push(j);
  }
  return [...map.values()].sort((a, b) => Math.max(...b.jobs.map((j) => (j.end ? mi(j.end) : NOW_MI))) - Math.max(...a.jobs.map((j) => (j.end ? mi(j.end) : NOW_MI))));
})();

function concurrentOf(job) {
  const end = (j) => (j.end ? mi(j.end) + 1 : NOW_MI + 1);
  return EXPERIENCE.filter(
    (o) => o.rev !== job.rev && o.company === job.company && mi(o.start) < end(job) && mi(job.start) < end(o)
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
          ⟂ CONCURRENT WITH {concurrent.map((o) => o.role.toUpperCase()).join(" · ")}
        </p>
      )}
    </>
  );
}

function Traverse({ active, setActive }) {
  const plotRef = useRef(null);
  const [cursor, setCursor] = useState(null);

  const onMove = (e) => {
    if (!plotRef.current) return;
    const r = plotRef.current.getBoundingClientRect();
    const p = Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100));
    setCursor({ p, label: fmt(Math.round(monthAt(p))) });
  };

  return (
    <motion.div
      className="tlx-frame"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="tlx-plot" ref={plotRef} onMouseMove={onMove} onMouseLeave={() => setCursor(null)}>
        <span className="tlx-note tlx-note-l">HORIZONTAL RECORD — VARIABLE SCALE</span>
        <span className="tlx-note tlx-note-r">
          STA {sta(T0)} → STA {sta(NOW_MI)}
        </span>
        <span className="tlx-ghost" aria-hidden="true">
          TRAVERSE
        </span>

        {cursor && (
          <span className={`tlx-cursor${cursor.p > 84 ? " flip" : ""}`} style={{ left: `${cursor.p}%` }}>
            <span className="tlx-cursor-tag">{cursor.label}</span>
          </span>
        )}

        <motion.span
          className="tlx-axis"
          style={{ left: 0, width: BREAK ? `${P1}%` : "100%" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: easeLine }}
        />
        {BREAK && (
          <>
            <span className="tlx-axis tlx-axis--brk" style={{ left: `${P1}%`, width: `${P2 - P1}%` }} />
            <motion.span
              className="tlx-axis"
              style={{ left: `${P2}%`, width: `${100 - P2}%` }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: easeLine, delay: 0.55 }}
            />
            <span className="tlx-break" style={{ left: `${P1}%` }} aria-hidden="true" />
            <span className="tlx-break" style={{ left: `${P2}%` }} aria-hidden="true" />
            <span className="tlx-break-note" style={{ left: `${(P1 + P2) / 2}%` }}>
              {BREAK.end - BREAK.start} MO COMPRESSED
            </span>
          </>
        )}

        {YEARS.map((y) => {
          const m = y * 12;
          const brk = BREAK && m > BREAK.start && m < BREAK.end;
          return (
            <Fragment key={y}>
              <span className={`tlx-tick${brk ? " brk" : ""}`} style={{ left: `${pos(m)}%` }} />
              {!brk && (
                <span className="tlx-year" style={{ left: `${pos(m)}%` }}>
                  {y}
                </span>
              )}
            </Fragment>
          );
        })}

        <span className="tlx-now" style={{ left: `${pos(NOW_MI + 1)}%` }}>
          <span className="tlx-now-tag">NOW</span>
        </span>

        {NODES.map(({ job: j, side }, i) => {
          const idx = EXPERIENCE.indexOf(j);
          const isActive = idx === active;
          const p = pos(mi(j.start));
          const co = j.company.split(" · ")[0];
          return (
            <Fragment key={j.rev}>
              <motion.span
                className={`tlx-stem ${side}${isActive ? " active" : ""}`}
                style={{ left: `${p}%` }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease, delay: 0.35 + i * 0.07 }}
              />
              <motion.button
                type="button"
                className={`tlx-node${isActive ? " active" : ""}${j.current ? " current" : ""}`}
                style={{ left: `${p}%`, top: "var(--axis-y)" }}
                initial={{ scale: 0, x: "-50%", y: "-50%" }}
                whileInView={{ scale: 1, x: "-50%", y: "-50%" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.07 }}
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                onClick={() => setActive(idx)}
                aria-pressed={isActive}
                aria-label={`${j.role}, ${co}, ${j.period}`}
              >
                <span className="tlx-diamond" aria-hidden="true" />
              </motion.button>
              <motion.button
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                className={`tlx-tab ${side}${isActive ? " active" : ""}`}
                style={{ left: `${p}%` }}
                initial={{ opacity: 0, x: "-50%", y: side === "top" ? -16 : 16 }}
                whileInView={{ opacity: 1, x: "-50%", y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease, delay: 0.4 + i * 0.07 }}
                onMouseEnter={() => setActive(idx)}
                onClick={() => setActive(idx)}
              >
                <span className="tlx-tab-head">
                  <span className={`tlx-tab-span${j.current ? " now" : ""}`}>
                    {j.current ? `${fmt(mi(j.start))} — NOW` : j.span.toUpperCase()}
                  </span>
                </span>
                <span className="tlx-tab-role">{j.role}</span>
                <span className="tlx-tab-co">{co}</span>
              </motion.button>
            </Fragment>
          );
        })}
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
  const isMobile = useIsMobile("(max-width: 1100px)");
  const job = EXPERIENCE[active];

  return (
    <section id="experience">
      <span className="sheet-no" aria-hidden="true">
        01
      </span>
      <div className="wrap">
        <SheetHeader no="01" tab="CAREER" title="Work Experience" note="career traverse — select a node to inspect a role" />

        {isMobile ? (
          <MobileGroups open={open} setOpen={setOpen} />
        ) : (
          <div className="tlx-wrap">
            <Traverse active={active} setActive={setActive} />

            <div className="tlx-under">
              <AnimatePresence>
                <motion.span
                  key="leader"
                  className="tlx-leader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, left: `${pos(mi(job.start))}%` }}
                  transition={{ duration: 0.5, ease }}
                />
              </AnimatePresence>

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
                      {job.company.split(" · ")[0]}
                    </span>
                    <div className="gnt-top">
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
                    ← PREV ROLE
                  </button>
                  <button
                    type="button"
                    className="gnt-btn"
                    onClick={() => setActive(active + 1)}
                    disabled={active === EXPERIENCE.length - 1}
                  >
                    NEXT ROLE →
                  </button>
                  <span className="gnt-count">
                    <b>{String(active + 1).padStart(2, "0")}</b> / {String(EXPERIENCE.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            <div className="gnt-legend">
              <span className="gnt-key">
                <i className="tlx-key-diamond" />
                ROLE NODE
              </span>
              <span className="gnt-key">
                <i className="gnt-key-dot" />
                ONGOING
              </span>
              <span className="gnt-key">
                <i className="tlx-key-break" />
                SCALE BREAK
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
