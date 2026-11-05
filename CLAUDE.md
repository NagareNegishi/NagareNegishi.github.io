# CLAUDE.md

Personal portfolio site — React 19, Vite 7, Tailwind CSS v4. Deployed to GitHub Pages at `nagarenegishi.com` (CNAME in repo root).

## Where things live

**Content** — all editable data is in `src/data/`. Touch these files to update what appears on the page; avoid hardcoding content in components.

| File | What it controls |
|---|---|
| `src/data/personalInfo.js` | Name, title, email, location, about paragraphs |
| `src/data/projects.js` | `softwareProjects` and `gameProjects` arrays |
| `src/data/skills.js` | Skills by category |


## Improvement tracking

Read `docs/plan.md` and `docs/progress.md` before any improvement work.
Update `docs/progress.md` when a feature or step completes.

## Stack notes

- **Tailwind v4** — configured via `@tailwindcss/vite` plugin in `vite.config.js`. No `tailwind.config.js`, no PostCSS. CSS entry uses `@import "tailwindcss";`.
- **Static display site** — no interactive state, no state management library needed.

## Non-negotiable rules

- No em dash, ever: use `-` instead.
- No AI-clichéd wording, anywhere - write like a person would.
- Read docs before probing: verify from `docs/`, the code, or prior output; never run a throwaway script to find out.
- Never move to the next task until the current one is done. Update `docs/progress.md` first.
- Every file change goes through the Edit or Write tool so the user can review it. Never change a file through Bash (`sed -i`, `awk`, redirects, or any script that writes).
