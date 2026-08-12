import { motion } from "framer-motion";
import useTheme from "../hooks/useTheme.js";
import { PROFILE, SECTIONS } from "../data.js";

const THEMES = ["light", "dark", "blue"];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Footer() {
  const [theme, applyTheme] = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <motion.div
          className="footer-grid"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.div className="footer-cell" data-index="F-01" variants={reveal}>
            <span className="footer-cell-key">NAVIGATION</span>
            <nav className="footer-nav" aria-label="Footer index">
              {SECTIONS.map((s) => (
                <a key={s.id} href={`#${s.id}`}>
                  <b>{s.no}</b> {s.label}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div className="footer-cell" data-index="F-02" variants={reveal}>
            <span className="footer-cell-key">CONTACT</span>
            <ul className="footer-list">
              <li>
                <span>EMAIL</span>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </li>
              <li>
                <span>MOBILE</span>
                <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>{PROFILE.phone}</a>
              </li>
              <li>
                <span>BASE</span>
                <span>{PROFILE.location}</span>
              </li>
              <li>
                <span>LINKEDIN</span>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                  isaiah-thomas-galay ↗
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div className="footer-cell" data-index="F-03" variants={reveal}>
            <span className="footer-cell-key">SYSTEM STATUS</span>
            <p className="footer-status">
              <span className="led" aria-hidden="true" />
              <span className="tbs-ok">{PROFILE.status}</span>
            </p>
            <dl className="footer-facts">
              <div>
                <dt>DOC NO.</dt>
                <dd>{PROFILE.docNo}</dd>
              </div>
              <div>
                <dt>TYPE</dt>
                <dd>{PROFILE.rev}</dd>
              </div>
              <div>
                <dt>VERSION</dt>
                <dd>3</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div className="footer-cell" data-index="F-04" variants={reveal}>
            <span className="footer-cell-key">COLOR MODE</span>
            <p className="footer-cell-note">SHEET FINISH · BLUEPRINT RENDER</p>
            <div className="tn-theme footer-theme" role="group" aria-label="Color mode">
              {THEMES.map((id) => (
                <button
                  key={id}
                  type="button"
                  className={theme === id ? "active" : ""}
                  aria-pressed={theme === id}
                  onClick={() => applyTheme(id)}
                >
                  {id.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="footer-copy">
          <span>© {year} — ISAIAH THOMAS GALAY</span>
        </div>
      </div>
    </footer>
  );
}
