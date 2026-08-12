---
name: portfolio-content
description: Use when editing this portfolio résumé site — updating experience, skills, education, awards, contact details, or the 3D system stack in src/data.js, or when changing the blueprint design system in src/index.css. Covers content structure, design tokens, motion conventions, and the no-skill-ratings rule.
---

# Portfolio content & design skill

This repo is Isaiah Thomas Galay's résumé site: React 18 + Vite + Framer Motion, styled as an engineering spec sheet (blueprint aesthetic).

## Content edits — always src/data.js

All copy lives in `src/data.js`. Never hardcode résumé content in components.

- `PROFILE` — name (3-line array), role, contact, `docNo`, `rev`, `status`.
- `EXPERIENCE` — newest first. Each entry: unique sequential `rev` (oldest role = `REV.A`), `role`, `company`, `start`/`end` months (`"YYYY-MM"`, `end: null` if ongoing) that position the node on the career traverse timeline, `period` (full), `span` (short), `place`, `summary`, `points[]`, `tags[]`, `current: true` if ongoing. The largest multi-year gap between roles is auto-detected and drawn as a compressed scale break. Roles are grouped by `company` (append ` · Internship` for internship groups); overlapping roles at one employer are flagged as concurrent.
- `SKILL_GROUPS` — ordered groups with `id` (`G-01`…), `name`, `note`, `items[]`. Part numbers render automatically.
- `STACK_LAYERS` — bottom → top plates of the 3D model; `STACK_CALLOUTS` — floating annotations (`c1`–`c3` positions).
- `EDUCATION`, `AWARDS`, `REVISIONS` — sheet 03 and the footer revision table. Keep `REVISIONS` in sync when adding experience entries.

**Hard rule: skills are unrated.** Never add levels, bars, gauges, percentages, or scores — the owner explicitly removed them.

## Design changes — src/index.css + docs/DESIGN.md

- Tokens only: `--paper`, `--paper-deep`, `--ink`, `--ink-dim`, `--line`, `--line-strong`, `--cyan` (interactive), `--amber` (highlight), `--stamp` (seals).
- Fonts: Anton (display, uppercase, tight leading), Archivo Black (landing name only), Archivo (body), IBM Plex Mono (annotations, wide tracking).
- Signature easing: `cubic-bezier(0.22, 1, 0.36, 1)`. Reveals: `whileInView`, `once: true`, small y offsets.
- Square corners, 1px hairlines, dashed secondary separators, outlined display text via `-webkit-text-stroke`.
- Preserve `prefers-reduced-motion` and `@media (pointer: coarse)` fallbacks. The 3D stack is CSS transforms only — keep it WebGL-free.

## Verify

`npm run build` must pass. There is no lint/typecheck/test setup.
