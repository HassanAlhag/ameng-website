import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/cards/ServiceCard";
import CTASection from "../components/sections/CTASection";
import { services } from "../data/services";

// ============================================================
// SERVICES OVERVIEW PAGE
// Grid of all 8 services, mapped from src/data/services.js. Each
// card links to its own /services/:slug detail page.
// ============================================================
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Eight integrated services. One infrastructure intelligence partner."
        description="Surveying | Geomatics | UAV Services | SUE | Utility Mapping | QL-A Daylighting | CCTV Sewer Inspection | Concrete Scanning, Imaging & Coring."
        breadcrumb={[{ label: "Services" }]}
      />

      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-950 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Standards we work to" title="Engineering benchmarks behind every deliverable." />
          <div className="mt-8 flex flex-wrap gap-3">
            {["ASCE 38-22", "CSA S250", "NASSCO PACP", "NASSCO MACP", "NASSCO LACP"].map((s) => (
              <span key={s} className="font-data rounded-md border border-orange/30 bg-orange/10 px-4 py-2 text-[12.5px] font-bold text-orange">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service your project needs?"
        description="Tell us the project type and stage — AMEng will identify the right survey, SUE, GPR or scanning workflow."
        primaryCta={{ to: "/contact", label: "Request a Consultation" }}
        tone="orange"
      />
    </>
  );
}
