# Portfolio Improvement Plan

## 1. Navigation Bar

**Goal:** Sticky nav at the top that lets users jump to each section without scrolling.

**Decisions to make:**
- Fixed to top (stays visible while scrolling) vs. static (scrolls away with the page)
- Which sections to link: About, Skills, Projects, Contact
- Highlight the active section as you scroll past it (requires scroll tracking in React)

**Approach:**
- Add a `<Nav>` component in `src/components/Nav.jsx`
- Each link uses an `<a href="#section-id">` anchor pointing to `id` attributes on each section
- Add `id` props to the existing section elements in About, Skills, Projects, Contact

**Open questions:**
- Mobile: hamburger menu or just shrink the links?
- Style: same white background as Header, or a different color/transparent?


## 2. Social Links in Header

**Goal:** Add GitHub and LinkedIn links (with icons) next to the name/title in the Header so recruiters see them immediately.

**Decisions to make:**
- Icon library to use (see options below)
- Link targets: GitHub profile + LinkedIn profile URL (need your LinkedIn URL)
- Placement: below the title, or inline beside the name?

**Icon library options:**
- `react-icons` — large library, import only what you use, most popular choice
- SVG inline — no dependency, copy the SVG markup directly, slightly more verbose
- Recommended: `react-icons` (less boilerplate, easy to swap icons later)

**Data to add to `src/data/personalInfo.js`:**
- `github`: your GitHub profile URL
- `linkedin`: your LinkedIn profile URL


## 3. Scroll-in Animations

**Status:** Undecided — fill in this section when ready.

**What's been discussed:**
- Cards fade/slide in as they enter the viewport
- Uses the browser's Intersection Observer API (no scroll event listeners)
- Could apply to: project cards, skills, about paragraphs, or all sections

**Questions to answer before planning:**
- Which elements should animate? (project cards are the most impactful)
- What style of animation? (fade up, fade in, slide from side)
- Should it be a reusable component or a one-off per section?
