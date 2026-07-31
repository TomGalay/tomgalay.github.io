import { motion } from "framer-motion";
import { REVISIONS, PROFILE } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <motion.div
          className="rev-table"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rev-row">
            <span>REV</span>
            <span>DATE</span>
            <span>DESCRIPTION OF CHANGE</span>
          </div>
          {REVISIONS.map((r) => (
            <div className="rev-row" key={r.rev}>
              <span className="r">{r.rev}</span>
              <span className="d">{r.date}</span>
              <span>{r.note}</span>
            </div>
          ))}
        </motion.div>

        <div className="footer-line">
          <span>
            DRAWN BY <b>ISAIAH THOMAS GALAY</b>
          </span>
          <span>
            DOC <b>{PROFILE.docNo}</b> · {PROFILE.rev}
          </span>
          <span>
            © 2026 — <b>BUILT WITH REACT + FRAMER MOTION</b>
          </span>
        </div>
      </div>
    </footer>
  );
}
