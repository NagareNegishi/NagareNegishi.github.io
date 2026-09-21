# Kajitor — Product Context

_Last updated: 2026-09-22_

## What it is

Kajitor is a web app for tracking job applications (Wishlist → Offer pipeline). Rebranded from **Job Application Tracker**. Live at `kajitor.com`.

## Status

- Live product at `kajitor.com` — click **Try Demo** for demo mode (no account required)
- Freemium: Free accounts get a few AI actions/day; Paid removes the cap
- GitHub repo is **private** — omit GitHub link from portfolio
- Desktop app (Tauri, local-only, SQLite) ships installers via a separate private repo (`kajitor/desktop-releases`)

## Tech stack

- **Backend:** ASP.NET Core 10, EF Core, PostgreSQL, ASP.NET Identity + JWT
- **Frontend:** React 19 + TypeScript + Vite
- **Storage:** AWS S3 (prod), local filesystem (dev)
- **Infra:** Render (web service + static site + managed PostgreSQL), Cloudflare DNS
- **External APIs:** Resend (email), Anthropic (AI features)
- **Testing:** xUnit (backend), Vitest + Testing Library (frontend)
- **CI/CD:** GitHub Actions (tests + lint + build on PR; migrations + Render deploy on merge to main)

## Key features (portfolio-ready)

- Table and Kanban board views, drag to move between stages
- Customisable columns, dark mode + 4 colour themes
- Attach CV/cover letter per application; contact + correspondence history
- AI auto-fill: paste a job listing → fields populate automatically
- AI job insights: alignment score, skill gaps, interview prep
- Analytics dashboard: funnel, weekly chart, stale applications list
- JWT auth with httpOnly refresh token rotation, email verification

## Portfolio data location

`src/data/products.js`
