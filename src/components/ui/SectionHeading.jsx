// ============================================================
// SectionHeading
// The "eyebrow label + H2 + optional supporting copy" pattern
// repeated at the top of nearly every homepage/page section.
//   tone: "dark" for content sitting on a navy/black background,
//         "light" (default) for content on white/cloud backgrounds.
//   align: "left" (default) | "center"
// ============================================================
export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className = "",
}) {
  const isDark = tone === "dark";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <div
          className={`font-data mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
            align === "center" ? "justify-center" : ""
          } ${isDark ? "text-orange" : "text-orange"}`}
        >
          <span className="h-[2px] w-6 bg-orange" aria-hidden="true" />
          {eyebrow}
        </div>
      )}
      <h2 className={isDark ? "text-white" : "text-navy"}>{title}</h2>
      {description && (
        <p className={`mt-4 text-[15.5px] leading-relaxed ${isDark ? "text-haze" : "text-grey"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
