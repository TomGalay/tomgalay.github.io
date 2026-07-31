import { motion } from "framer-motion";
import SheetHeader from "./SheetHeader.jsx";
import { PROJECTS } from "../data.js";

const ease = [0.22, 1, 0.36, 1];

export default function Projects() {
  return (
    <section id="projects">
      <span className="sheet-no" aria-hidden="true">
        03
      </span>
      <div className="wrap">
        <SheetHeader
          no="03"
          title="Projects & Showcases"
          note="FABRICATION SAMPLES — PERSONAL & ACADEMIC BUILDS"
        />

        <div className="proj-grid">
          {PROJECTS.featured.map((p, i) => (
            <motion.article
              key={p.id}
              className="proj-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
            >
              <figure className="proj-fig">
                <img src={p.image} alt={p.alt} loading="lazy" />
                <figcaption className="proj-id">{p.id}</figcaption>
              </figure>
              <div className="proj-body">
                <h3 className="proj-name">{p.name}</h3>
                <p className="proj-blurb">{p.blurb}</p>
                <ul className="proj-points">
                  {p.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
                <div className="tl-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="proj-links">
                  {p.links.map((l) => (
                    <a key={l.label} className="proj-link" href={l.href} target="_blank" rel="noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="proj-other">
          <motion.div
            className="proj-other-head"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="sheet-tab">SUB-ASSEMBLIES</span>
            <h3 className="proj-other-title">Other Learning Units</h3>
            <span className="proj-other-note">SMALLER BUILDS FOR SKILL DEVELOPMENT</span>
          </motion.div>

          <div className="proj-mini-grid">
            {PROJECTS.other.map((p, i) => (
              <motion.article
                key={p.id}
                className="proj-mini"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="proj-mini-top">
                  <span className="proj-mini-id">{p.id}</span>
                  <h4 className="proj-mini-name">{p.name}</h4>
                </div>
                <p className="proj-mini-desc">{p.desc}</p>
                <div className="tl-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="proj-links">
                  {p.links.map((l) => (
                    <a key={l.label} className="proj-link" href={l.href} target="_blank" rel="noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
