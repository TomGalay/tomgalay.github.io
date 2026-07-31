import { PROFILE } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
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
