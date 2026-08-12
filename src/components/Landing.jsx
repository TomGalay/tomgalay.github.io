import { motion } from "framer-motion";
import SystemStack from "./SystemStack.jsx";
import { PROFILE } from "../data.js";

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Landing() {
  return (
    <header className="landing" id="title">
      <div className="wrap landing-grid">
        <div className="landing-copy">
          <div className="name-plate">
            <h1 className="landing-name">
              {PROFILE.name.map((word, i) => {
                const cls = i === 1 ? "draft" : i === 2 ? "accent" : "ink";
                const base = 0.55 * i;
                return (
                  <span key={word} className={`lw lw-${cls}`} style={{ "--lw-delay": `${base}s` }}>
                    <span className="lw-clip">
                      {word.split("").map((ch, j) => (
                        <span
                          key={`${ch}-${j}`}
                          className="ltr"
                          style={{ "--ltr-delay": `${base + 0.72 + j * 0.05}s` }}
                        >
                          {ch}
                        </span>
                      ))}
                    </span>
                    <span className="lw-pen" aria-hidden="true" />
                    <span className="lw-base" aria-hidden="true" />
                  </span>
                );
              })}
              <span className="np-mark np-tl" aria-hidden="true" />
              <span className="np-mark np-tr" aria-hidden="true" />
              <span className="np-mark np-bl" aria-hidden="true" />
              <span className="np-mark np-br" aria-hidden="true" />
            </h1>

            <span className="np-axis" aria-hidden="true">
              <span className="np-axis-lbl">{PROFILE.nameAxis}</span>
            </span>
            <span className="np-side" aria-hidden="true">
              {PROFILE.nameNote}
            </span>
            <div className="np-dim" aria-hidden="true">
              <span className="np-dim-tag">{PROFILE.nameTag}</span>
              <span className="dim-line" />
              <span className="np-dim-scale">{PROFILE.nameScale}</span>
            </div>
          </div>
          <motion.p className="landing-role" variants={fade} initial="hidden" animate="show" custom={3}>
            {PROFILE.role} <span>{PROFILE.disciplines}</span>
          </motion.p>
          <motion.p className="landing-statement" variants={fade} initial="hidden" animate="show" custom={4}>
            I BUILD THE <em>SYSTEMS</em> THAT RUN THE SHIFT.
          </motion.p>
          <motion.p className="landing-sub" variants={fade} initial="hidden" animate="show" custom={5}>
            Full-stack developer that built a complete system for an NDIS Service Provider based in{" "}
            Australia. Intaking pipelines, scheduling and shifts, users and reports Management, and
            Document Auditing - designed, shipped, and maintained in AWS.
          </motion.p>
          <motion.div className="landing-cta" variants={fade} initial="hidden" animate="show" custom={6}>
            <a className="btn btn-solid" href="#projects">
              SEE MY WORKS ↓
            </a>
            <a className="btn btn-ghost" href={`mailto:${PROFILE.email}`}>
              SEND A MESSAGE →
            </a>
          </motion.div>
        </div>

        <SystemStack />
      </div>

      <div className="wrap">
        <motion.div
          className="tb-strip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          <div>
            <span className="tbs-k">DOC NO.</span>
            <span className="tbs-v">{PROFILE.docNo}</span>
          </div>
          <div>
            <span className="tbs-k">TYPE</span>
            <span className="tbs-v">{PROFILE.rev}</span>
          </div>
          <div>
            <span className="tbs-k">VERSION</span>
            <span className="tbs-v">3</span>
          </div>
          <div>
            <span className="tbs-k">STATUS</span>
            <span className="tbs-ok">{PROFILE.status}</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
