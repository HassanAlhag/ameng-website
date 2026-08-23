import PageHero from "../components/ui/PageHero";
import SectorCard from "../components/cards/SectorCard";
import CTASection from "../components/sections/CTASection";
import { sectors } from "../data/sectors";

// ============================================================
// SECTORS OVERVIEW PAGE
// Grid of all 11 sectors, mapped from src/data/sectors.js.
// ============================================================
export default function Sectors() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Built for complex infrastructure environments."
        description="AMEng supports municipal infrastructure, transportation, water and wastewater, utilities, energy, telecommunications, industrial facilities, airports, transit, land development and construction projects."
        breadcrumb={[{ label: "Sectors" }]}
      />

      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <SectorCard key={sector.slug} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't see your sector listed?"
        description="AMEng's core services apply across nearly any environment involving above or below-ground infrastructure."
        primaryCta={{ to: "/contact", label: "Request a Consultation" }}
        tone="orange"
      />
    </>
  );
}
