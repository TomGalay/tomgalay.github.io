# Isaiah Thomas Galay — Spec Sheet Résumé

A creative developer résumé built as an **interactive engineering spec sheet**: blueprint grid, CAD crosshair cursor, a 3D isometric model of the system layers Isaiah builds, a horizontal career-traverse timeline, project showcases framed as phones and browser windows, and awards rendered as rubber stamps.

Built with **React + Vite + Framer Motion + simple-icons**. No UI framework, no component library — one hand-rolled design system in `src/index.css`.

Live at **https://tomgalay.github.io/** (user GitHub Pages site, auto-deployed from `main`).

## Quick start

```bash
npm install
npm run dev        # local dev server
npm run build      # production build to dist/ — MUST pass after any change
npm run preview    # serve the production build
```

## Concept

The site treats the résumé as a controlled engineering document:

| Sheet | Section | Treatment |
| ----- | ------- | --------- |
| 00 | Title | Statement display + interactive 3D system stack + title-block data strip |
| 01 | Career | Horizontal career traverse — roles as nodes on a drafting-style time axis with a compressed scale break, alternating callout tabs, a pointer crosshair readout, and a pulsing NOW beacon (hover/click a node to inspect; prev/next REV controls). Degrades to an accessible accordion below 1100px |
| 02 | Highlights | Project showcase — featured work rendered inside animated phone / browser frames with thumbnail strips and a keyboard-navigable lightbox, plus an archive grid and a mini-grid of other works |
| 03 | Skills | Bill of materials — grouped by function with inline glyphs, deliberately **unrated** |
| 04 | Background | Education record + organization history, stamp-in award seals, and a four-time champion competition record |
| 05 | Reach Out | Transmit block with direct lines |

Navigation is a sticky **sheet-tab bar** (CAD-style) with scroll-spy, a reading progress line, and a light/dark/blue theme switcher (persisted in `localStorage`). Ambient layers: drifting blueprint grid, radial glows, vignette, and a cursor crosshair with live X/Y readout (desktop pointers only).

## Project structure

```
├── index.html              # Fonts (Anton / Archivo / IBM Plex Mono) + meta + theme boot script
├── public/                 # Project screenshots + certification logos (referenced from data.js)
├── .github/workflows/
│   └── deploy.yml          # Build + deploy to GitHub Pages on push to main
├── src/
│   ├── main.jsx
│   ├── App.jsx             # Composition root
│   ├── data.js             # SINGLE SOURCE OF TRUTH for all content
│   ├── index.css           # Entire design system (tokens, layout, motion)
│   ├── hooks/
│   │   └── useIsMobile.js  # matchMedia hook for layout switching
│   └── components/
│       ├── TopNav.jsx      # Sheet-tab navigation + scroll-spy + progress + theme switcher
│       ├── Landing.jsx     # Sheet 00 — statement + data strip
│       ├── SystemStack.jsx # 3D isometric layer model (CSS 3D + pointer tilt)
│       ├── Crosshair.jsx   # CAD cursor overlay
│       ├── SheetHeader.jsx # Shared sheet title + dimension line
│       ├── Experience.jsx  # Sheet 01 — horizontal career traverse / grouped mobile accordion
│       ├── Projects.jsx    # Sheet 02 — phone/browser showcases + lightbox + archive grids
│       ├── SkillIcons.jsx  # Simple-icons brands + hand-drawn glyphs for skill groups
│       ├── Skills.jsx      # Sheet 03 — grouped bill of materials
│       ├── Education.jsx   # Sheet 04 — record + award stamps + competition record
│       ├── Contact.jsx     # Sheet 05
│       └── Footer.jsx      # Revision history table
├── docs/DESIGN.md          # Design system reference
├── AGENTS.md               # Instructions for AI coding agents
└── .opencode/              # opencode skill + config
```

## Editing content

All copy lives in **`src/data.js`** — you should never need to touch components to update the résumé.

- **Profile** — `PROFILE` (name, role, contact, doc number, type, status).
- **Experience** — `EXPERIENCE` array, newest first. Each entry needs a unique sequential `rev` (`REV.A` is the oldest), `start`/`end` months (`"YYYY-MM"`, `end: null` for ongoing) that position its node on the traverse timeline, a short `span`, plus `period`, `place`, `summary`, `points`, `tags`, and `current: true` for ongoing roles. The largest multi-year gap between roles is auto-detected and drawn as a compressed scale break. Roles are grouped by `company` automatically (append ` · Internship` to the company name for internship groups); overlapping roles at the same employer are flagged as concurrent.
- **Projects** — `PROJECTS` with three buckets:
  - `featured`: full showcases. `layout: "mobile"` (phone frame, 6 screenshots in `public/projects/<slug>/`) or `"web"` (browser frame with `url`), `client`, `blurb`, and `links`. A link with `href: "#"` renders as a "SOON" placeholder.
  - `archive`: single-image cards (`image` + `blurb` + `links`).
  - `other`: text-only mini cards (`desc` + `links`).
- **Skills** — `SKILL_GROUPS`. Groups are rendered in order; part numbers (`P-01`…) are assigned automatically. Glyphs resolve per item in `SkillIcons.jsx` (brand icons via simple-icons, hand-drawn fallbacks, crosshair default). **Do not add ratings, levels, or scores** — the display is intentionally unrated.
- **Certifications** — `CERTIFICATIONS`. Each entry needs an `id` (`CRT-01`…), `name`, optional `sub`, `issuer`, `logo` (in `public/projects/certifications/`), `issued`, and a Credly `link`.
- **Stack model** — `STACK_LAYERS` (bottom → top); callout annotations are hardcoded in `SystemStack.jsx`.
- **Education / Awards / Competitions** — `EDUCATION` (degree, honors, `organizations`), `AWARDS` (stamp seals), `COMPETITIONS` (champion record). Footer revision history is hardcoded in `Footer.jsx`.

Design tokens (colors, fonts, lines) are the CSS custom properties at the top of `src/index.css`. See `docs/DESIGN.md`.

## Accessibility & performance notes

- `prefers-reduced-motion` disables the grid drift, layer bob, beacon, and callout animations, and turns off smooth scrolling.
- The crosshair is hidden on coarse pointers (`@media (pointer: coarse)`).
- The experience timeline degrades to an accessible accordion (real `<button>`s, `aria-expanded`) below 1100px.
- The 3D model is CSS transforms only — no WebGL, keeps the bundle light (~104 kB JS gzipped).

## Deployment

The site publishes to the **user GitHub Pages** site `https://tomgalay.github.io/` from the repo `TomGalay/tomgalay.github.io` (this repo was renamed from `Portfolio`).

- `.github/workflows/deploy.yml` builds with Vite (`base: "/"` — absolute paths, correct for a user site) on every push to `main`, then publishes via `actions/upload-pages-artifact` + `actions/deploy-pages`.
- Repo **Settings → Pages → Source** must be set to **GitHub Actions**.
- `npm run build` outputs a static `dist/` — the same artifact could be deployed to any static host (Netlify, Vercel, S3); no server runtime required.
