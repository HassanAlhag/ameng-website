import { useParams, Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/cards/ServiceCard";
import CTASection from "../components/sections/CTASection";
import ImageSlider from "../components/ui/ImageSlider";
import { getSectorBySlug, sectors } from "../data/sectors";
import { services, getServiceBySlug } from "../data/services";
import NotFound from "./NotFound";

// ============================================================
// SECTOR DETAIL PAGE — /sectors/:slug
// One template renders all 11 sectors from src/data/sectors.js,
// cross-linking to the specific services relevant to that sector.
// ============================================================
export default function SectorDetail() {
  const { slug } = useParams();
  const sector = getSectorBySlug(slug);

  if (!sector) return <NotFound />;

  const relatedServices = (sector.services || []).map(getServiceBySlug).filter(Boolean);
  const otherSectors = sectors.filter((s) => s.slug !== sector.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Sector"
        title={sector.name}
        description={sector.summary}
        breadcrumb={[{ label: "Sectors", path: "/sectors" }, { label: sector.name }]}
        cta={{ to: "/contact", label: "Request a Consultation" }}
        media={
          sector.heroImages?.length ? (
            <ImageSlider images={sector.heroImages} label={`${sector.name} project photos`} />
          ) : undefined
        }
      />

      {/* Optional introduction (currently Construction only) */}
      {sector.intro && (
        <section className="border-t border-white/5 bg-ink-950 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 lg:gap-14 lg:px-8">
            <p className="border-l-[3px] border-l-orange pl-6 text-[17px] leading-relaxed text-haze sm:text-lg">
              {sector.intro}
            </p>
            {sector.introImage && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] border border-white/10 bg-ink-950">
                <img
                  src={sector.introImage.src}
                  alt={sector.introImage.alt || ""}
                  width="1000"
                  height="750"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: sector.introImage.position || "50% 50%" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/60 via-transparent to-transparent" aria-hidden="true" />
              </div>
            )}
          </div>
        </section>
      )}

      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Relevant services"
            title={`How AMEng supports ${sector.name.toLowerCase()} projects.`}
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          {services.length > relatedServices.length && (
            <p className="mt-8 text-[13.5px] text-mist">
              Looking for something else?{" "}
              <Link to="/services" className="font-semibold text-orange hover:text-orange-dark">
                View all 8 services →
              </Link>
            </p>
          )}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-950 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-white">Other sectors</h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {otherSectors.map((s) => (
              <Link
                key={s.slug}
                to={`/sectors/${s.slug}`}
                className="rounded-full border border-white/15 px-4 py-2 text-[13px] font-semibold text-haze hover:border-orange hover:text-orange"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to start a ${sector.name.toLowerCase()} project?`}
        primaryCta={{ to: "/contact", label: "Request a Consultation" }}
        tone="orange"
      />
    </>
  );
}
