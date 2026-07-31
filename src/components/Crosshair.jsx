import { useEffect, useRef, useState } from "react";

export default function Crosshair() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const frame = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        frame.current = null;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const pad = (n) => String(Math.max(0, Math.round(n))).padStart(4, "0");

  return (
    <div className="crosshair" aria-hidden="true">
      <div className="ch-line-x" style={{ transform: `translateY(${pos.y}px)` }} />
      <div className="ch-line-y" style={{ transform: `translateX(${pos.x}px)` }} />
      <div className="ch-dot" style={{ transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)` }} />
      <div className="ch-tag" style={{ transform: `translate(${pos.x + 16}px, ${pos.y + 16}px)` }}>
        X {pad(pos.x)} · Y {pad(pos.y)}
      </div>
    </div>
  );
}
