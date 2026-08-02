import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import CardMedia from "./CardMedia";

// ============================================================
// TechnologyCard
// Dark-surface card for one entry from src/data/technologies.js.
// Used on the Home page technology strip and the /technology page.
// Links through to /technology/:slug when the entry has a slug.
// ============================================================
export default function TechnologyCard({ tech, index = 0 }) {
  return (
    <Link
      to={tech.slug ? `/technology/${tech.slug}` : "/technology"}
      className="group relative flex flex-col overflow-hidden rounded-[10px] border border-white/10 bg-white/[0.03] transition-all duration-200 hover:-translate-y-1 hover:border-orange/40 hover:bg-white/[0.06]"
    >
      <CardMedia image={tech.image} icon={tech.icon} index={index} alt={tech.name} />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="min-h-[2.5em] text-[16px] font-bold leading-tight text-white">{tech.name}</h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-haze">{tech.summary}</p>
        <div className="mt-5 flex items-center gap-1 text-[13px] font-semibold text-orange">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
        </div>
      </div>
    </Link>
  );
}
