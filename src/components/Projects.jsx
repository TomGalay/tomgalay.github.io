import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SheetHeader from "./SheetHeader.jsx";
import { PROJECTS } from "../data.js";

const ease = [0.22, 1, 0.36, 1];

function Lightbox({ img, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease }}
      onClick={onClose}
    >
      <motion.figure
        className="lightbox-fig"
        initial={{ scale: 0.96, y: 14, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.97, y: 8, opacity: 0 }}
        transition={{ duration: 0.35, ease }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={img.src} alt={img.alt} />
        <figcaption className="lightbox-note">{img.alt}</figcaption>
      </motion.figure>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close enlarged view">
        CLOSE ✕
      </button>
    </motion.div>
  );
}

function LinkRow({ links }) {
  return (
    <div className="proj-links">
      {links.map((l) =>
        l.href === "#" ? (
          <span key={l.label} className="proj-link is-soon" aria-disabled="true">
            {l.label} · SOON
          </span>
        ) : (
          <a key={l.label} className="proj-link" href={l.href} target="_blank" rel="noreferrer">
            {l.label} ↗
          </a>
        )
      )}
    </div>
  );
}

function ThumbStrip({ p, active, setActive, phone }) {
  return (
    <div className={`show-thumbs${phone ? " show-thumbs--phone" : ""}`}>
      {p.images.map((img, j) => (
        <button
          key={img.src}
          type="button"
          className={`show-thumb${active === j ? " on" : ""}`}
          aria-label={`View ${p.name} screenshot ${j + 1} of ${p.images.length}`}
          aria-pressed={active === j}
          onClick={() => setActive(j)}
        >
          <img src={img.src} alt="" loading="lazy" />
        </button>
      ))}
    </div>
  );
}

function WebShowcase({ p }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(null);
  return (
    <div className="show-fig">
      <div className="browser-bar">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">
          <b>HTTPS://</b>
          {p.url}
        </span>
      </div>
      <button
        type="button"
        className="browser-screen"
        onClick={() => setZoom(active)}
        aria-label={`Enlarge screenshot: ${p.images[active].alt}`}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={p.images[active].src}
            src={p.images[active].src}
            alt={p.images[active].alt}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          />
        </AnimatePresence>
        <span className="zoom-hint" aria-hidden="true">
          ⤢ ENLARGE
        </span>
      </button>
      <ThumbStrip p={p} active={active} setActive={setActive} />
      <AnimatePresence>
        {zoom !== null && <Lightbox img={p.images[zoom]} onClose={() => setZoom(null)} />}
      </AnimatePresence>
    </div>
  );
}

function MobileShowcase({ p }) {
  const [active, setActive] = useState(1);
  const [zoom, setZoom] = useState(null);
  return (
    <div className="show-fig">
      <div className="phone-stage">
        <span className="phone-ghost g1" aria-hidden="true" />
        <span className="phone-ghost g2" aria-hidden="true" />
        <div className="phone">
          <span className="phone-notch" aria-hidden="true" />
          <button
            type="button"
            className="phone-screen"
            onClick={() => setZoom(active)}
            aria-label={`Enlarge screenshot: ${p.images[active].alt}`}
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={p.images[active].src}
                src={p.images[active].src}
                alt={p.images[active].alt}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease }}
              />
            </AnimatePresence>
            <span className="zoom-hint" aria-hidden="true">
              ⤢
            </span>
          </button>
          <span className="phone-home" aria-hidden="true" />
        </div>
      </div>
      <ThumbStrip p={p} active={active} setActive={setActive} phone />
      <AnimatePresence>
        {zoom !== null && <Lightbox img={p.images[zoom]} onClose={() => setZoom(null)} />}
      </AnimatePresence>
    </div>
  );
}

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
          note="FABRICATION SAMPLES — CLIENT WORK & SELECTED BUILDS"
        />

        <div className="show-list">
          {PROJECTS.featured.map((p, i) => (
            <motion.article
              key={p.id}
              className={`show-card${p.layout === "mobile" ? " flip" : ""}`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, delay: i * 0.08, ease }}
            >
              {p.layout === "web" ? <WebShowcase p={p} /> : <MobileShowcase p={p} />}
              <div className="show-body">
                <span className="show-client">{p.client}</span>
                <h3 className="show-name">{p.name}</h3>
                <p className="show-blurb">{p.blurb}</p>
                <LinkRow links={p.links} />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="proj-archive">
          <motion.div
            className="proj-other-head"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="sheet-tab">ARCHIVE</span>
            <h3 className="proj-other-title">Academic & Personal Builds</h3>
            <span className="proj-other-note">EARLIER FABRICATION RUNS</span>
          </motion.div>

          <div className="proj-grid">
            {PROJECTS.archive.map((p, i) => (
              <motion.article
                key={p.id}
                className="proj-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease }}
              >
                <figure className="proj-fig">
                  <img src={p.image} alt={p.alt} loading="lazy" />
                </figure>
                <div className="proj-body">
                  <h4 className="proj-name">{p.name}</h4>
                  <p className="proj-blurb">{p.blurb}</p>
                  <LinkRow links={p.links} />
                </div>
              </motion.article>
            ))}
          </div>
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
                <h4 className="proj-mini-name">{p.name}</h4>
                <p className="proj-mini-desc">{p.desc}</p>
                <LinkRow links={p.links} />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
