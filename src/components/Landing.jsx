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
            <span className="name-grid" aria-hidden="true">
              <svg className="name-grid-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path className="ng-line" d="M8 0 C 8.6 30, 7.4 60, 8.4 100" />
                <path className="ng-line" d="M26 0 C 25.3 35, 26.8 70, 26.2 100" />
                <path className="ng-line ng-open" d="M41 0 C 42.2 15, 40.6 30, 41.9 45 M41 67 C 40.4 83, 42.1 96, 41.3 100" />
                <path className="ng-line" d="M62 0 C 61.2 32, 63 66, 62.1 100" />
                <path className="ng-line" d="M82 0 C 82.8 28, 81.2 64, 82.4 100" />
                <path className="ng-line" d="M0 9 C 32 8.3, 68 9.8, 100 9.2" />
                <path className="ng-line" d="M0 27 C 40 27.8, 72 26.2, 100 27.6" />
                <path className="ng-line ng-open" d="M0 49 C 24 48.4, 48 49.8, 66 49.2 M80 49 C 91 49.7, 97 48.6, 100 49.2" />
                <path className="ng-line" d="M0 70 C 30 69.3, 68 70.8, 100 70.1" />
                <path className="ng-line" d="M0 90 C 35 90.7, 72 89.3, 100 90.4" />
                <path className="ng-cyan" d="M50 0 C 50.5 28, 49.4 66, 50.4 100" />
                <path className="ng-cyan" d="M0 38 C 32 37.4, 70 38.7, 100 38.2" />
              </svg>
              <span className="name-grid-tick" style={{ top: "12%", left: "18%" }} />
              <span className="name-grid-tick" style={{ top: "74%", left: "86%" }} />
              <span className="name-grid-tick" style={{ top: "46%", left: "52%" }} />
            </span>
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
            </h1>
          </div>
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
