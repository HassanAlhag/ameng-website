// ============================================================
// NAVIGATION DATA
// Single source of truth for the header menu and footer link
// columns. "children" (when present) renders as the mobile
// accordion submenu in Header.jsx — built from services.js /
// sectors.js so the menu never drifts out of sync with the actual
// content. "megaMenu" (when present) drives the desktop mega menu
// panel for that item — routes/labels are pulled from the same
// data files; only the mega-menu-specific column grouping and
// short blurbs are authored here.
// ============================================================
import { services, getServiceBySlug } from "./services";
import { sectors } from "./sectors";
import { technologies } from "./technologies";

const serviceLink = (slug, blurb) => {
  const service = getServiceBySlug(slug);
  return { label: service.name, path: `/services/${slug}`, icon: service.icon, blurb };
};

export const primaryNav = [
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: services.map((s) => ({ label: s.name, path: `/services/${s.slug}` })),
    megaMenu: {
      type: "services",
      columns: [
        {
          title: "Survey & Geospatial",
          items: [
            serviceLink("surveying-services", "Topographic, layout and as-built surveys."),
            serviceLink("geomatics-gis", "GNSS, GIS, laser scanning and spatial data."),
            serviceLink("uav-surveying", "Photogrammetry, LiDAR and aerial capture."),
          ],
        },
        {
          title: "Subsurface Intelligence",
          items: [
            serviceLink("subsurface-utility-engineering", "ASCE 38-22 and CSA S250-aligned investigations."),
            serviceLink("utility-mapping-gpr", "CAD, GIS, BIM-ready underground mapping."),
            serviceLink("ql-a-daylighting", "Positive utility verification and exposure."),
          ],
        },
        {
          title: "Inspection & Concrete",
          items: [
            serviceLink("cctv-sewer-inspection", "PACP, MACP and LACP condition assessment."),
            serviceLink("concrete-scanning-imaging-coring", "Rebar, conduit, void detection and diamond coring."),
          ],
        },
      ],
      cta: {
        title: "Need help choosing a service?",
        text: "Share drawings, site plans or project requirements and AMEng will recommend the right workflow.",
        buttonLabel: "Request Consultation",
        path: "/contact",
      },
    },
  },
  {
    label: "Sectors",
    path: "/sectors",
    children: sectors.map((s) => ({ label: s.name, path: `/sectors/${s.slug}` })),
    megaMenu: {
      type: "sectors",
      chips: sectors.map((s) => ({ label: s.name, path: `/sectors/${s.slug}`, icon: s.icon })),
      cta: {
        title: "Built for complex infrastructure environments.",
        text: "Explore how AMEng supports public, private and industrial infrastructure teams.",
        buttonLabel: "View Sectors",
        path: "/sectors",
      },
    },
  },
  {
    label: "Technology",
    path: "/technology",
    megaMenu: {
      type: "technology",
      grid: technologies.map((t) => ({ label: t.name, path: `/technology/${t.slug}`, icon: t.icon })),
      cta: {
        title: "Connected field data.",
        text: "From field capture to engineering-ready outputs.",
        buttonLabel: "Explore Technology",
        path: "/technology",
      },
    },
  },
  { label: "Projects", path: "/projects" },
  { label: "Safety", path: "/safety" },
  { label: "Contact Us", path: "/contact" },
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
