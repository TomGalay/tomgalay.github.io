import { motion } from "framer-motion";
import SheetHeader from "./SheetHeader.jsx";
import { PROFILE } from "../data.js";

export default function Contact() {
  return (
    <section id="contact">
      <span className="sheet-no" aria-hidden="true">
        04
      </span>
      <div className="wrap">
        <SheetHeader no="04" title="Contact" note="TRANSMIT SPECS — RESPONSE WITHIN 24H" />

        <motion.p
          className="contact-eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          RFQ — SEND YOUR PROJECT BRIEF TO:
        </motion.p>

        <motion.a
          className="contact-email"
          href={`mailto:${PROFILE.email}`}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {PROFILE.email}
        </motion.a>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="contact-cell" data-index="C-01" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
            <span className="contact-key">MOBILE</span>
            <span className="contact-val">{PROFILE.phone}</span>
          </a>
          <a className="contact-cell" data-index="C-02" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            <span className="contact-key">LINKEDIN</span>
            <span className="contact-val">isaiah-thomas-galay ↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
