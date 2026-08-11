import { motion } from "framer-motion";

export default function SheetHeader({ no, title, note, tab }) {
  return (
    <>
      <div className="sheet-head">
        <span className="sheet-tab">{tab ?? `SHEET ${no}`}</span>
        <motion.h2
          className="sheet-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>
      </div>
      <div className="sheet-note">
        <span>{note}</span>
        <motion.div
          className="dim-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
        />
      </div>
    </>
  );
}
