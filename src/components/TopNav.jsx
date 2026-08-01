import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "title", no: "00", label: "TITLE" },
  { id: "experience", no: "01", label: "EXPERIENCE" },
  { id: "skills", no: "02", label: "SKILLS" },
  { id: "projects", no: "03", label: "PROJECTS" },
  { id: "education", no: "04", label: "EDUCATION" },
  { id: "contact", no: "05", label: "CONTACT" },
];

export default function TopNav() {
  const [active, setActive] = useState("title");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);

        const probe = window.scrollY + window.innerHeight * 0.35;
        let current = SECTIONS[0].id;
        for (const s of SECTIONS) {
          const el = document.getElementById(s.id);
          if (el && el.offsetTop <= probe) current = s.id;
        }
        setActive(current);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className="topnav" aria-label="Sheet index">
      <a className="tn-brand" href="#title">
        IG<span>.</span>
      </a>
      <div className="tn-tabs">
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? "active" : ""}>
            <b>{s.no}</b> {s.label}
          </a>
        ))}
      </div>
      <div className="tn-status">
        <span className="led" /> SYSTEMS NOMINAL
      </div>
      <motion.div
        className="tn-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
    </nav>
  );
}
