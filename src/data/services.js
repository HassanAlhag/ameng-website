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
    image: "/images/roadway-layout-marking.png",
    summary: "Topographic, control network, layout and as-built surveys.",
    heroStatement:
      "Field-verified survey data that engineering, design and construction teams can build on with confidence.",
    scopeIntroduction: [
      "AMEng's surveying services provide the field-verified spatial data every infrastructure project depends on, from early site investigation and land development through construction and long-term asset management. Municipal, transportation, utility and private development clients rely on these surveys to establish accurate baselines before design begins, confirm construction matches engineering intent, and document legal boundaries and rights-of-way for property transactions and regulatory approval. Because design decisions and construction schedules are only as reliable as the survey data behind them, accuracy at this stage directly reduces downstream risk and rework.",
      "AMEng combines GNSS/RTK positioning, robotic total stations and UAV photogrammetry with licensed survey expertise to deliver the accuracy each project phase requires, from control through survey-grade layout and as-built verification. Our surveyors support the full project lifecycle — guiding planning and permitting with legal and boundary surveys, directing construction with precise staking, and closing out projects with as-built and monitoring surveys that verify performance over time. Every deliverable is documented to the standard engineering design, construction or legal registration requires, giving clients a dependable record they can build on with confidence.",
    ],
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
    otherServicesTitle: "Specialized Survey Services",
    otherServices: [
      {
        title: "Legal Surveys",
        description:
          "Determines and documents property boundaries, easements, rights-of-way and other legal interests in land for property transactions and dispute resolution.",
      },
      {
        title: "Boundary Surveys",
        description:
          "Establishes exact property limits by locating and verifying corners and boundary lines to prevent encroachments and resolve disputes.",
      },
      {
        title: "Subdivision Surveys",
        description:
          "Divides larger parcels into lots, blocks, roads and easements in accordance with municipal planning and regulatory requirements.",
      },
      {
        title: "Condominium Surveys",
        description:
          "Defines the legal boundaries of individual units, common elements and exclusive-use areas for condominium registration and development approvals.",
      },
      {
        title: "Site Plan Surveys",
        description:
          "Documents existing site conditions — boundaries, buildings, utilities, elevations and access points — to support design, permitting and development applications.",
      },
      {
        title: "Right-of-Way Surveys",
        description:
          "Identifies and defines public or private rights-of-way, easements and access corridors for roads, utilities, railways and pipelines.",
      },
      {
        title: "Development Surveys",
        description:
          "Combines boundary, topographic, utility and legal data to support land development from planning through construction.",
      },
    ],
    technology: [
      { label: "GNSS / RTK receivers", slug: "gnss-rtk-surveying" },
      { label: "Robotic total stations", slug: "robotic-total-stations" },
      { label: "UAV photogrammetry", slug: "uav-lidar" },
    ],
    sectors: ["municipal-infrastructure", "transportation", "land-development", "utilities"],
  },
  {
    slug: "geomatics-gis",
    order: 2,
    icon: "Layers",
    name: "Geomatics & GIS",
    image: "/images/geomatics-site-review.jpg",
    summary: "GNSS/RTK positioning, GIS development and laser scanning.",
    heroStatement:
      "Spatial systems and reality-capture data that link field conditions to design, GIS and asset management platforms.",
    scopeIntroduction: [
      "AMEng's geomatics and GIS services turn field-collected spatial data into structured, decision-ready systems for municipal, utility, industrial and land development clients managing infrastructure across large, complex portfolios. An individual survey captures a single site at a single point in time; geomatics and GIS connect that data into a living system that supports long-term planning, asset inventory and informed decision-making rather than one-off deliverables. For organizations managing thousands of assets across a network, organized and accessible spatial information is what makes proactive infrastructure management possible.",
      "Our approach combines GNSS/RTK positioning, terrestrial and mobile laser scanning, and centralized geodatabases with GIS platforms such as Esri ArcGIS and QGIS, converting reality-capture data into scan-to-BIM models, digital twins and structured spatial databases. AMEng supports clients from initial data capture through GIS development and ongoing digital twin synchronization, so spatial information stays accurate and useful long after the field work is complete — a coordinated, engineering-grade record connecting field conditions directly to the design and asset management platforms clients already use.",
    ],
    scope: [
      "GNSS / RTK Surveys — high-accuracy satellite-based positioning for rapid data collection",
      "GIS Development — geospatial systems for infrastructure and asset management",
      "Utility GIS Integration — utility databases linking spatial and asset information",
      "Spatial Analysis — advanced interpretation of geospatial data for engineering decisions",
      "Laser Scanning & Reality Capture — terrestrial laser scanning, mobile LiDAR, 3D scanning",
      "Scan-to-BIM — building documentation, industrial facility scanning, heritage documentation",
      "Clash Detection Support & Existing Conditions Modeling",
      "Digital Twins & BIM Integration — field data connected to intelligent digital environments",
      "Geodatabases — centralized, structured geospatial data storage and management for accurate, scalable GIS and engineering integration",
    ],
    otherServicesTitle: "Specialized Geomatics & GIS Services",
    otherServices: [
      {
        title: "Building Documentation",
        description:
          "High-definition scan-to-BIM documentation of existing buildings, capturing accurate as-built conditions for renovation, retrofit and facility management projects.",
      },
      {
        title: "Industrial Facility Scanning",
        description:
          "Detailed 3D scanning of industrial facilities and process plants, supporting retrofit design and clash detection without disrupting ongoing operations.",
      },
      {
        title: "Heritage Documentation",
        description:
          "Precise laser scanning and reality capture for heritage and historic structures, preserving accurate digital records for conservation and restoration work.",
      },
    ],
    technology: [
      { label: "GNSS / RTK", slug: "gnss-rtk-surveying" },
      { label: "Terrestrial & mobile LiDAR", slug: "point-cloud-processing" },
      { label: "Esri ArcGIS, QGIS", slug: "gis-spatial-analysis" },
      { label: "Scan-to-BIM workflows", slug: "bim-digital-twins" },
    ],
    sectors: ["municipal-infrastructure", "industrial-facilities", "land-development", "utilities"],
  },
  {
    slug: "uav-surveying",
    order: 3,
    icon: "Plane",
    name: "UAV Surveying",
    image: "/images/uav-site-overview.jpg",
    summary: "Aerial photogrammetry, orthomosaics and UAV LiDAR capture.",
    heroStatement:
      "Remote aerial capture that reduces site exposure while delivering survey-grade mapping and inspection data.",
    scopeIntroduction: [
      "AMEng's UAV surveying services deliver aerial data for land development, infrastructure, energy and transportation projects where large areas, difficult terrain or safety concerns make conventional ground survey slower or riskier than it needs to be. Clients use UAV capture to map sites, monitor construction progress and inspect assets such as bridges, utilities and industrial facilities without placing crews in hazardous or hard-to-access locations. Because drones cover large areas quickly and repeatably, UAV surveying gives project teams frequent, up-to-date data that supports faster decisions than periodic ground surveys typically allow.",
      "AMEng combines fixed-wing and multi-rotor UAV platforms with RTK/PPK GNSS, LiDAR, thermal imaging and AI-assisted processing to produce survey-grade orthomosaics, point clouds and volume calculations alongside 360-degree reality capture and cloud-based reporting. This technology stack supports the full project lifecycle — from early site mapping through periodic construction monitoring and post-construction inspection — with data delivered through cloud dashboards clients can access as soon as it's processed. The result is engineering-grade accuracy delivered faster and with less site exposure than conventional methods.",
    ],
    scope: [
      "Photogrammetry — accurate maps and measurements from aerial imagery",
      "Orthomosaic Production — georeferenced imagery for engineering and planning",
      "UAV LiDAR — high-density aerial scanning for terrain and asset capture",
      "Construction Monitoring — periodic aerial progress reporting and documentation",
      "Asset Inspection — remote inspection that reduces site exposure and access constraints",
      "Volume & Quantity Calculations — stockpile, excavation and earthworks quantities",
    ],
    otherServicesTitle: "Specialized UAV Services",
    otherServices: [
      {
        title: "Bridge & Structure Inspection",
        description:
          "UAV-based visual and thermal inspection of bridges and structures, reaching areas that are difficult or hazardous to access from the ground.",
      },
      {
        title: "Utility & Transportation Network Inspection",
        description:
          "Aerial inspection of utility corridors and transportation infrastructure, identifying deficiencies and supporting maintenance planning with minimal disruption.",
      },
      {
        title: "Industrial Asset Inspection",
        description:
          "Remote inspection of industrial facilities and assets using UAVs, reducing safety risk while capturing high-resolution condition data for maintenance decisions.",
      },
    ],
    technology: [
      { label: "Fixed-wing & multi-rotor UAV platforms", slug: "uav-lidar" },
      { label: "UAV LiDAR", slug: "uav-lidar" },
      { label: "Photogrammetry processing", slug: "point-cloud-processing" },
      { label: "RTK/PPK GNSS", slug: "gnss-rtk-surveying" },
      { label: "SLAM (Simultaneous Localization and Mapping)", slug: "slam-mobile-mapping" },
      { label: "AI-assisted processing", slug: "ai-assisted-data-processing" },
      { label: "Robotic total stations", slug: "robotic-total-stations" },
      { label: "IoT sensors", slug: "iot-connected-field-monitoring" },
      { label: "Cloud-based dashboards", slug: "cloud-based-data-delivery" },
      { label: "360° reality capture", slug: "thermal-imaging-reality-capture" },
      { label: "Thermal imaging", slug: "thermal-imaging-reality-capture" },
    ],
    sectors: ["transportation", "energy", "land-development", "airports"],
  },
  {
    slug: "subsurface-utility-engineering",
    order: 4,
    icon: "Radar",
    name: "Subsurface Utility Engineering",
    image: "/images/gpr-scan-readout.png",
    summary: "ASCE 38-22 / CSA S250-aligned QL-D through QL-A investigations.",
    heroStatement:
      "A structured, standards-based approach to underground risk — from desktop records to positive physical verification.",
    scope: [
      "Quality Level D (QL-D) — Desktop Records: collection and review of historical utility records and municipal CAD files",
      "Quality Level C (QL-C) — Visual Field Survey: correlating records with visible surface features like manholes and valve boxes",
      "Quality Level B (QL-B) — Geophysical Detection: GPR and electromagnetic locating to mark horizontal utility position",
      "Quality Level A (QL-A) — Precise Daylighting: non-destructive excavation for exact X, Y, Z utility verification",
    ],
    standards: ["ASCE 38-22", "CSA S250"],
    technology: [
      { label: "Ground Penetrating Radar", slug: "ground-penetrating-radar" },
      "Electromagnetic (EM) locators",
      "Vacuum excavation",
    ],
    sectors: ["municipal-infrastructure", "utilities", "transportation", "energy"],
  },
  {
    slug: "utility-mapping-gpr",
    order: 5,
    icon: "ScanLine",
    name: "Utility Mapping & GPR",
    image: "/images/utility-mapping-cad.png",
    summary: "GPR and geophysical detection mapped into CAD, GIS and BIM.",
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
    technology: [
      { label: "Multi-frequency GPR arrays", slug: "ground-penetrating-radar" },
      { label: "3D data processing", slug: "point-cloud-processing" },
      { label: "CAD / GIS / BIM export", slug: "gis-spatial-analysis" },
    ],
    sectors: ["municipal-infrastructure", "utilities", "energy", "telecommunications"],
  },
  {
    slug: "ql-a-daylighting",
    order: 6,
    icon: "ShieldCheck",
    name: "QL-A Daylighting",
    image: "/images/concrete-drilling-coring.png",
    summary: "Non-destructive vacuum excavation for positive utility verification.",
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
    technology: [
      "Hydro vacuum excavation units",
      "Air vacuum excavation",
      { label: "Survey-grade GNSS confirmation", slug: "gnss-rtk-surveying" },
    ],
    sectors: ["municipal-infrastructure", "transportation", "utilities", "land-development"],
  },
  {
    slug: "cctv-sewer-inspection",
    order: 7,
    icon: "Video",
    name: "CCTV Sewer Inspection",
    image: "/images/sewer-manhole-inspection.png",
    summary: "NASSCO PACP/MACP/LACP-aligned pipeline and manhole inspection.",
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
    technology: [
      { label: "Robotic CCTV crawlers", slug: "cctv-robotics" },
      "Condition-coding software",
      "Asset management integration",
    ],
    sectors: ["water-wastewater", "municipal-infrastructure", "transit"],
  },
  {
    slug: "concrete-scanning-imaging-coring",
    order: 8,
    icon: "ScanSearch",
    name: "Concrete Scanning, Imaging & Coring",
    image: "/images/concrete-coring.png",
    summary: "GPR concrete scanning, rebar locating and diamond coring.",
    heroStatement:
      "Environmentally safe GPR imaging that protects structural integrity before a single cut, core or drill is made.",
    scope: [
      "Concrete Scanning and Imaging — GPR interpretation of hidden elements within structures",
      "Rebar Locating — mapping rebar within slabs and concrete structures to protect structural integrity",
      "Conduit Mapping — marking GPR findings directly on the slab before cutting or coring",
      "Concrete Thickness Assessment — cover, overlay thickness, slab thickness and dowel placement",
      "Concrete Coring Services — diamond coring and cutting with precision equipment",
    ],
    technology: [
      { label: "Ground Penetrating Radar", slug: "ground-penetrating-radar" },
      "Diamond coring equipment",
    ],
    sectors: ["industrial-facilities", "transportation", "land-development", "airports"],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
