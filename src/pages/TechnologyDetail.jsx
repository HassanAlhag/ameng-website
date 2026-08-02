import { useParams, Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import CTASection from "../components/sections/CTASection";
import Icon from "../lib/icons";
import { getTechnologyBySlug, technologies } from "../data/technologies";
import { getServiceBySlug } from "../data/services";
import NotFound from "./NotFound";

// ============================================================
// TECHNOLOGY DETAIL PAGE — /technology/:slug
// One template renders every entry from src/data/technologies.js
// (capabilities, applications, related services). Mirrors the
// ServiceDetail/SectorDetail pattern — add a technology to the
// data file and this page handles it automatically, no new route
// or component needed.
// ============================================================
export default function TechnologyDetail() {
  const { slug } = useParams();
  const tech = getTechnologyBySlug(slug);

  if (!tech) return <NotFound />;

  const relatedServices = (tech.relatedServices || []).map(getServiceBySlug).filter(Boolean);
  const otherTechnologies = technologies.filter((t) => t.slug !== tech.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={tech.name}
        description={tech.description || tech.summary}
        breadcrumb={[{ label: "Technology", path: "/technology" }, { label: tech.name }]}
        cta={{ to: "/contact", label: "Request a Technical Review" }}
      />

      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
          <div>
            {tech.capabilities && (
              <>
                <SectionHeading eyebrow="Capabilities" title="What AMEng delivers with this technology." />
                <ul className="mt-8 flex flex-col gap-4">
                  {tech.capabilities.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={1.75} />
                      <span className="text-[14px] leading-relaxed text-haze">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {tech.applications && (
              <div className="mt-12">
                <h3 className="text-white">Common applications</h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {tech.applications.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={1.75} />
                      <span className="text-[14px] leading-relaxed text-haze">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            {relatedServices.length > 0 && (
              <div className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-[14px] font-bold uppercase tracking-wide text-white">Used on these services</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {relatedServices.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} className="flex items-center gap-2 text-[13.5px] text-haze hover:text-orange">
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
          <h3 className="text-white">Explore related technology</h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherTechnologies.map((t) => (
              <Link
                key={t.slug}
                to={`/technology/${t.slug}`}
                className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:border-orange/40"
              >
                <span className="text-[14px] font-semibold text-white">{t.name}</span>
                <Icon name="ArrowRight" className="h-4 w-4 text-orange transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`See ${tech.name} in action on your project.`}
        primaryCta={{ to: "/contact", label: "Request a Technical Review" }}
        secondaryCta={{ to: "/projects", label: "View Projects" }}
        tone="orange"
      />
    </>
  );
}
