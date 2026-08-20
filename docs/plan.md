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


## 3. Standardize Styling to Tailwind

**Status:** Done

**Goal:** Remove the mix of regular CSS and Tailwind utility classes. Use Tailwind exclusively for all component styles.

**Why:** Currently `index.css` has named classes (`.nav-link`, `.project-card`, `.container`, etc.) while JSX uses Tailwind utilities inline. Mixing means styles live in two places, making debugging harder.

**Scope:**
- Convert all named CSS classes in `index.css` to Tailwind utilities in each component
- Keep only truly global rules in `index.css` (e.g., `scroll-behavior`, `font-family` on `body`)
- Affects: `Nav.jsx`, `About.jsx`, `Skills.jsx`, `ProjectCard.jsx`, `ProjectSection.jsx`, `Contact.jsx`, `Header.jsx`

**Note:** Do in a dedicated session — touches every component.


## 3c. Projects Section Split

**Status:** Done

**Goal:** Separate software projects and game projects into independent section cards with their own nav links.

**What was built:**
- `ProjectCard.jsx` — extracted card UI, importable anywhere
- `ProjectSection.jsx` — generic component accepting `id`, `title`, `projects` props
- `Projects.jsx` deleted — replaced by the two files above
- `App.jsx` now renders two `<ProjectSection />` calls with `id="projects"` and `id="game-dev"`
- Nav updated with Projects / Games labels


## 3b. SectionCard Visual Polish

**Status:** Done

**Goal:** Style the section cards that wrap each content section.

**Result:** `border border-gray-200 shadow-sm rounded-lg py-8 px-8` — no bg fill, inherits page gray. Section gap reduced to `py-8 md:py-12` across all sections.


## 5. Products Section

**Goal:** A dedicated section above "Featured Projects" for shipped, real-world products — visually distinct from the compact project card grid.

**Decisions made:**
- Layout: horizontal split card — image carousel left (~45%), content right (~55%), full section width; stacks vertically on mobile
- Carousel: `<` `>` arrow buttons + dot indicators; plain `useState` index, no library
- Content right side: title, short description paragraph, features list (✓ bullets), tech tags, links
- No status badge — the Live Demo link already communicates deployment
- Stub images: `null` entries in the array; component renders a grey placeholder so carousel navigation still works visually
- Job Application Tracker moves from `softwareProjects` to `products`

**Files to create:**
- `src/data/products.js` — ✅ done (Job Application Tracker, 3 stub images, 7 features)
- `src/components/ProductCard.jsx` — horizontal split with carousel, imports `useState`
- `src/components/ProductSection.jsx` — stacked `flex-col gap-6`, reuses `SectionCard` + `SectionHeading`

**Files to edit:**
- `src/App.jsx` — import `ProductSection`, render it before `<ProjectSection id="projects" …>`
- `src/components/Nav.jsx` — add `#products` / "Products" link before "Projects"
- `src/data/projects.js` — remove Job Application Tracker (id 1) from `softwareProjects`

**When real screenshots are ready:**
- Replace `null` entries in `images` array with paths under `public/images/` (e.g. `"/images/jat-kanban.png"`)


## 6. ImageDisplay Enhancement

**Goal:** Bring the carousel and image display up to modern standards — interactive, polished, and useful for recruiters examining screenshots closely.

**Known issues:**
- Arrow buttons overlay on top of the image, blocking content near the edges
- No way to examine an image closely — no fullscreen or lightbox mode
- No visual feedback on hover for arrows or dot indicators
- Slide change is instant — no transition animation
- No image counter ("2 / 3") — dots alone are ambiguous on small sets

**Features to add:**
- Smooth fade or slide transition between carousel images
- Lightbox modal — click image to open full-size overlay, close with Escape or clicking outside
- Keyboard navigation (← →) when carousel is focused or lightbox is open
- Image counter text ("1 / 3") alongside dot indicators
- Arrows repositioned to sit outside the image, or appear only on hover to avoid covering content
- Cursor change (`cursor-zoom-in`) on image to signal it is clickable
- Loading skeleton while image fetches (replace placeholder SVG with a shimmer)

**Decisions to make before building:**
- Arrows: always outside image vs. overlaid but only on hover?
- Lightbox: full viewport overlay or a centered modal with backdrop?
- Transition style: fade (opacity) or slide (translateX)?
- Scope: carousel mode only, or also single and grid modes get lightbox?

**Files affected:**
- `src/components/ImageDisplay.jsx` — all changes live here


## 4. Scroll-in Animations

**Status:** Undecided — fill in this section when ready.

**What's been discussed:**
- Cards fade/slide in as they enter the viewport
- Uses the browser's Intersection Observer API (no scroll event listeners)
- Could apply to: project cards, skills, about paragraphs, or all sections

**Questions to answer before planning:**
- Which elements should animate? (project cards are the most impactful)
- What style of animation? (fade up, fade in, slide from side)
- Should it be a reusable component or a one-off per section?
