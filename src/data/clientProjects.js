// ============================================================
// CLIENT PROJECT EXPERIENCE (/projects)
// Authoritative client-supplied project information. Do not add
// dates, values, descriptions, outcomes or locations that were not
// supplied. Logos are the approved files in public/images/clients/.
//   layout: "featured" (full-width scope list) | "list" (address + service
//   rows) | "single" (one project / scope line)
// ============================================================

export const clientProjects = [
  {
    slug: "skf-canada",
    layout: "featured",
    name: "SKF Canada",
    category: "Facility / Property Maintenance and Management",
    logo: { src: "/images/clients/skf.png", alt: "SKF", width: 484, height: 184, plate: "photo" },
    scopes: [
      "3D Laser Scanning & Scan-to-BIM",
      "As-Built Drawing Sets (Plans, Mechanical and Electrical)",
      "Change of Use / Permitting",
      "Utility Locates",
      "New Construction and Additions in the Warehouse",
      "Concrete Cutting",
      "Concrete Repair",
      "Parking Paving",
      "Siding and Roofing Maintenance",
      "Warehouse Lighting",
      "Door and Window Installation",
    ],
  },
  {
    slug: "amaz-ontecro",
    layout: "list",
    name: "AMAZ Property Management",
    alsoListed: "Ontecro Ltd.",
    logo: { src: "/images/clients/amaz-property-management.png", alt: "AMAZ Property Management", width: 424, height: 109, plate: "light" },
    items: [
      { location: "15 Cougar Ct, Scarborough", service: "Layout and Surveying Services" },
      { location: "16 Cougar Ct, Scarborough", service: "Utility Locates" },
      { location: "17 Cougar Ct, Scarborough", service: "Concrete Scanning" },
      { location: "18 Cougar Ct, Scarborough", service: "Concrete Coring and Cutting" },
      { location: "19 Cougar Ct, Scarborough", service: "3D Laser Scanning" },
      { location: "20 Cougar Ct, Scarborough", service: "Scan-to-BIM" },
    ],
  },
  {
    slug: "sobro",
    layout: "list",
    name: "Sobro Inc. / Sobro Group Inc.",
    logo: { src: "/images/clients/sobro.png", alt: "Sobro", width: 162, height: 62, plate: "dark" },
    items: [
      { location: "80 Dynamic Drive", service: "3D Laser Scanning" },
      { location: "81 Dynamic Drive", service: "Concrete Coring and Cutting" },
      { location: "82 Dynamic Drive", service: "Scan-to-BIM" },
    ],
  },
  {
    slug: "balhood-contracting",
    layout: "list",
    name: "Balhood Contracting Inc.",
    category: "General Contracting",
    items: [
      { location: "18 Anglesey Blvd", service: "Concrete Scanning and Coring Services" },
      { location: "2535 Bloor St W", service: "Concrete Scanning and Coring Services" },
      { location: "2536 Bloor St W", service: "3D Laser Scanning" },
      { location: "2537 Bloor St W", service: "Concrete Coring and Cutting" },
    ],
  },
  {
    slug: "ellisdon",
    layout: "single",
    name: "EllisDon",
    logo: { src: "/images/clients/ellisdon.png", alt: "EllisDon", width: 265, height: 125, plate: "light" },
    project: "Riverwalk Project – Brampton",
    scope: "Surveying, 3D Laser Scanning & Utilities Survey Services",
  },
  {
    slug: "toronto-hydro",
    layout: "single",
    name: "Toronto Hydro",
    scope: "Concrete Scanning & Concrete Coring and Cutting",
  },
];
