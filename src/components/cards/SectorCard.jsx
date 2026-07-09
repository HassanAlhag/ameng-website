import { Link } from "react-router-dom";
import Icon from "../../lib/icons";

// ============================================================
// SectorCard
// Renders one entry from src/data/sectors.js. Used on the Home
// page sector strip and the /sectors overview page. Dark glass
// panel with a left accent bar, consistent with the site's
// all-dark Option 2 theme.
// ============================================================
export default function SectorCard({ sector }) {
  return (
    <Link
      to={`/sectors/${sector.slug}`}
      className="group flex flex-col gap-3 rounded-[10px] border-y border-r border-l-4 border-y-white/10 border-r-white/10 border-l-white/20 bg-white/[0.03] p-5 transition-colors duration-200 hover:border-l-orange hover:bg-white/[0.06]"
    >
      <Icon name={sector.icon} className="h-5 w-5 text-orange" />
      <h3 className="text-[15px] font-bold text-white">{sector.name}</h3>
      <p className="text-[13px] leading-relaxed text-haze">{sector.summary}</p>
    </Link>
  );
}
