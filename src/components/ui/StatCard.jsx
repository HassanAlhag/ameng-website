// ============================================================
// StatCard
// Small proof-point block used in the "Why AMEng" section, e.g.
// <StatCard value="30" label="Years of infrastructure experience" />
// Numbers render in the monospace "data" font to reinforce the
// technical/data-driven brand direction.
// ============================================================
export default function StatCard({ value, label, tone = "dark" }) {
  const isDark = tone === "dark";
  return (
    <div
      className={`rounded-[10px] border p-6 ${
        isDark
          ? "border-white/10 bg-white/[0.04]"
          : "border-line bg-white shadow-[var(--shadow-card)]"
      }`}
    >
      <div className="font-data text-3xl font-bold text-orange sm:text-[34px]">{value}</div>
      <div className={`mt-2 text-[13.5px] leading-snug ${isDark ? "text-haze" : "text-grey"}`}>
        {label}
      </div>
    </div>
  );
}
