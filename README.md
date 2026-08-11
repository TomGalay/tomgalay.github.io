# Isaiah Thomas Galay — Spec Sheet Résumé

A creative developer résumé built as an **interactive engineering spec sheet**: blueprint grid, CAD crosshair cursor, a 3D isometric model of the system layers Isaiah builds, a revision-controlled work-experience timeline, and awards rendered as rubber stamps.

Built with **React + Vite + Framer Motion**. No UI framework, no component library — one hand-rolled design system in `src/index.css`.

## Quick start

```bash
npm install
npm run dev        # local dev server
npm run build      # production build to dist/
npm run preview    # serve the production build
```

## Concept

The site treats the résumé as a controlled engineering document:

| Sheet | Section | Treatment |
| ----- | ------- | --------- |
| 00 | Title | Statement display + interactive 3D system stack + title-block data strip |
| 01 | Experience | Interactive revision timeline (hover/click a REV to inspect; prev/next controls) |
| 02 | Skills | Bill of materials — grouped by function, deliberately **unrated** |
| 03 | Education & Awards | Certification record with stamp-in award seals |
| 04 | Contact | Transmit block with direct lines |

Navigation is a sticky **sheet-tab bar** (CAD-style) with scroll-spy and a reading progress line. Ambient layers: drifting blueprint grid, radial glows, vignette, and a cursor crosshair with live X/Y readout (desktop pointers only).

## Project structure

```
├── index.html              # Fonts (Anton / Archivo / IBM Plex Mono) + meta
├── src/
│   ├── main.jsx
│   ├── App.jsx             # Composition root
│   ├── data.js             # SINGLE SOURCE OF TRUTH for all content
│   ├── index.css           # Entire design system (tokens, layout, motion)
│   ├── hooks/
│   │   └── useIsMobile.js  # matchMedia hook for layout switching
│   └── components/
│       ├── TopNav.jsx      # Sheet-tab navigation + scroll-spy + progress
│       ├── Landing.jsx     # Sheet 00 — statement + data strip
│       ├── SystemStack.jsx # 3D isometric layer model (CSS 3D + pointer tilt)
│       ├── Crosshair.jsx   # CAD cursor overlay
│       ├── SheetHeader.jsx # Shared sheet title + dimension line
│       ├── Experience.jsx  # Sheet 01 — interactive timeline / mobile accordion
│       ├── Skills.jsx      # Sheet 02 — grouped bill of materials
│       ├── Education.jsx   # Sheet 03 — record + award stamps
│       ├── Contact.jsx     # Sheet 04
│       └── Footer.jsx      # Revision history table
├── docs/DESIGN.md          # Design system reference
├── AGENTS.md               # Instructions for AI coding agents
└── .opencode/              # opencode skill + config
```

## Editing content

All copy lives in **`src/data.js`** — you should never need to touch components to update the résumé.

- **Profile** — `PROFILE` (name, contact, doc number, revision, status).
- **Experience** — `EXPERIENCE` array, newest first. Each entry needs a unique sequential `rev` (`REV.A` is the oldest), a short `span` for the timeline spine, plus `period`, `place`, `summary`, `points`, `tags`, and `current: true` for ongoing roles.
- **Skills** — `SKILL_GROUPS`. Groups are rendered in order; part numbers (`P-01`…) are assigned automatically. **Do not add ratings, levels, or scores** — the display is intentionally unrated.
- **Certifications** — `CERTIFICATIONS`. Each entry needs an `id` (`CRT-01`…), `name`, optional `sub`, `issuer`, `logo` (in `public/projects/certifications/`), `issued`, and a Credly `link`.
- **Stack model** — `STACK_LAYERS` (bottom → top) and `STACK_CALLOUTS` (floating annotations).
- **Education / Awards / Footer revisions** — `EDUCATION`, `AWARDS`, `REVISIONS`.

Design tokens (colors, fonts, lines) are the CSS custom properties at the top of `src/index.css`. See `docs/DESIGN.md`.

## Accessibility & performance notes

- `prefers-reduced-motion` disables the grid drift, layer bob, beacon, and callout animations, and turns off smooth scrolling.
- The crosshair is hidden on coarse pointers (`@media (pointer: coarse)`).
- The experience timeline degrades to an accessible accordion (real `<button>`s, `aria-expanded`) below 880px.
- The 3D model is CSS transforms only — no WebGL, keeps the bundle light (~91 kB JS gzipped).

## Deployment

`npm run build` outputs a static `dist/` — deploy to any static host (Netlify, Vercel, GitHub Pages, S3). No server runtime required.
