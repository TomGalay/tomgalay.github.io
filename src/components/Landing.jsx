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
          <motion.p className="landing-eyebrow" variants={fade} initial="hidden" animate="show" custom={0}>
            PORTFOLIO / RÉSUMÉ — {PROFILE.docNo}
          </motion.p>
          <motion.h1 className="landing-name" variants={fade} initial="hidden" animate="show" custom={1}>
            {PROFILE.name[0]} <span className="alt">{PROFILE.name[1]}</span> {PROFILE.name[2]}
          </motion.h1>
          <motion.p className="landing-statement" variants={fade} initial="hidden" animate="show" custom={2}>
            I BUILD THE
            <br />
            <em>SYSTEMS</em> THAT
            <br />
            RUN THE SHIFT.
          </motion.p>
          <motion.p className="landing-sub" variants={fade} initial="hidden" animate="show" custom={3}>
            Full-stack developer behind an Australian NDIS provider's operating software —{" "}
            <b>intake pipelines, scheduling engines, payments and mobile shift tracking</b> — designed,
            shipped and maintained on AWS.
          </motion.p>
          <motion.div className="landing-cta" variants={fade} initial="hidden" animate="show" custom={4}>
            <a className="btn btn-solid" href="#experience">
              INSPECT THE WORK ↓
            </a>
            <a className="btn btn-ghost" href={`mailto:${PROFILE.email}`}>
              TRANSMIT A BRIEF →
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
