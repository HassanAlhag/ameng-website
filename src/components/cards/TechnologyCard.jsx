import CardMedia from "./CardMedia";

// ============================================================
// TechnologyCard
// Dark-surface card for one entry from src/data/technologies.js.
// Used on the Home page technology strip and the /technology page.
// ============================================================
export default function TechnologyCard({ tech, index = 0 }) {
  return (
    <div className="group relative overflow-hidden rounded-[10px] border border-white/10 bg-white/[0.03] transition-colors duration-200 hover:border-orange/40 hover:bg-white/[0.06]">
      <CardMedia image={tech.image} icon={tech.icon} index={index} alt={tech.name} />
      <div className="p-6">
        <h3 className="min-h-[2.5em] text-[16px] font-bold leading-tight text-white">{tech.name}</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-haze">{tech.summary}</p>
      </div>
    </div>
  );
}
