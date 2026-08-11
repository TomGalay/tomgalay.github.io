import { motion } from "framer-motion";
import SheetHeader from "./SheetHeader.jsx";
import { EDUCATION, AWARDS, COMPETITIONS } from "../data.js";

const ease = [0.22, 1, 0.36, 1];

export default function Education() {
  return (
    <section id="education">
      <span className="sheet-no" aria-hidden="true">
        04
      </span>
      <div className="wrap">
        <SheetHeader no="04" tab="BACKGROUND" title="Education" note="my experiences in campus" />

        <div className="edu-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
          >
            <h3 className="edu-school">
              FEU <span>ALABANG</span>
            </h3>
            <p className="edu-degree">{EDUCATION.degree}</p>
            <p className="edu-spec">{EDUCATION.spec}</p>
            <p className="edu-meta">
              {EDUCATION.place} · {EDUCATION.period}
            </p>
            <p className="edu-honors">{EDUCATION.honors}</p>

            <div className="edu-orgs">
              <span className="edu-orgs-label">ORGANIZATION RECORD</span>
              <ul>
                {EDUCATION.organizations.map((o) => (
                  <li key={`${o.org}-${o.span}`}>
                    <span className="org-role">{o.role}</span>
                    <span className="org-name">{o.org}</span>
                    <span className="org-span">{o.span}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="stamps">
            {AWARDS.map((a, i) => (
              <motion.a
                key={a.title}
                className="stamp"
                href={a.link}
                target="_blank"
                rel="noreferrer"
                initial={{ scale: 2.2, opacity: 0, rotate: -18 }}
                whileInView={{ scale: 1, opacity: 1, rotate: i % 2 === 0 ? -3 : 2.5 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 260, damping: 16, delay: i * 0.12 }}
              >
                <span className="stamp-year">{a.year}</span>
                <div className="stamp-title">{a.title}</div>
                <div className="stamp-issuer">{a.issuer}</div>
                <span className="stamp-verify">VERIFY ↗</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="comps">
          <motion.div
            className="comps-head"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="sheet-tab">COMPETITION RECORD</span>
            <h3 className="comps-title">Four-Time Programming & Cloud Champion</h3>
            <span className="comps-note">extracurriculars during my time in school</span>
          </motion.div>

          <div className="comps-grid">
            {COMPETITIONS.map((c, i) => (
              <motion.a
                key={c.title}
                className="comp"
                href={c.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <span className="comp-result">{c.result}</span>
                <h4 className="comp-title">{c.title}</h4>
                <span className="comp-event">{c.event}</span>
                <span className="comp-view">VIEW RECORD ↗</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
