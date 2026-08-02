import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, CheckCircle2, Radar, CloudCog } from "lucide-react";

import CTAButton from "../components/ui/CTAButton";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/cards/ServiceCard";
import TechnologyCard from "../components/cards/TechnologyCard";
import IndustryCard from "../components/cards/IndustryCard";
import ProjectCard from "../components/cards/ProjectCard";
import CTASection from "../components/sections/CTASection";
import HomeHero from "../components/sections/HomeHero";

import { services } from "../data/services";
import { technologies, deliverables } from "../data/technologies";
import { industries } from "../data/industries";
import { featuredProjects } from "../data/projects";

// ============================================================
// HOME PAGE
// Sections 2–10 of the homepage spec (Header = layout/Header.jsx,
// Footer = layout/Footer.jsx, both rendered once in App.jsx):
//   2. Hero
//   3. Technology / intelligence
//   4. Services overview
//   5. Digital deliverables
//   6. Industries Served (Option 3 content, restyled for Option 2)
//   7. Risk reduction / Why AMEng
//   8. Projects preview
//   9. Safety & Quality
//  10. Final CTA
// Every repeated card grid below maps over a data file — nothing
// here is a hand-duplicated card. Edit src/data/*.js to change
// homepage content.
//
// heroVariant: "contained" (default, production hero) | "background"
// (full-bleed video hero) | "backgroundEnhanced" (refined full-bleed
// hero). Temporary review routes /home1, /home2 and /home3 render
// this same page with each variant so they can be compared side by
// side without duplicating sections 3–10. See App.jsx.
// ============================================================
export default function Home({ heroVariant = "contained" }) {
  return (
    <>
      {/* ============ 2. HERO ============ */}
      <HomeHero variant={heroVariant} />

      {/* ============ 3. TECHNOLOGY / INTELLIGENCE ============ */}
      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Technology stack"
              title="Connected tools from field capture to engineering delivery."
              description="From GNSS and UAV LiDAR to GPR, GIS, BIM and cloud delivery, AMEng connects field data with the design office."
            />
            <CTAButton to="/technology" variant="secondary" className="shrink-0">See Full Stack</CTAButton>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Homepage shows only the 8 technologies flagged
                featuredOnHome in src/data/technologies.js — the full
                13-item list (including this filtered-out set) still
                renders in full on /technology. */}
            {technologies
              .filter((tech) => tech.featuredOnHome)
              .map((tech, i) => (
                <TechnologyCard key={tech.name} tech={tech} index={i} />
              ))}
          </div>
        </div>
      </section>

      {/* ============ 4. SERVICES OVERVIEW ============ */}
      <section className="border-t border-white/5 bg-ink-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Services at a glance"
              title="Above-ground and below-ground technical services in one integrated partner."
              description="Surveying, geomatics, UAV, SUE, utility mapping, QL-A daylighting, CCTV inspection and concrete scanning."
            />
            <CTAButton to="/services" variant="secondary" className="shrink-0">View all services</CTAButton>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. DIGITAL DELIVERABLES ============ */}
      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Digital deliverables"
            title="From field capture to engineering-ready outputs."
            description="Every AMEng engagement is built to hand off cleanly into your design, GIS or asset management environment."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex min-h-[64px] items-center rounded-md border-l-[3px] border-l-orange bg-white/[0.03] px-4 py-3 text-[13px] font-semibold text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. INDUSTRIES SERVED ============ */}
      {/* Requested addition from the Option 3 direction, restyled here for
          the Option 2 dark/navy technology theme per the client's brief. */}
      <section className="border-t border-white/5 bg-ink-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Industries served"
                title="Support for contractors, utilities, municipalities and facility teams."
                description="This section makes the website easier for current lead generation. It is practical, clear and service-led, while still keeping the AMEng technical identity."
              />
              <div className="mt-8">
                <CTAButton to="/services" variant="primary">View All Services</CTAButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {industries.map((industry) => (
                <IndustryCard key={industry.name} industry={industry} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7. RISK REDUCTION / WHY AMENG ============ */}
      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-ink-950">
              <img
                src="/images/risk-reduction-gis-map.png"
                alt="Digital utility map with underground utility layers"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="bg-ink-gradient absolute inset-0 opacity-80" aria-hidden="true" />
              <div className="bg-points absolute inset-0" aria-hidden="true" />
              <div className="bg-grid-dense absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="bg-scan-glow absolute inset-0" aria-hidden="true" />
              <div className="scanline absolute inset-0" aria-hidden="true" />
              <div className="absolute inset-x-6 bottom-6 rounded-lg border border-white/10 border-l-[3px] border-l-orange bg-ink-950/80 p-4 backdrop-blur-sm">
                <strong className="block text-[14px] font-bold text-white">Interactive Map / GIS Visual</strong>
                <span className="mt-1 block text-[12px] leading-relaxed text-haze">
                  Digital site map, underground utility layers, drone capture and live project data —
                  the intelligence layer behind every AMEng recommendation.
                </span>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Risk reduction"
                title="Turn unknown site conditions into mapped project intelligence."
                description="AMEng helps teams identify buried conflicts, document assets, prioritize rehabilitation and move forward with confidence before excavation, coring or construction begins."
              />
              <ul className="mt-8 flex flex-col gap-4">
                {[
                  "Technical precision across GNSS, UAV, GPR, GIS and CCTV workflows",
                  "Full-spectrum QL-D through QL-A subsurface utility investigations",
                  "North American reach with local field crews and standards knowledge",
                  "Safety-first execution with stop-work authority on every site",
                  "Digital deliverables built for CAD, GIS, BIM and asset management teams",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={1.75} />
                    <span className="text-[14.5px] leading-relaxed text-haze">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton to="/contact" variant="primary">Request a Technical Review</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 8. PROJECTS PREVIEW ============ */}
      <section className="border-t border-white/5 bg-ink-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Proof of work"
              title="Capability preview across sectors and services."
              description="A representative look at the sectors and service types AMEng supports. Full project case studies are available on request."
            />
            <CTAButton to="/projects" variant="secondary" className="shrink-0">View all projects</CTAButton>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ 9. SAFETY & QUALITY ============ */}
      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Safety & quality"
            title="Safety is a performance driver, not a compliance checkbox."
            description="World-class engineering cannot exist without a world-class safety culture — integrated directly into our design, field operations and daily management."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: ShieldCheck, label: "Stop-Work Authority" },
              { icon: CheckCircle2, label: "Field-Level Hazard Assessment" },
              { icon: Radar, label: "ASCE 38-22 · CSA S250 Aligned" },
              { icon: CloudCog, label: "ISO-Aligned Quality Control" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3 rounded-[10px] border border-white/10 bg-white/[0.03] p-6 text-center">
                <item.icon className="h-6 w-6 text-orange" strokeWidth={1.5} />
                <span className="text-[13px] font-semibold text-white">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/safety" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-orange hover:text-orange-dark">
              Learn about our safety culture
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 10. FINAL CTA ============ */}
      <CTASection
        eyebrow="Ready to map above and below ground?"
        title="Reduce underground risk before your next project starts."
        description="Submit drawings, site plans or project requirements and AMEng will identify the right survey, SUE, GPR or scanning workflow."
        primaryCta={{ to: "/contact", label: "Request a Consultation" }}
        secondaryCta={{ to: "/services", label: "Explore Services" }}
        tone="orange"
      />
    </>
  );
}
