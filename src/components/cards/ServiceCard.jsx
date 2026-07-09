import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Icon from "../../lib/icons";

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
      className="group relative flex flex-col overflow-hidden rounded-[10px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-orange/40 hover:bg-white/[0.06]"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-orange/25 bg-orange/10 text-orange">
          <Icon name={service.icon} className="h-5 w-5" />
        </div>
        {/* Decorative index numeral only — the real label is the <h3> below. */}
        <span className="font-data text-xs text-white/20 group-hover:text-orange/50" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-5 text-[17px] font-bold text-white">{service.name}</h3>
      <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-haze">{service.summary}</p>
      <div className="mt-5 flex items-center gap-1 text-[13px] font-semibold text-orange">
        Learn more
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
      </div>
    </Link>
  );
}
