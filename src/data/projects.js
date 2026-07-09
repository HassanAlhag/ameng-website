// ============================================================
// PROJECTS / CAPABILITY PREVIEW DATA
// The corporate profile scopes Projects as a two-phase page:
// Phase 1 = a filterable capability grid (sector + service tags),
// Phase 2 = full case studies, "activated once client provides
// content." No case-study-level project data (client names,
// locations, measured outcomes) was supplied yet, so Phase 1 cards
// below are representative capability examples, not specific past
// projects — labelled that way in the UI (see ProjectCard.jsx /
// Projects.jsx) rather than presented as verified case studies.
// Swap in real project data here the moment Phase 2 content exists.
// ============================================================

export const projects = [
  {
    slug: "underground-utility-mapping",
    title: "Underground Utility Mapping & GPR",
    sector: "municipal-infrastructure",
    service: "utility-mapping-gpr",
    image: "/images/utility-mapping-cad.png",
    summary:
      "GPR detection and CAD/GIS utility mapping to reduce excavation risk on active municipal corridors.",
    featured: true,
  },
  {
    slug: "concrete-scanning-coring-support",
    title: "Concrete Scanning & Coring Support",
    sector: "industrial-facilities",
    service: "concrete-scanning-imaging-coring",
    image: "/images/concrete-coring.png",
    summary:
      "Pre-cut GPR scanning and diamond coring to protect rebar, conduits and post-tension cable on an active facility floor.",
    featured: true,
  },
  {
    slug: "cctv-sewer-condition-assessment",
    title: "CCTV Sewer Condition Assessment",
    sector: "water-wastewater",
    service: "cctv-sewer-inspection",
    image: "/images/sewer-manhole-inspection.png",
    summary:
      "PACP-coded robotic inspection supporting rehabilitation prioritization for a municipal sanitary network.",
    featured: true,
  },
  {
    slug: "roadway-corridor-survey-support",
    title: "Roadway & Corridor Infrastructure Support",
    sector: "transportation",
    service: "surveying-services",
    image: "/images/road-infrastructure-work.png",
    summary:
      "Topographic and as-built survey support for roadway rehabilitation and corridor infrastructure work.",
    featured: true,
  },
  {
    slug: "subsurface-gpr-detection",
    title: "Subsurface GPR Detection",
    sector: "utilities",
    service: "subsurface-utility-engineering",
    image: "/images/gpr-scan-readout.png",
    summary:
      "Multi-frequency GPR profiling used to classify buried utility signatures ahead of a QL-B investigation.",
    featured: false,
  },
  {
    slug: "site-concrete-coring-drilling",
    title: "Site Concrete Coring & Drilling",
    sector: "land-development",
    service: "concrete-scanning-imaging-coring",
    image: "/images/concrete-drilling-coring.png",
    summary:
      "Precision diamond drilling completed after GPR clearance confirmed a conflict-free coring path.",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
