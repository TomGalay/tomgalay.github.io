# Design System — Spec Sheet

The visual language is an **engineering drawing / blueprint**: deep blueprint blue paper, white ink lines, drafting annotations, stamps, and dimension lines. Everything on screen should read like it belongs on a controlled technical document.

## Tokens

All tokens are CSS custom properties in `src/index.css` (`:root`). Never hardcode colors elsewhere.

| Token | Value | Role |
| ----- | ----- | ---- |
| `--paper` | `#0d2a55` | Blueprint paper |
| `--paper-deep` | `#091e40` | Panels, nav surface |
| `--ink` | `#e9f2ff` | Primary text |
| `--ink-dim` | `#9db4da` | Secondary text |
| `--line` | `rgba(214,232,255,.14)` | Hairline rules, grid |
| `--line-strong` | `rgba(214,232,255,.38)` | Borders, dimension lines |
| `--cyan` | `#6fd3ff` | Interactive / active / dimension accents |
| `--amber` | `#ffb020` | Highlights, tabs, part IDs, CTAs |
| `--stamp` | `#ff6b4a` | Stamps and seals only |

Additional semantic colors used sparingly: `#4ade80` (status LEDs, "current" markers, checkmarks).

## Typography

| Role | Family | Usage |
| ---- | ------ | ----- |
| Display | **Anton** | Headlines, sheet titles, layer plates, big numbers. Always uppercase, tight leading (~0.95). |
| Body | **Archivo** | Paragraphs, summaries, points. |
| Annotation | **IBM Plex Mono** | Labels, meta, tags, tabs, coordinates — everything that reads like a drafting note. Wide letter-spacing (0.1em–0.2em), small sizes (9.5–12.5px). |

Outlined text (transparent fill + `-webkit-text-stroke`) is a signature move — used for the middle name, the word "SYSTEMS", ghost REV letters, and sheet numbers.

## Motion

- **Signature easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for reveals and hovers; `cubic-bezier(0.65, 0, 0.35, 1)` for line draws.
- Reveals use Framer Motion `whileInView` with `viewport={{ once: true }}`, small `y` offsets (24–34px), durations 0.45–0.75s.
- Living elements: drifting grid, skills ticker, blinking status LED, beacon pulse on the top stack layer, floating callouts, cursor crosshair.
- Interactive feedback everywhere: hover lifts (`translateY(-3px…-5px)`), underline draws (`scaleX` with origin flip), hard offset shadows on CTAs (`5px 5px 0`), glow on active timeline nodes.
- **Always** respect `prefers-reduced-motion` (see the block at the end of `index.css`) and hide pointer-only effects behind `@media (pointer: coarse)`.

## Layout conventions

- Content column: `.wrap` (max 1180px, 48px gutters, 22px on mobile).
- Sections are "sheets": top hairline border, `SHEET NN` amber tab + giant title, mono note + animated dimension line, ghost sheet number watermark top-right.
- Borders are 1px `--line` / `--line-strong`; dashed lines for secondary separators. Double frames (`outline` + `border`) for hero artifacts (timeline card, original title block).
- Corners are **square**. No rounded corners except status LEDs/beacons. No glassmorphism beyond the single sticky nav blur.

## Hard rules (do / don't)

**Do**
- Keep all content in `src/data.js`.
- Reuse existing classes (`.tag`, `.btn`, `.dim-line`, `.sheet-*`) before inventing new ones.
- Keep the three-accent discipline: cyan = interactive, amber = highlight, stamp-red = seals.

**Don't**
- **No skill ratings, bars, gauges, or scores** — skills are grouped by function and shown unrated (explicit owner directive).
- No gradient-filled headlines, no indigo/violet/pink gradients.
- No rounded-2xl cards, no glass panels, no aurora blobs.
- No new font families or UI libraries without discussion.
- No comments in code unless asked.
