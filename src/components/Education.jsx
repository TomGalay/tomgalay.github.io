import { motion } from "framer-motion";
import SheetHeader from "./SheetHeader.jsx";
import { EDUCATION, AWARDS } from "../data.js";

export default function Education() {
  return (
    <section id="education">
      <span className="sheet-no" aria-hidden="true">
        03
      </span>
      <div className="wrap">
        <SheetHeader no="03" title="Education & Awards" note="CERTIFICATION RECORDS — VERIFIED" />

        <div className="edu-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="edu-school">
              FEU <span>ALABANG</span>
            </h3>
            <p className="edu-degree">{EDUCATION.degree}</p>
            <p className="edu-spec">{EDUCATION.spec}</p>
            <p className="edu-meta">
              {EDUCATION.place} · {EDUCATION.period}
            </p>
            <ul className="edu-notes">
              {EDUCATION.notes.map((n, i) => (
                <li key={i}>
                  {i === 0 ? (
                    <>
                      Graduated <b>SUMMA CUM LAUDE</b>
                    </>
                  ) : (
                    n
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="stamps">
            {AWARDS.map((a, i) => (
              <motion.div
                key={a.title}
                className="stamp"
                initial={{ scale: 2.2, opacity: 0, rotate: -18 }}
                whileInView={{ scale: 1, opacity: 1, rotate: i % 2 === 0 ? -3 : 2.5 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 260, damping: 16, delay: i * 0.15 }}
              >
                <span className="stamp-year">{a.year}</span>
                <div className="stamp-title">{a.title}</div>
                <div className="stamp-issuer">{a.issuer}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
