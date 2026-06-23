# Portfolio Improvements — Progress

| # | Feature | Status | Notes |
|---|---------|--------|-------|
| 1 | Navigation bar — basic | Done | Sticky nav, anchor links, soft blue-gray bg, pill hover style; keyframe pop animation on hover |
| 1b | Navigation bar — active highlight | Done | intersectionRatio + 6-threshold IO; highest-ratio section wins; box-shadow glow on active pill |
| 2 | Social links in header | Done | IconLink component, react-icons/fa, added to Header + Contact |
| 3 | Standardize styling to Tailwind | Done | All named CSS classes removed; `@layer base` for body/headings; `@theme` for nav-pop animation |
| 3b | SectionCard visual polish | Not started | **Start here next session** — `SectionCard.jsx` has styles commented out; dial in bg, rounding, shadow, spacing |
| 4 | Scroll-in animations | Planning | Scope not decided yet — see plan.md §4 |

## Decisions log

| Date | Decision | Reason |
|------|----------|--------|
| 2026-06-23 | Nav active highlight uses `intersectionRatio` with 6-step threshold array | Highest-ratio section wins — handles short sections like Contact that never reach a narrow trigger band |
| 2026-06-23 | Nav hover uses keyframe pulse (`nav-pop`) not persistent scale | Scales up briefly on entry then returns to normal — feels like a tap, not a stuck state |
| 2026-06-23 | Nav active uses distinct depth (`#c8dcf2`) + layered `box-shadow` glow | Hover (lighter) vs active (darker + glow ring) gives clear visual hierarchy without different hues |
| 2026-06-23 | Standardize all styles to Tailwind | Currently mixing Tailwind + CSS classes; Tailwind-only is cleaner |
| 2026-06-23 | `body`/`h1–h6` base styles moved into `@layer base` | Raw CSS rules outside layers outrank Tailwind utilities; `@layer base` ensures utilities can override |
| 2026-06-23 | `nav-pop` keyframe registered via `@theme { --animate-nav-pop }` | Keyframes must stay in CSS; `@theme` exposes them as Tailwind utilities (`hover:animate-nav-pop`) without leaving raw class rules in CSS |

## Open issues

_No open issues._
