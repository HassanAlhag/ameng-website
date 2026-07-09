import { useParams, Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import CTASection from "../components/sections/CTASection";
import Icon from "../lib/icons";
import { getServiceBySlug, services } from "../data/services";
import { getSectorBySlug } from "../data/sectors";
import NotFound from "./NotFound";

// ============================================================
// SERVICE DETAIL PAGE — /services/:slug
// One template renders all 8 services from src/data/services.js
// (scope, standards, applications, technology, related sectors).
// Add a 9th service to the data file and this page handles it
// automatically — no new route or component needed.
// ============================================================
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <NotFound />;

  const relatedSectors = (service.sectors || []).map(getSectorBySlug).filter(Boolean);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.name}
        description={service.heroStatement}
        breadcrumb={[{ label: "Services", path: "/services" }, { label: service.name }]}
        cta={{ to: "/contact", label: "Request a Consultation" }}
      />

      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Scope & deliverables" title="What this service covers." />
            <ul className="mt-8 flex flex-col gap-4">
              {service.scope.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={1.75} />
                  <span className="text-[14px] leading-relaxed text-haze">{item}</span>
                </li>
              ))}
            </ul>

            {service.applications && (
              <div className="mt-12">
                <h3 className="text-white">Common applications</h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {service.applications.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={1.75} />
                      <span className="text-[14px] leading-relaxed text-haze">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.otherServices && (
              <div className="mt-12">
                <h3 className="text-white">Related survey services</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.otherServices.map((s) => (
                    <span key={s} className="rounded-full border border-white/15 px-3 py-1.5 text-[12.5px] text-haze">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            {service.standards && (
              <div className="rounded-[10px] border border-orange/25 bg-orange/5 p-6">
                <h3 className="text-[14px] font-bold uppercase tracking-wide text-white">Standards</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.standards.map((s) => (
                    <span key={s} className="font-data rounded-md bg-orange/15 px-2.5 py-1 text-[11.5px] font-bold text-orange">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {service.technology && (
              <div className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-[14px] font-bold uppercase tracking-wide text-white">Technology used</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {service.technology.map((t) => (
                    <li key={t} className="text-[13.5px] text-haze">{t}</li>
                  ))}
                </ul>
              </div>
            )}

            {relatedSectors.length > 0 && (
              <div className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-[14px] font-bold uppercase tracking-wide text-white">Sectors served</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {relatedSectors.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/sectors/${s.slug}`} className="flex items-center gap-2 text-[13.5px] text-haze hover:text-orange">
                        <Icon name={s.icon} className="h-4 w-4 text-orange" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-950 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-white">Explore related services</h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:border-orange/40"
              >
                <span className="text-[14px] font-semibold text-white">{s.name}</span>
                <Icon name="ArrowRight" className="h-4 w-4 text-orange transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to talk through your ${service.name.toLowerCase()} needs?`}
        primaryCta={{ to: "/contact", label: "Request a Consultation" }}
        tone="orange"
      />
    </>
  );
}
