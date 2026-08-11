import { motion } from "framer-motion";
import SheetHeader from "./SheetHeader.jsx";
import { SkillGlyph, GroupGlyph } from "./SkillIcons.jsx";
import { SKILL_GROUPS, CERTIFICATIONS } from "../data.js";

const ease = [0.22, 1, 0.36, 1];

const certIssuers = CERTIFICATIONS.reduce((groups, cert) => {
  const group = groups.find((g) => g.issuer === cert.issuer);
  if (group) group.certs.push(cert);
  else groups.push({ issuer: cert.issuer, logo: cert.logo, certs: [cert] });
  return groups;
}, []);

export default function Skills() {
  let partNo = 0;

  return (
    <section id="skills">
      <span className="sheet-no" aria-hidden="true">
        03
      </span>
      <div className="wrap">
        <SheetHeader no="03" tab="STACK" title="Skills & Certifications" note="web · mobile · certified" />

        <div className="bom">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.id}
              className="bom-row"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease }}
            >
              <div className="bom-id">
                <GroupGlyph id={group.id} className="bom-glyph" />
                <div>
                  <h3 className="bom-name">{group.name}</h3>
                  <span className="bom-note">
                    {group.id} · {group.note}
                  </span>
                </div>
              </div>
              <ul className="bom-items">
                {group.items.map((item) => {
                  partNo += 1;
                  return (
                    <li key={item} className="bom-item">
                      <span className="bom-item-no">P-{String(partNo).padStart(2, "0")}</span>
                      <SkillGlyph name={item} className="bom-item-glyph" />
                      <span className="bom-item-name">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="certs">
          {certIssuers.map((group, i) => (
            <motion.div
              key={group.issuer}
              className="cert-row"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease }}
            >
              <div className="cert-issuer">
                <span className="cert-logo">
                  <img src={group.logo} alt={`${group.issuer} logo`} loading="lazy" />
                </span>
                <div>
                  <h3 className="cert-issuer-name">{group.issuer}</h3>
                  <span className="cert-count">
                    {String(group.certs.length).padStart(2, "0")} CREDENTIAL{group.certs.length > 1 ? "S" : ""}
                  </span>
                </div>
              </div>
              <ul className="cert-entries">
                {group.certs.map((cert) => (
                  <li key={cert.id} className="cert-entry">
                    <span className="cert-no">{cert.id}</span>
                    <span className="cert-entry-id">
                      <span className="cert-name">{cert.name}</span>
                      {cert.sub && <span className="cert-sub">{cert.sub}</span>}
                    </span>
                    <span className="cert-issued">ISSUED {cert.issued}</span>
                    <a className="cert-verify" href={cert.link} target="_blank" rel="noreferrer">
                      VERIFY ↗
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
