import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import CardMedia from "./CardMedia";

// ============================================================
// ServiceCard
// Renders one entry from src/data/services.js. Used on the Home
// page services grid and the /services overview page — mapped
// from the array, never hand-written per card. Styled as a dark
// glass panel to match the Option 2 all-dark page theme.
// ============================================================
export default function ServiceCard({ service, index }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[10px] border border-white/10 bg-white/[0.03] transition-all duration-200 hover:-translate-y-1 hover:border-orange/40 hover:bg-white/[0.06]"
    >
      <CardMedia image={service.image} icon={service.icon} index={index} alt={service.name} />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="min-h-[2.5em] text-[17px] font-bold leading-tight text-white">{service.name}</h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-haze">{service.summary}</p>
        <div className="mt-5 flex items-center gap-1 text-[13px] font-semibold text-orange">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
        </div>
      </div>
    </Link>
  );
}
