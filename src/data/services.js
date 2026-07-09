// ============================================================
// SERVICES DATA
// Single source of truth for every service card and service detail
// page. Add/edit a service here and it automatically appears in:
//   - the Header "Services" dropdown (src/data/navigation.js reads it)
//   - the Home page services grid
//   - /services overview page
//   - /services/:slug detail page (src/pages/ServiceDetail.jsx)
// Icons reference lucide-react component names (see cards/ServiceCard.jsx
// for how the string is mapped back to a component).
// ============================================================

export const services = [
  {
    slug: "surveying-services",
    order: 1,
    icon: "Compass",
    name: "Surveying Services",
    summary:
      "Topographic, control network, construction layout and as-built surveys that give every project a precise, verifiable baseline.",
    heroStatement:
      "Field-verified survey data that engineering, design and construction teams can build on with confidence.",
    scope: [
      "Topographic Surveys — existing ground features, elevations, structures, vegetation, utilities and terrain",
      "Existing Conditions Surveys — accurate baselines before design or construction",
      "Control Networks — horizontal and vertical control across all project phases",
      "Construction Layout & Staking — engineering design transferred to field coordinates",
      "Corridor, Rail & Transportation Surveys — roads, highways, transit, rail and utility corridors",
      "Infrastructure Surveys — municipal and industrial water, sewer and utility assets",
      "As-Built Surveys — verification of completed infrastructure against design intent",
      "Monitoring & Deformation Surveys — high-precision detection of movement or settlement",
    ],
    otherServices: [
      "Legal & Boundary Surveys",
      "Subdivision Surveys",
      "Condominium Surveys",
      "Site Plan Surveys",
      "Right-of-Way Surveys",
      "Development Surveys",
    ],
    technology: ["GNSS / RTK receivers", "Robotic total stations", "UAV photogrammetry"],
    sectors: ["municipal-infrastructure", "transportation", "land-development", "utilities"],
  },
  {
    slug: "geomatics-gis",
    order: 2,
    icon: "Layers",
    name: "Geomatics & GIS",
    summary:
      "GNSS/RTK positioning, GIS development and laser scanning that turn field data into intelligent, connected digital environments.",
    heroStatement:
      "Spatial systems and reality-capture data that link field conditions to design, GIS and asset management platforms.",
    scope: [
      "GNSS / RTK Surveys — high-accuracy satellite-based positioning for rapid data collection",
      "GIS Development — geospatial systems for infrastructure and asset management",
      "Utility GIS Integration — utility databases linking spatial and asset information",
      "Spatial Analysis — advanced interpretation of geospatial data for engineering decisions",
      "Laser Scanning & Reality Capture — terrestrial laser scanning, mobile LiDAR, 3D scanning",
      "Scan-to-BIM — building documentation, industrial facility scanning, heritage documentation",
      "Clash Detection Support & Existing Conditions Modeling",
      "Digital Twins & BIM Integration — field data connected to intelligent digital environments",
    ],
    technology: ["GNSS / RTK", "Terrestrial & mobile LiDAR", "Esri ArcGIS, QGIS", "Scan-to-BIM workflows"],
    sectors: ["municipal-infrastructure", "industrial-facilities", "land-development", "utilities"],
  },
  {
    slug: "uav-surveying",
    order: 3,
    icon: "Plane",
    name: "UAV Surveying",
    summary:
      "Aerial photogrammetry, orthomosaic production and UAV LiDAR that capture large or hard-to-access sites quickly and safely.",
    heroStatement:
      "Remote aerial capture that reduces site exposure while delivering survey-grade mapping and inspection data.",
    scope: [
      "Photogrammetry — accurate maps and measurements from aerial imagery",
      "Orthomosaic Production — georeferenced imagery for engineering and planning",
      "UAV LiDAR — high-density aerial scanning for terrain and asset capture",
      "Construction Monitoring — periodic aerial progress reporting and documentation",
      "Asset Inspection — remote inspection that reduces site exposure and access constraints",
      "Volume & Quantity Calculations — stockpile, excavation and earthworks quantities",
    ],
    technology: ["Fixed-wing & multi-rotor UAV platforms", "UAV LiDAR", "Photogrammetry processing"],
    sectors: ["transportation", "energy", "land-development", "airports"],
  },
  {
    slug: "subsurface-utility-engineering",
    order: 4,
    icon: "Radar",
    name: "Subsurface Utility Engineering",
    summary:
      "ASCE 38-22 and CSA S250-aligned QL-D through QL-A investigations that locate, identify and map buried utilities before they become project risk.",
    heroStatement:
      "A structured, standards-based approach to underground risk — from desktop records to positive physical verification.",
    scope: [
      "Quality Level D (QL-D) — Desktop Records: collection and review of historical utility records and municipal CAD files",
      "Quality Level C (QL-C) — Visual Field Survey: correlating records with visible surface features like manholes and valve boxes",
      "Quality Level B (QL-B) — Geophysical Detection: GPR and electromagnetic locating to mark horizontal utility position",
      "Quality Level A (QL-A) — Precise Daylighting: non-destructive excavation for exact X, Y, Z utility verification",
    ],
    standards: ["ASCE 38-22", "CSA S250"],
    technology: ["Ground Penetrating Radar", "Electromagnetic (EM) locators", "Vacuum excavation"],
    sectors: ["municipal-infrastructure", "utilities", "transportation", "energy"],
  },
  {
    slug: "utility-mapping-gpr",
    order: 5,
    icon: "ScanLine",
    name: "Utility Mapping & GPR",
    summary:
      "Ground Penetrating Radar and geophysical detection converted into CAD, GIS and BIM-ready digital utility maps.",
    heroStatement:
      "We bridge field geophysics and the design office — turning subsurface signals into precise, permanent spatial records.",
    scope: [
      "Geospatial & CAD Integration — 2D and 3D utility layouts in AutoCAD (.dwg), MicroStation (.dgn) and GIS shapefiles",
      "3D Subsurface Modeling (BIM) — utility data as true architectural objects with volume and clearance data",
      "Digital Twin Synchronization — mapped assets integrated into live municipal or corporate digital twins",
      "ASCE 38-22 Attribute Tagging — verified SUE Quality Level, positional accuracy and material data on every line",
    ],
    applications: [
      "Underground Utility Locating — water, gas, electrical and telecommunication lines before excavation",
      "Concrete Scanning — rebar, post-tension cable, conduit and void identification before cutting or coring",
      "Environmental & Geological Assessment — underground storage tanks, landfill limits, soil anomalies",
      "Archaeology & Void Detection — unmarked burial sites, buried foundations, structural voids and sinkholes",
    ],
    technology: ["Multi-frequency GPR arrays", "3D data processing", "CAD / GIS / BIM export"],
    sectors: ["municipal-infrastructure", "utilities", "energy", "telecommunications"],
  },
  {
    slug: "ql-a-daylighting",
    order: 6,
    icon: "ShieldCheck",
    name: "QL-A Daylighting",
    summary:
      "Non-destructive hydro and air vacuum excavation that physically exposes buried utilities for 100% positive verification.",
    heroStatement:
      "The highest level of subsurface certainty — utilities exposed, measured and recorded in true three-dimensional space.",
    scope: [
      "Hydro Vacuum Excavation — non-destructive excavation to safely expose underground infrastructure",
      "Air Vacuum Excavation — compressed-air excavation for selective utility exposure",
      "Utility Verification — confirmation of utility type, size, material and location",
      "Critical Crossing Investigation — detailed investigation of conflicts in high-risk areas",
      "Survey Integration — surveyed utility coordinates tied into engineering records",
    ],
    standards: ["ASCE 38-22", "CSA S250"],
    technology: ["Hydro vacuum excavation units", "Air vacuum excavation", "Survey-grade GNSS confirmation"],
    sectors: ["municipal-infrastructure", "transportation", "utilities", "land-development"],
  },
  {
    slug: "cctv-sewer-inspection",
    order: 7,
    icon: "Video",
    name: "CCTV Sewer Inspection",
    summary:
      "NASSCO PACP, MACP and LACP-aligned pipeline, manhole and lateral inspection for condition assessment and asset planning.",
    heroStatement:
      "Robotic inspection and standardized condition coding that turns pipe network data into capital-planning intelligence.",
    scope: [
      "Gravity Sewer Inspection — internal inspection using crawler camera technologies",
      "Storm & Sanitary Assessment — operational and structural assessment of underground networks",
      "PACP Program — standardized defect coding and condition assessment for pipelines",
      "MACP Program — inspection and grading methodology for manholes",
      "LACP Program — assessment methodology for lateral connections",
      "Rehabilitation Prioritization — repair and renewal recommendations based on condition data",
      "Asset Management Integration — inspection data converted into lifecycle and capital planning intelligence",
    ],
    standards: ["NASSCO PACP", "NASSCO MACP", "NASSCO LACP"],
    technology: ["Robotic CCTV crawlers", "Condition-coding software", "Asset management integration"],
    sectors: ["water-wastewater", "municipal-infrastructure", "transit"],
  },
  {
    slug: "concrete-scanning-imaging-coring",
    order: 8,
    icon: "ScanSearch",
    name: "Concrete Scanning, Imaging & Coring",
    summary:
      "GPR concrete scanning, rebar and conduit locating, thickness assessment and diamond coring for safe, precise cutting.",
    heroStatement:
      "Environmentally safe GPR imaging that protects structural integrity before a single cut, core or drill is made.",
    scope: [
      "Concrete Scanning and Imaging — GPR interpretation of hidden elements within structures",
      "Rebar Locating — mapping rebar within slabs and concrete structures to protect structural integrity",
      "Conduit Mapping — marking GPR findings directly on the slab before cutting or coring",
      "Concrete Thickness Assessment — cover, overlay thickness, slab thickness and dowel placement",
      "Concrete Coring Services — diamond coring and cutting with precision equipment",
    ],
    technology: ["Ground Penetrating Radar", "Diamond coring equipment"],
    sectors: ["industrial-facilities", "transportation", "land-development", "airports"],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
