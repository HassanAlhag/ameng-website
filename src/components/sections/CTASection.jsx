import CTAButton from "../ui/CTAButton";

// ============================================================
// CTASection
// Full-width call-to-action band, reused for the homepage's final
// CTA and for the mid-page consultation strips on inner pages.
//   tone: "orange" (solid brand CTA band) | "dark" (navy/grid band)
// ============================================================
export default function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  tone = "orange",
}) {
  const isOrange = tone === "orange";

  return (
    <section
      className={`relative overflow-hidden px-6 py-16 sm:py-20 lg:px-8 ${
        isOrange ? "bg-orange" : "bg-ink-gradient bg-grid"
      }`}
    >
      {!isOrange && (
        <div className="bg-scan-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      )}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        {eyebrow && (
          <span className={`font-data text-xs font-bold uppercase tracking-[0.2em] ${isOrange ? "text-navy/70" : "text-white/80"}`}>
            {eyebrow}
          </span>
        )}
        {/* White text fails contrast on the brand's #FF6B00 orange even at
            heading size, so orange-band headings/copy use navy instead. */}
        <h2 className={`max-w-2xl ${isOrange ? "text-navy" : "text-white"}`}>{title}</h2>
        {description && (
          <p className={`max-w-xl text-[15.5px] leading-relaxed ${isOrange ? "text-navy/80" : "text-haze"}`}>
            {description}
          </p>
        )}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          {primaryCta && (
            <CTAButton to={primaryCta.to} variant={isOrange ? "on-orange" : "primary"}>
              {primaryCta.label}
            </CTAButton>
          )}
          {secondaryCta && (
            <CTAButton to={secondaryCta.to} variant={isOrange ? "on-orange-ghost" : "secondary"} icon={false}>
              {secondaryCta.label}
            </CTAButton>
          )}
        </div>
      </div>
    </section>
  );
}
