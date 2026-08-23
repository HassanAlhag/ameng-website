// ============================================================
// SECTORS DATA
// Powers the Home page sector strip, the /sectors overview grid
// and each /sectors/:slug detail page. `services` lists related
// service slugs (see src/data/services.js) so detail pages can
// cross-link without duplicating content.
// ============================================================

export const sectors = [
  {
    slug: "municipal-infrastructure",
    icon: "Landmark",
    name: "Municipal Infrastructure",
    summary:
      "Survey, utility mapping and asset data that support capital planning, road, water and sewer projects at the municipal level.",
    services: ["surveying-services", "subsurface-utility-engineering", "utility-mapping-gpr", "cctv-sewer-inspection"],
  },
  {
    slug: "transportation",
    icon: "Route",
    name: "Transportation",
    summary:
      "Corridor, rail and roadway surveys plus subsurface utility data that keep transportation projects moving without conflict.",
    services: ["surveying-services", "uav-surveying", "ql-a-daylighting", "subsurface-utility-engineering"],
  },
  {
    slug: "water-wastewater",
    icon: "Droplets",
    name: "Water & Wastewater",
    summary:
      "CCTV inspection, utility mapping and infrastructure surveys that support condition assessment and asset lifecycle planning.",
    services: ["cctv-sewer-inspection", "subsurface-utility-engineering", "surveying-services"],
  },
  {
    slug: "utilities",
    icon: "Zap",
    name: "Utilities",
    summary:
      "Precise utility locating, mapping and daylighting that protect existing networks and reduce strike risk during construction.",
    services: ["subsurface-utility-engineering", "utility-mapping-gpr", "ql-a-daylighting"],
  },
  {
    slug: "energy",
    icon: "Flame",
    name: "Energy",
    summary:
      "Geospatial and subsurface data for energy infrastructure projects, from pipeline corridors to facility site surveys.",
    services: ["surveying-services", "uav-surveying", "subsurface-utility-engineering"],
  },
  {
    slug: "telecommunications",
    icon: "Antenna",
    name: "Telecommunications",
    summary:
      "Underground utility mapping and GPR detection that support fiber and telecom network planning and construction.",
    services: ["utility-mapping-gpr", "subsurface-utility-engineering"],
  },
  {
    slug: "industrial-facilities",
    icon: "Factory",
    name: "Industrial Facilities",
    summary:
      "Laser scanning, concrete scanning and reality capture that document existing conditions inside active industrial sites.",
    services: ["geomatics-gis", "concrete-scanning-imaging-coring", "utility-mapping-gpr"],
  },
  {
    slug: "airports",
    icon: "PlaneTakeoff",
    name: "Airports",
    summary:
      "Survey and UAV data for airside and landside infrastructure projects, delivered to strict operational safety standards.",
    services: ["surveying-services", "uav-surveying", "concrete-scanning-imaging-coring"],
  },
  {
    slug: "transit",
    icon: "TrainFront",
    name: "Transit",
    summary:
      "Rail corridor surveys and underground utility data that support transit expansion and infrastructure renewal.",
    services: ["surveying-services", "subsurface-utility-engineering", "cctv-sewer-inspection"],
  },
  {
    slug: "land-development",
    icon: "MapPinned",
    name: "Land Development",
    summary:
      "Boundary, topographic and construction layout surveys that give developers a reliable foundation from site plan to build-out.",
    services: ["surveying-services", "geomatics-gis", "ql-a-daylighting"],
  },
  {
    slug: "construction",
    icon: "HardHat",
    name: "Construction",
    summary:
      "Survey, subsurface utility, GIS/BIM and concrete scanning data that gives contractors verified site conditions before excavation, layout and build-out begin.",
    services: [
      "surveying-services",
      "geomatics-gis",
      "uav-surveying",
      "subsurface-utility-engineering",
      "utility-mapping-gpr",
      "ql-a-daylighting",
      "concrete-scanning-imaging-coring",
    ],
  },
];

export const getSectorBySlug = (slug) => sectors.find((s) => s.slug === slug);
