// ============================================================
// NAVIGATION DATA
// Single source of truth for the header menu and footer link
// columns. "children" (when present) renders as a dropdown panel
// in Header.jsx — built from services.js / sectors.js so the menu
// never drifts out of sync with the actual content.
// ============================================================
import { services } from "./services";
import { sectors } from "./sectors";

export const primaryNav = [
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: services.map((s) => ({ label: s.name, path: `/services/${s.slug}` })),
  },
  {
    label: "Sectors",
    path: "/sectors",
    children: sectors.map((s) => ({ label: s.name, path: `/sectors/${s.slug}` })),
  },
  { label: "Technology", path: "/technology" },
  { label: "Projects", path: "/projects" },
  { label: "Safety", path: "/safety" },
];

export const primaryCta = { label: "Request Consultation", path: "/contact" };

export const footerNav = {
  services: services.slice(0, 6).map((s) => ({ label: s.name, path: `/services/${s.slug}` })),
  sectors: sectors.slice(0, 6).map((s) => ({ label: s.name, path: `/sectors/${s.slug}` })),
  company: [
    { label: "About AMEng", path: "/about" },
    { label: "Technology", path: "/technology" },
    { label: "Projects", path: "/projects" },
    { label: "Safety & Quality", path: "/safety" },
  ],
};
