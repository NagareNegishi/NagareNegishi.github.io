# CLAUDE.md

Personal portfolio site — React 19, Vite 7, Tailwind CSS v4. Deployed to GitHub Pages at `nagarenegishi.com` (CNAME in repo root).

## Where things live

**Content** — all editable data is in `src/data/`. Touch these files to update what appears on the page; avoid hardcoding content in components.

| File | What it controls |
|---|---|
| `src/data/personalInfo.js` | Name, title, email, location, about paragraphs |
| `src/data/projects.js` | `softwareProjects` and `gameProjects` arrays |
| `src/data/skills.js` | Skills by category |


## Stack notes

- **Tailwind v4** — configured via `@tailwindcss/vite` plugin in `vite.config.js`. No `tailwind.config.js`, no PostCSS. CSS entry uses `@import "tailwindcss";`.
- **Static display site** — no interactive state, no state management library needed.
