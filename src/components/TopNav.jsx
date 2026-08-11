import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "title", no: "00", label: "TITLE" },
  { id: "experience", no: "01", label: "CAREER" },
  { id: "projects", no: "02", label: "HIGHLIGHTS" },
  { id: "skills", no: "03", label: "SKILLS" },
  { id: "education", no: "04", label: "BACKGROUND" },
  { id: "contact", no: "05", label: "REACH OUT" },
];

const THEMES = ["light", "dark", "blue"];

function storedTheme() {
  try {
    const t = localStorage.getItem("ig-theme");
    return THEMES.includes(t) ? t : "blue";
  } catch {
    return "blue";
  }
}

export default function TopNav() {
  const [active, setActive] = useState("title");
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState(storedTheme);

  const applyTheme = (id) => {
    setTheme(id);
    document.documentElement.dataset.theme = id;
    try {
      localStorage.setItem("ig-theme", id);
    } catch {}
  };

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
        <span className="led" aria-hidden="true" />
        <div className="tn-theme" role="group" aria-label="Color mode">
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
      </div>
      <motion.div
        className="tn-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
    </nav>
  );
}
