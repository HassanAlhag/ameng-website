# AMEng Website

A from-scratch React website for AMEng, built to the client-approved
**Option 2 — Premium / Future-Ready: Technology & Geospatial / Digital
Infrastructure** direction. Fully dark/navy, technology-forward,
data-driven, built with React + Vite + Tailwind CSS v4 + React Router.

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Other scripts:
```bash
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint over src/
```

## How the project is organized

```
src/
  data/            Content lives here, not in components. Edit these
                    files to change what appears on the site.
    navigation.js  Header/footer menu structure (derived from services/sectors)
    services.js    The 8 core services (used by cards, nav, and /services/:slug)
    sectors.js     The 10 core sectors (used by cards, nav, and /sectors/:slug)
    technologies.js  The technology stack + digital deliverables list
    industries.js  "Industries Served" chip list (Option 3 content, restyled)
    projects.js    Capability-preview cards for the Projects page (see the
                    comment at the top of this file — these are representative
                    examples, not verified case studies, until real project
                    content is supplied)

  components/
    layout/        Header.jsx, Footer.jsx — render once in App.jsx
    ui/             Small shared building blocks: CTAButton, SectionHeading,
                    StatCard, PageHero
    cards/          One component per repeated data type: ServiceCard,
                    SectorCard, TechnologyCard, IndustryCard, ProjectCard
    sections/       CTASection — the reusable full-width call-to-action band

  pages/            One file per route. Home.jsx is the only page that
                    hand-assembles its sections; every other page is mostly
                    a PageHero plus one or two data-driven grids.
                      /              -> Home.jsx
                      /about         -> About.jsx
                      /services      -> Services.jsx
                      /services/:slug -> ServiceDetail.jsx  (1 template, 8 services)
                      /sectors       -> Sectors.jsx
                      /sectors/:slug -> SectorDetail.jsx    (1 template, 10 sectors)
                      /technology    -> Technology.jsx
                      /projects      -> Projects.jsx
                      /safety        -> Safety.jsx
                      /contact       -> Contact.jsx (Request Consultation form)

  lib/icons.js       String -> lucide-react icon registry. Data files store
                      icon names as plain strings (e.g. "Compass") so content
                      stays framework-agnostic; this file is the only place
                      that imports the actual icon components.

  index.css          Tailwind v4 theme (colors, fonts) + a handful of small
                      reusable CSS classes for the geospatial/grid/point-cloud
                      decorative backgrounds used across the site.

public/images/        The handful of real photos from agc-images that were
                      actually relevant (GPR, coring, sewer inspection, utility
                      CAD, road work, drilling). Everything else in that folder
                      was unrelated stock/generic-contractor imagery and was
                      left out — see projects.js's header comment.
```

## Adding content (the common cases)

- **Add a 9th service:** add an object to `src/data/services.js`. It
  automatically appears in the header dropdown, the services grid, and
  gets a working `/services/your-slug` detail page — no new files needed.
- **Add an 11th sector:** same idea, in `src/data/sectors.js`.
- **Replace placeholder project cards with real case studies:** edit
  `src/data/projects.js`. Swap in real photos under `public/images/`.
- **Change brand colors/fonts:** edit the `@theme` block at the top of
  `src/index.css` — every `bg-orange`, `text-navy`, etc. utility across
  the whole site is generated from those variables.

## Notes on decisions made while building

- **Full-page dark theme.** The Option 2 reference mockup keeps the
  *entire* page dark (not just the hero), so this build does the same
  across every page rather than mixing light and dark sections.
- **Accessibility tweak on CTA buttons.** White text on the brand's
  `#FF6B00` orange only measures ~2.9:1 contrast (fails WCAG AA's 4.5:1
  for normal text). Solid-orange buttons/badges use Precision Navy text
  instead — same two brand colors, much better contrast (see the comment
  in `src/components/ui/CTAButton.jsx`).
- **No backend yet.** The Contact form (`src/pages/Contact.jsx`) manages
  state client-side and shows a confirmation message on submit. Wire up
  a real endpoint (API route, Formspree, your CRM, etc.) in its
  `handleSubmit` when one exists.
