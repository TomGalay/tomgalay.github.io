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

const nameBlock = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};

const nameLine = {
  hidden: { opacity: 0, y: 38 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Landing() {
  return (
    <header className="landing" id="title">
      <div className="wrap landing-grid">
        <div className="landing-copy">
          <motion.p className="landing-eyebrow" variants={fade} initial="hidden" animate="show" custom={0}>
            PORTFOLIO
          </motion.p>
          <motion.h1 className="landing-name" variants={nameBlock} initial="hidden" animate="show">
            {PROFILE.name.map((part, i) => (
              <motion.span
                key={part}
                className={`ln${i === 1 ? " alt" : i === 2 ? " accent" : ""}`}
                variants={nameLine}
              >
                {part}
              </motion.span>
            ))}
          </motion.h1>
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
            <a className="btn btn-solid" href="#work">
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
            <span className="tbs-k">REVISION</span>
            <span className="tbs-v">{PROFILE.rev}</span>
          </div>
          <div>
            <span className="tbs-k">SCALE</span>
            <span className="tbs-v">1 : 1</span>
          </div>
          <div>
            <span className="tbs-k">ISSUED FROM</span>
            <span className="tbs-v">{PROFILE.coords}</span>
          </div>
          <div>
            <span className="tbs-k">STATUS</span>
            <span className="tbs-stamp">{PROFILE.status}</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
