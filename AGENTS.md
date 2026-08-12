# AGENTS.md

Instructions for AI coding agents working in this repository.

## Project

Creative developer résumé for **Isaiah Thomas Galay**, styled as an interactive engineering spec sheet (blueprint aesthetic). React 18 + Vite 5 + Framer Motion 11. No TypeScript, no UI library, no test framework — one global stylesheet.

## Commands

```bash
npm run dev        # dev server
npm run build      # MUST pass before any change is considered done
npm run preview    # serve production build
```

There is no lint, typecheck, or test setup. `npm run build` is the verification step — run it after every change.

## Where things live

- `src/data.js` — **single source of truth for all content** (profile, experience, skill groups, stack layers, education, awards, revisions). Edit content here, never inline in components.
- `src/index.css` — the entire design system: tokens in `:root`, then component styles. Read `docs/DESIGN.md` before changing visuals.
- `src/components/` — one component per sheet/element; `src/hooks/useIsMobile.js` for responsive layout switches.
- `index.html` — Google Fonts (Anton, Archivo, Archivo Black, IBM Plex Mono, Cinzel) and meta.

## Conventions

- **No code comments** unless explicitly asked.
- Content edits: update `src/data.js` only. Experience entries need unique sequential `rev` values (oldest = `REV.A`), `start`/`end` months (`"YYYY-MM"`, `end: null` when ongoing) that position the node on the career traverse timeline, a `span`, and `current: true` when ongoing. Roles are grouped by `company` automatically; the largest multi-year gap is auto-drawn as a scale break.
- **Skills must stay unrated** — never add levels, bars, percentages, or scores. Group via `SKILL_GROUPS` only.
- Styling: use the CSS custom properties (`--paper`, `--cyan`, `--amber`, `--line*`, `--ink*`); reuse existing classes (`.tag`, `.btn`, `.dim-line`, `.sheet-*`) before adding new ones. Square corners, no glassmorphism, no gradient text.
- Motion: Framer Motion with the house easing `[0.22, 1, 0.36, 1]`; reveals via `whileInView` + `once: true`. Preserve `prefers-reduced-motion` and `pointer: coarse` fallbacks.
- Don't add dependencies without asking first.
- Accessibility: interactive elements must be real `<button>`/`<a>` with proper `aria-*` states (see the timeline accordion in `Experience.jsx`).

## Git

- Never commit unless explicitly asked.
- If asked to commit, match the existing concise imperative style.

## Docs

- `README.md` — overview, structure, content-editing guide.
- `docs/DESIGN.md` — tokens, typography, motion, hard do/don't rules.
- `.opencode/skills/portfolio-content/SKILL.md` — opencode skill covering the same ground for opencode sessions.
