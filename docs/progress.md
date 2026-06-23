# Portfolio Improvements — Progress

| # | Feature | Status | Notes |
|---|---------|--------|-------|
| 1 | Navigation bar — basic | Done | Sticky nav, anchor links, soft blue-gray bg, pill hover style |
| 1b | Navigation bar — active highlight | Done | intersectionRatio + 6-threshold IO; highest-ratio section wins |
| 2 | Social links in header | Done | IconLink component, react-icons/fa, added to Header + Contact |
| 3 | Standardize styling to Tailwind | Not started | See plan.md §3 — dedicated session needed |
| 4 | Scroll-in animations | Planning | Scope not decided yet — see plan.md §4 |

## Decisions log

| Date | Decision | Reason |
|------|----------|--------|
| 2026-06-23 | Nav active highlight uses `intersectionRatio` with 6-step threshold array | Highest-ratio section wins — handles short sections like Contact that never reach a narrow trigger band |
| 2026-06-23 | Standardize all styles to Tailwind | Currently mixing Tailwind + CSS classes; Tailwind-only is cleaner |

## Open issues

_No open issues._
