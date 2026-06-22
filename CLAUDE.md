# CLAUDE.md

Personal portfolio site — React 19, Vite 7, Tailwind CSS v4. Deployed to GitHub Pages at `nagarenegishi.com` (CNAME in repo root).

## Run

```bash
npm install && npm run dev   # dev server at localhost:5173
npm run build                # production build to dist/
```

## Where things live

**Content** — all editable data is in `src/data/`. Touch these files to update what appears on the page; avoid hardcoding content in components.

| File | What it controls |
|---|---|
| `src/data/personalInfo.js` | Name, title, email, location, about paragraphs |
| `src/data/projects.js` | `softwareProjects` and `gameProjects` arrays |
| `src/data/skills.js` | Skills by category |

**Components** — one per page section, each consumes from `src/data/`.

| File | Section |
|---|---|
| `src/components/Header.jsx` | Top nav / hero |
| `src/components/About.jsx` | About blurb |
| `src/components/Skills.jsx` | Skills grid |
| `src/components/Projects.jsx` | Project cards |
| `src/components/Contact.jsx` | Contact section |

**Entry points** — `src/main.jsx` mounts the app; `src/App.jsx` composes the sections; `src/index.css` is the CSS entry (imports Tailwind).

**Static** — `assets/` for images/icons, `styles/main.css` for any global styles outside the component tree.

## Stack notes

- **Tailwind v4** — configured via `@tailwindcss/vite` plugin in `vite.config.js`. No `tailwind.config.js`, no PostCSS. CSS entry uses `@import "tailwindcss";`.
- **React 19** — if adding context, use `<Context value={...}>` not `<Context.Provider value={...}>`.
- **Plain JSX, no TypeScript** — no type annotations.
- **No tests** — none set up yet.

## Guardrails

- Keep content in `src/data/` files, not in components.
- No state management library needed — this is a static display site with no interactive state.
- Do not add a `tailwind.config.js`; Tailwind v4 doesn't use one.
