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
//
// Optional `image` (service/technology detail pages pass the same
// `image` field their homepage card uses, so the data file stays the
// single source of truth). When set, the existing content stays in
// the left column and the photo fills the right column at the
// height of the text, so the hero height is unchanged; below md it
// stacks under the CTA. Without `image` the markup is unchanged.
//
// Optional `media` (a React node, e.g. the Construction sector's
// ImageSlider) takes the same right-hand column in place of `image`
// and keeps its own aspect ratio. Pages that pass neither prop
// render exactly as before.
// ============================================================
export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb = [],
  cta,
  image,
  imageAlt = "",
  media,
  children,
}) {
  const content = (
    <>
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
    </>
  );

  return (
    <section className="relative overflow-hidden bg-ink-gradient bg-grid pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="bg-scan-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {image || media ? (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
            <div className="min-w-0">{content}</div>
            {media ? (
              <div className="min-w-0 md:self-center">{media}</div>
            ) : (
            <div className="relative min-h-[220px] overflow-hidden rounded-[10px] border border-white/10 bg-ink-950 sm:min-h-[300px] md:min-h-0">
              <img
                src={image}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-transparent to-transparent" aria-hidden="true" />
            </div>
            )}
          </div>
        ) : (
          content
        )}
      </div>
    </section>
  );
}
