// ============================================================
// TECHNOLOGY DATA
// Drives the Home page "Technology / Intelligence" section, the
// full /technology overview page, and the /technology/:slug detail
// page (src/pages/TechnologyDetail.jsx). This is the vocabulary
// that carries the Option 2 "premium / future-ready / geospatial"
// direction.
//
// Fields:
//   slug          stable id used for the /technology/:slug route
//   icon          lucide-react component name (see src/lib/icons.js)
//   name          card / heading title
//   image         optional photo (falls back to a generated icon
//                 tile via CardMedia when omitted — see the 5
//                 grouped technologies added below, which have no
//                 photography yet)
//   summary       one-line card description
//   description   longer paragraph for the detail page hero
//   capabilities  what AMEng does with this technology
//   applications  where/how it's used on projects
//   relatedServices  service slugs (src/data/services.js) that use
//                    this technology — powers cross-linking
//   featuredOnHome   true on exactly the 8 technologies shown in the
//                    homepage "Technology stack" section. /technology
//                    always renders the full list regardless of this
//                    flag — it only filters the homepage grid.
// ============================================================

export const technologies = [
  {
    slug: "gnss-rtk-surveying",
    icon: "Satellite",
    name: "GNSS / RTK Surveying",
    image: "/images/technology/gnss-rtk-surveying.jpg",
    featuredOnHome: true,
    summary: "Sub-centimetre positioning from multi-constellation receivers.",
    description:
      "GNSS/RTK receivers deliver sub-centimetre, survey-grade positioning in real time by correcting satellite signals against a fixed base station or network. It is the foundation for fast, accurate field data collection across nearly every AMEng service.",
    capabilities: [
      "Real-time kinematic (RTK) sub-centimetre positioning",
      "Rapid horizontal and vertical control establishment",
      "Survey-grade GNSS confirmation of exposed or mapped utilities",
    ],
    applications: [
      "Topographic and construction layout surveys",
      "Control network establishment",
      "QL-A daylighting coordinate verification",
    ],
    relatedServices: ["surveying-services", "geomatics-gis", "uav-surveying", "ql-a-daylighting"],
  },
  {
    slug: "uav-lidar",
    icon: "Plane",
    name: "UAV & LiDAR",
    image: "/images/technology/uav-lidar-capture.jpg",
    featuredOnHome: true,
    summary:
      "Aerial platforms capturing dense point clouds and photogrammetry.",
    description:
      "Fixed-wing and multi-rotor UAV platforms carrying photogrammetry cameras or LiDAR sensors capture dense, accurate terrain and asset data from the air — reducing site exposure while covering large or hard-to-access areas quickly.",
    capabilities: [
      "Aerial photogrammetry and orthomosaic production",
      "UAV LiDAR terrain and asset capture",
      "Rapid coverage of large or restricted-access sites",
    ],
    applications: [
      "Land development and earthworks mapping",
      "Corridor and infrastructure surveys",
      "Construction progress monitoring",
    ],
    relatedServices: ["uav-surveying", "surveying-services"],
  },
  {
    slug: "ground-penetrating-radar",
    icon: "Radar",
    name: "Ground-Penetrating Radar",
    image: "/images/technology/ground-penetrating-radar.png",
    featuredOnHome: true,
    summary:
      "Multi-frequency GPR arrays for utility, void and rebar detection.",
    description:
      "GPR transmits radio-wave pulses into soil, rock, asphalt or concrete and reads the reflections to safely and non-destructively map what lies beneath the surface — including non-metallic utilities that electromagnetic locators can't detect.",
    capabilities: [
      "Detection of metallic and non-metallic subsurface utilities",
      "Concrete scanning for rebar, post-tension cable and voids",
      "Environmental, geological and void/anomaly assessment",
    ],
    applications: [
      "Subsurface utility engineering (QL-B) investigations",
      "Utility mapping before excavation or drilling",
      "Concrete scanning before cutting, coring or drilling",
    ],
    relatedServices: ["subsurface-utility-engineering", "utility-mapping-gpr", "concrete-scanning-imaging-coring"],
  },
  {
    slug: "gis-spatial-analysis",
    icon: "Layers",
    name: "GIS & Spatial Analysis",
    image: "/images/technology/gis-spatial-analysis.png",
    featuredOnHome: true,
    summary: "ArcGIS and QGIS workflows with web-based GIS deliverables.",
    description:
      "GIS and spatial analysis turn field and asset data into structured, queryable systems — supporting infrastructure management, planning and engineering decisions through mapping, geodatabases and proximity, density and network analysis.",
    capabilities: [
      "Custom GIS development and utility database integration",
      "Spatial analysis: proximity, density, network and terrain",
      "Centralized geodatabases for secure, scalable data sharing",
    ],
    applications: [
      "Municipal and utility asset management",
      "Infrastructure planning and capital programs",
      "CAD, GIS and BIM data export and integration",
    ],
    relatedServices: ["geomatics-gis", "utility-mapping-gpr"],
  },
  {
    slug: "bim-digital-twins",
    icon: "Box",
    name: "BIM & Digital Twins",
    image: "/images/technology/bim-digital-twins.jpg",
    featuredOnHome: true,
    summary: "IFC-compatible models, clash detection and digital twins.",
    description:
      "Survey and reality-capture data integrated into BIM workflows and digital twins gives design and asset teams a coordinated, intelligent model of existing and planned conditions — improving clash detection, coordination and lifecycle management.",
    capabilities: [
      "Scan-to-BIM and 3D subsurface modeling",
      "Digital twin synchronization for long-term asset management",
      "Clash detection support and existing conditions modeling",
    ],
    applications: [
      "Design coordination and clash detection",
      "Municipal and corporate digital twin programs",
      "Underground utility 3D modeling",
    ],
    relatedServices: ["geomatics-gis", "utility-mapping-gpr"],
  },
  {
    slug: "cctv-robotics",
    icon: "Video",
    name: "CCTV Robotics",
    image: "/images/technology/cctv-robotics.png",
    featuredOnHome: true,
    summary: "Robotic crawlers for mainline, lateral and manhole inspection.",
    description:
      "Robotic CCTV crawlers inspect gravity sewers, laterals and manholes from the inside, capturing standardized condition data without excavation — the foundation for NASSCO PACP, MACP and LACP-aligned reporting and rehabilitation planning.",
    capabilities: [
      "Internal pipeline, lateral and manhole inspection",
      "NASSCO PACP / MACP / LACP condition coding",
      "Condition data conversion into asset management intelligence",
    ],
    applications: [
      "Sewer and storm network condition assessment",
      "Rehabilitation and capital planning prioritization",
      "Asset management system integration",
    ],
    relatedServices: ["cctv-sewer-inspection"],
  },
  {
    slug: "cloud-based-data-delivery",
    icon: "CloudCog",
    name: "Cloud-Based Data Delivery",
    image: "/images/technology/cloud-based-data-delivery.jpeg",
    featuredOnHome: true,
    summary: "Secure portals with real-time field data sync.",
    description:
      "Cloud-based portals and dashboards sync field data in near real time, giving clients and project teams secure, remote access to survey results, inspection reports and monitoring data as soon as it's collected.",
    capabilities: [
      "Secure client portals with real-time sync",
      "Cloud-based dashboards for construction and monitoring data",
      "Remote access to reports, models and condition data",
    ],
    applications: [
      "Construction progress and structural monitoring",
      "Remote review of inspection and survey deliverables",
      "Field-to-office data governance",
    ],
    relatedServices: ["uav-surveying"],
  },
  {
    slug: "point-cloud-processing",
    icon: "Scan",
    name: "Point Cloud Processing",
    image: "/images/technology/point-cloud-processing.png",
    featuredOnHome: true,
    summary: "Reality-capture processing for scan-to-BIM and scan-to-CAD.",
    description:
      "Laser scanning, UAV and mobile LiDAR all produce dense point clouds — millions of measured 3D points. Point cloud processing turns that raw capture into clean, usable scan-to-BIM and scan-to-CAD deliverables for design and engineering teams.",
    capabilities: [
      "Terrestrial, mobile and UAV LiDAR point cloud processing",
      "Scan-to-BIM and scan-to-CAD conversion",
      "Photogrammetry data processing and 3D modeling",
    ],
    applications: [
      "Existing conditions modeling and clash detection",
      "UAV photogrammetry and LiDAR deliverables",
      "Underground utility 3D data processing",
    ],
    relatedServices: ["geomatics-gis", "uav-surveying", "utility-mapping-gpr"],
  },
  {
    slug: "robotic-total-stations",
    icon: "Crosshair",
    name: "Robotic Total Stations",
    summary: "Automated, self-tracking instruments for continuous layout and monitoring.",
    description:
      "Robotic total stations track a prism automatically, allowing a single operator to run continuous, high-precision positioning for construction layout, structural monitoring and progress tracking — improving repeatable accuracy while reducing crew size and time on site.",
    capabilities: [
      "Automated prism tracking and single-operator control",
      "Continuous structural and deformation monitoring",
      "High-precision construction layout and staking",
    ],
    applications: [
      "Construction layout and staking",
      "Structural and deformation monitoring",
      "Real-time construction progress tracking",
    ],
    relatedServices: ["surveying-services", "uav-surveying"],
  },
  {
    slug: "slam-mobile-mapping",
    icon: "MapPinned",
    name: "SLAM & Mobile Mapping",
    summary: "GPS-independent 3D capture for fast, in-motion mobile mapping.",
    description:
      "SLAM (Simultaneous Localization and Mapping) enables mobile scanners to capture dense, georeferenced 3D point clouds while moving through an environment — including indoor spaces, dense vegetation and other areas where GNSS signals are weak or unavailable.",
    capabilities: [
      "GPS-independent 3D positioning and mapping",
      "High-density point cloud capture while in motion",
      "Indoor and obstructed-environment data collection",
    ],
    applications: [
      "UAV and terrestrial LiDAR capture under vegetation cover",
      "Indoor and underground mobile mapping",
      "Rapid corridor and infrastructure capture",
    ],
    relatedServices: ["uav-surveying", "geomatics-gis"],
  },
  {
    slug: "thermal-imaging-reality-capture",
    icon: "Thermometer",
    name: "Thermal Imaging & Reality Capture",
    summary: "Thermal and 360-degree imaging for non-invasive inspection.",
    description:
      "Thermal imaging identifies temperature anomalies in structures, utilities and equipment, while 360-degree reality capture produces immersive, navigable records of site conditions — together supporting safer, faster and more complete asset inspections.",
    capabilities: [
      "Thermal anomaly detection on structures and utilities",
      "360-degree immersive site documentation",
      "Non-invasive, remote inspection workflows",
    ],
    applications: [
      "Building, bridge and utility inspections",
      "Industrial asset condition assessment",
      "Immersive as-built and site documentation",
    ],
    relatedServices: ["uav-surveying"],
  },
  {
    slug: "ai-assisted-data-processing",
    icon: "Sparkles",
    name: "AI-Assisted Data Processing",
    summary: "Machine-learning-driven processing for faster, more consistent data.",
    description:
      "AI-assisted processing accelerates photogrammetry, point cloud classification and inspection image analytics — automating feature extraction and defect detection to shorten turnaround time and improve consistency across large datasets.",
    capabilities: [
      "Automated feature extraction and classification",
      "AI-powered inspection image analytics",
      "Faster photogrammetry and point cloud processing",
    ],
    applications: [
      "UAV photogrammetry and LiDAR processing",
      "Automated defect detection in inspections",
      "Large-dataset point cloud classification",
    ],
    relatedServices: ["uav-surveying", "geomatics-gis"],
  },
  {
    slug: "iot-connected-field-monitoring",
    icon: "Radio",
    name: "IoT & Connected Field Monitoring",
    summary: "Connected sensors and dashboards for real-time site monitoring.",
    description:
      "IoT sensors and cloud-based dashboards provide continuous, real-time monitoring of construction progress, structural movement and site conditions — connecting field data directly to project teams for faster, better-informed decisions.",
    capabilities: [
      "Real-time structural and site condition monitoring",
      "Cloud-based dashboards and remote data access",
      "Connected field sensors for hazard and progress tracking",
    ],
    applications: [
      "Construction progress and structural monitoring",
      "Remote site condition tracking",
      "Connected safety and hazard monitoring",
    ],
    relatedServices: ["uav-surveying"],
  },
];

export const getTechnologyBySlug = (slug) => technologies.find((t) => t.slug === slug);

// Used on the homepage "Digital deliverables" section — the tangible
// file / data outputs a client actually receives.
export const deliverables = [
  "2D Utility CAD",
  "3D Utility Models",
  "GIS Shape Files",
  "Point Clouds",
  "Scan-to-BIM",
  "PACP Reports",
  "CCTV Condition Data",
  "QL Metadata",
  "Clash Detection",
  "Cloud Portal Access",
];
