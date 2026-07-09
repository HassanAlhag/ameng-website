import Icon from "../../lib/icons";

// ============================================================
// IndustryCard
// The small "chip" cards for the Industries Served section
// (src/data/industries.js). Styled for the dark Option 2 theme
// per the client's request to reuse Option 3 content here.
// ============================================================
export default function IndustryCard({ industry }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-4 transition-colors duration-200 hover:border-orange/40 hover:bg-white/[0.07]">
      <Icon name={industry.icon} className="h-5 w-5 shrink-0 text-orange" />
      <span className="text-[14px] font-semibold text-white">{industry.name}</span>
    </div>
  );
}
