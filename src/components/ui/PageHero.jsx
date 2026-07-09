import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import CTAButton from "./CTAButton";

// ============================================================
// PageHero
// Shared dark hero band for every inner page (About, Services,
// Sectors, Technology, Projects, Safety, Contact, and the dynamic
// service/sector detail pages). Keeps every page opening with the
// same premium navy/grid treatment as the homepage hero, just
// shorter, and carries a breadcrumb trail for orientation.
// ============================================================
export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb = [],
  cta,
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-ink-gradient bg-grid pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="bg-scan-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-mist">
            <Link to="/" className="hover:text-orange">Home</Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" strokeWidth={2.5} />
                {b.path ? (
                  <Link to={b.path} className="hover:text-orange">{b.label}</Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <div className="font-data mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange">
            <span className="h-[2px] w-6 bg-orange" aria-hidden="true" />
            {eyebrow}
          </div>
        )}

        <h1 className="max-w-3xl text-white">{title}</h1>

        {description && (
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-haze sm:text-base">
            {description}
          </p>
        )}

        {cta && (
          <div className="mt-8">
            <CTAButton to={cta.to} variant="primary">{cta.label}</CTAButton>
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
