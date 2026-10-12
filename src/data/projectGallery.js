// ============================================================
// PROJECT GALLERY DATA
// Curated field photography for the Projects page gallery
// (src/components/sections/ProjectGallery.jsx). Optimized copies of
// originals from the local construction-images/ reference library.
// Purely visual — no project names, clients or locations are
// attached, because the source photos don't identify them.
//   position = CSS object-position used when cropping to the frame
// ============================================================
const DIR = "/images/projects/gallery/";

export const projectGallery = [
  { src: `${DIR}gnss-survey-campus.webp`, alt: "GNSS rover set up over a marked survey point beside an office campus", position: "50% 40%" },
  { src: `${DIR}utility-locate-survey.webp`, alt: "Survey pole on utility locate markings at an urban intersection", position: "50% 50%" },
  { src: `${DIR}gpr-rebar-scan.webp`, alt: "GPR concrete scan display showing a reinforcing bar grid", position: "50% 45%" },
  { src: `${DIR}gnss-roadway-control.webp`, alt: "GNSS rover on a painted control point along a roadway work zone", position: "50% 35%" },
  { src: `${DIR}utility-locate-sidewalk.webp`, alt: "Utility locate paint markings on a sidewalk beside traffic barrels", position: "50% 55%" },
  { src: `${DIR}gnss-sidewalk-survey.webp`, alt: "Survey tripod on a marked point along a city sidewalk", position: "50% 45%" },
  { src: `${DIR}municipal-benchmark.webp`, alt: "Municipal survey benchmark set in concrete, marked in paint", position: "50% 50%" },
  { src: `${DIR}gnss-control-fenced-site.webp`, alt: "GNSS rover over a ground control point beside a fenced work site", position: "50% 45%" },
  { src: `${DIR}concrete-core-hole.webp`, alt: "Clean core-drilled opening through a concrete wall", position: "50% 32%" },
  { src: `${DIR}gnss-control-site-fence.webp`, alt: "Survey rover on a ground control point next to construction fencing", position: "50% 45%" },
];
