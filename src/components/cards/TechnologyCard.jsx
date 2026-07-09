import Icon from "../../lib/icons";

// ============================================================
// TechnologyCard
// Dark-surface card for one entry from src/data/technologies.js.
// Used on the Home page technology strip and the /technology page.
// ============================================================
export default function TechnologyCard({ tech }) {
  return (
    <div className="group relative overflow-hidden rounded-[10px] border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-orange/40 hover:bg-white/[0.06]">
      <div className="bg-points pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <div className="relative">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-orange/30 bg-orange/10 text-orange">
          <Icon name={tech.icon} className="h-5 w-5" />
        </div>
        <h3 className="mt-5 text-[16px] font-bold text-white">{tech.name}</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-haze">{tech.summary}</p>
      </div>
    </div>
  );
}
