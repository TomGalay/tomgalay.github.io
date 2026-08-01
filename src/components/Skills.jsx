import { motion, useReducedMotion } from "framer-motion";
import SheetHeader from "./SheetHeader.jsx";
import { SkillGlyph, GroupGlyph } from "./SkillIcons.jsx";
import { SKILL_GROUPS } from "../data.js";

const ease = [0.22, 1, 0.36, 1];

export default function Skills() {
  let partNo = 0;
  const reduce = useReducedMotion();

  return (
    <section id="skills">
      <span className="sheet-no" aria-hidden="true">
        02
      </span>
      <div className="wrap">
        <SheetHeader no="02" title="Skills" note="BILL OF MATERIALS — GROUPED BY FUNCTION, NO FILLER" />

        <div className="skill-groups">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.id}
              className="skill-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: (i % 2) * 0.08, ease }}
            >
              <div className="sg-head">
                <span className="sg-id">{group.id}</span>
                <GroupGlyph id={group.id} className="sg-glyph" />
                <h3 className="sg-name">{group.name}</h3>
                <span className="sg-note">{group.note}</span>
                <span className="sg-count">
                  {String(group.items.length).padStart(2, "0")} ITEMS
                </span>
              </div>
              <ul className="sg-tiles">
                {group.items.map((item, j) => {
                  partNo += 1;
                  return (
                    <li key={item} className="sg-tile">
                      <motion.span
                        className="sg-tile-glyph"
                        initial={reduce ? false : { opacity: 0, scale: 1.35 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: 0.15 + j * 0.06, ease }}
                      >
                        <SkillGlyph name={item} />
                      </motion.span>
                      <span className="sg-tile-no">P-{String(partNo).padStart(2, "0")}</span>
                      <span className="sg-tile-name">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
