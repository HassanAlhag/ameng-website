import { Target, Eye, Award, ShieldCheck, Scale, Users, Sparkles } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import StatCard from "../components/ui/StatCard";
import CTASection from "../components/sections/CTASection";

// ============================================================
// ABOUT PAGE
// Company Overview, Mission/Vision/Values, Our Approach and a
// Health & Safety summary — content rewritten for the web from
// "AMEng Corporate Full Profile Deck", not copy-pasted verbatim.
// ============================================================

const values = [
  { icon: Award, name: "Excellence", text: "We relentlessly pursue perfection, setting the standard for quality and innovation." },
  { icon: Sparkles, name: "Dedication", text: "Unwavering commitment drives us to go above and beyond on every project." },
  { icon: ShieldCheck, name: "Safety", text: "We prioritize the well-being of our team so everyone returns home safely." },
  { icon: Scale, name: "Ethical", text: "Integrity and honesty are the cornerstones guiding every decision we make." },
  { icon: Users, name: "Teamwork", text: "Collaboration is at the heart of our success — we work as one connected team." },
  { icon: Target, name: "Diverse & Inclusive", text: "We celebrate the unique perspectives and backgrounds across our team." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About AMEng"
        title="Nearly 30 years turning field data into infrastructure certainty."
        description="AMEng is a multidisciplinary infrastructure services company delivering geospatial, utility engineering, underground infrastructure assessment and asset intelligence solutions across North America."
        breadcrumb={[{ label: "About" }]}
      />

      {/* Company overview */}
      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Company overview"
                title="From specialty contractor to trusted infrastructure intelligence partner."
              />
              <p className="mt-6 text-[15px] leading-relaxed text-haze">
                With nearly 30 years of experience, AMEng has evolved from a specialty contractor
                with self-performing trades into a trusted general contracting and infrastructure
                partner. By combining technical expertise, field-proven execution and engineering
                excellence, we help clients improve project certainty, reduce risk and build
                stronger infrastructure for the future.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-haze">
                From planning and investigation through design support and turnkey delivery, our
                precision and commitment help produce reliable, actionable results. Clients trust
                AMEng to bring complex infrastructure visions to life because excellence is not
                just a goal — it is our standard.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Municipal Infrastructure", "Transportation", "Water & Wastewater", "Utilities", "Energy", "Telecommunications", "Industrial Facilities", "Airports", "Transit", "Land Development", "Construction"].map((m) => (
                  <span key={m} className="rounded-full border border-white/15 px-3 py-1 text-[12px] font-medium text-haze">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard value="30" label="Years of infrastructure & field experience" />
              <StatCard value="11" label="Core markets served across North America" />
              <StatCard value="8" label="Integrated geospatial & subsurface services" />
              <StatCard value="QL-A" label="Highest tier of subsurface verification" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="border-t border-white/5 bg-ink-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:grid-cols-2 sm:p-10">
            <div className="flex items-start gap-4">
              <Target className="mt-1 h-6 w-6 shrink-0 text-orange" strokeWidth={1.5} />
              <div>
                <h3 className="text-white">Mission</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-haze">
                  Deliver accurate, reliable and actionable infrastructure intelligence — quality,
                  safety, accuracy and integrity in everything we do.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Eye className="mt-1 h-6 w-6 shrink-0 text-orange" strokeWidth={1.5} />
              <div>
                <h3 className="text-white">Our Ethos</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-haze">
                  Honesty and integrity guide us as we continuously refine our processes and
                  elevate our performance, setting the standard for excellence.
                </p>
              </div>
            </div>
          </div>

          <SectionHeading eyebrow="Our values" title="What guides every project, every day." className="mx-auto mt-16 text-center" align="center" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.name} className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6">
                <v.icon className="h-5 w-5 text-orange" strokeWidth={1.5} />
                <h3 className="mt-4 text-[16px] font-bold text-white">{v.name}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-haze">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <SectionHeading
            eyebrow="Our approach"
            title="One connected view of above-ground and below-ground conditions."
            align="center"
            className="mx-auto"
          />
          <p className="mt-6 text-[15px] leading-relaxed text-haze">
            AMEng integrates surveying, geomatics, UAV capture, subsurface utility engineering,
            GPR and CCTV inspection into a single technology-driven workflow. Instead of treating
            above-ground and below-ground data as separate problems, we deliver one connected
            picture of site conditions — so engineers, contractors and asset owners can plan,
            design and build with fewer unknowns.
          </p>
        </div>
      </section>

      <CTASection
        eyebrow="Health, Safety & Quality"
        title="Safety-first delivery, standards-based execution."
        description="See how AMEng's safety culture, stop-work authority and quality control program protect our people and your project."
        primaryCta={{ to: "/safety", label: "View Safety & Quality" }}
        secondaryCta={{ to: "/contact", label: "Request a Consultation" }}
        tone="dark"
      />
    </>
  );
}
