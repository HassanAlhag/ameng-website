import { getSectorBySlug } from "../../data/sectors";
import { getServiceBySlug } from "../../data/services";

// ============================================================
// ProjectCard
// One capability-preview tile from src/data/projects.js. Uses an
// image overlay (gradient + tags on top of the photo) rather than
// a plain image block, per the design brief. See projects.js for
// why these are labelled "Representative capability" rather than
// claimed as specific completed case studies.
// ============================================================
export default function ProjectCard({ project }) {
  const sector = getSectorBySlug(project.sector);
  const service = getServiceBySlug(project.service);

  return (
    <article className="group relative overflow-hidden rounded-[10px] border border-line bg-navy shadow-[var(--shadow-card)]">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Light top-only scrim, just enough to keep the badge legible —
            the photo itself stays fully visible rather than washed out. */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-transparent to-transparent" aria-hidden="true" />
        <span className="font-data absolute left-4 top-4 rounded bg-ink-950/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange backdrop-blur-sm">
          Representative capability
        </span>
      </div>
      <div className="p-5">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {sector && (
            <span className="rounded bg-ink-600/80 px-2 py-0.5 text-[10.5px] font-semibold text-white">
              {sector.name}
            </span>
          )}
          {service && (
            <span className="rounded bg-orange/90 px-2 py-0.5 text-[10.5px] font-semibold text-navy">
              {service.name}
            </span>
          )}
        </div>
        <h3 className="text-[16px] font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-haze">{project.summary}</p>
      </div>
    </article>
  );
}
