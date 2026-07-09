import { Link } from "react-router-dom";
import { Satellite, Radar, CloudCog, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

import CTAButton from "../components/ui/CTAButton";
import SectionHeading from "../components/ui/SectionHeading";
import StatCard from "../components/ui/StatCard";
import ServiceCard from "../components/cards/ServiceCard";
import TechnologyCard from "../components/cards/TechnologyCard";
import IndustryCard from "../components/cards/IndustryCard";
import ProjectCard from "../components/cards/ProjectCard";
import CTASection from "../components/sections/CTASection";

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
// ============================================================
export default function Home() {
  return (
    <>
      {/* ============ 2. HERO ============ */}
      <section className="relative overflow-hidden bg-ink-gradient bg-grid pt-36 pb-20 sm:pt-40 sm:pb-28">
        <div className="bg-scan-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="font-data mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange">
              <span className="h-[2px] w-6 bg-orange" aria-hidden="true" />
              Precision, Above and Below Ground™
            </div>
            <h1 className="text-white">
              Infrastructure intelligence for what's above ground —
              <span className="text-orange"> and buried below it.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-haze">
              AMEng converts GNSS, UAV LiDAR, GPR, GIS and CCTV field data into engineering-ready
              infrastructure intelligence — reducing risk before you design, dig, core or build.
              Geospatial, subsurface utility engineering and asset intelligence solutions across
              North America.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CTAButton to="/contact" variant="primary" size="lg">Request a Consultation</CTAButton>
              <CTAButton to="/services" variant="secondary" size="lg" icon={false}>Explore Services</CTAButton>
            </div>
          </div>

          {/* Tech "dashboard" panel — deliberate CSS/SVG technical visual
              instead of stock photography, matching the Option 2 reference. */}
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="bg-points pointer-events-none absolute inset-0 rounded-2xl opacity-60" aria-hidden="true" />
            <div className="relative flex flex-col gap-4">
              {[
                { icon: Satellite, title: "Point Cloud + LiDAR Capture", text: "Dense spatial datasets for existing conditions, Scan-to-BIM and digital twin development." },
                { icon: Radar, title: "GPR / Utility Intelligence", text: "Underground detection, utility conflict analysis and ASCE 38-22 metadata tagging." },
                { icon: CloudCog, title: "Cloud Data Delivery", text: "CAD, GIS, BIM and inspection deliverables synced through secure project workflows." },
              ].map((p, i) => (
                <div
                  key={p.title}
                  className={`relative rounded-lg border border-white/10 border-l-[3px] border-l-orange bg-ink-950/70 p-4 backdrop-blur-sm ${i === 1 ? "ml-auto w-[92%]" : "w-full"}`}
                >
                  <div className="flex items-center gap-2.5">
                    <p.icon className="h-4 w-4 shrink-0 text-orange" strokeWidth={1.75} />
                    <strong className="text-[13.5px] font-bold text-white">{p.title}</strong>
                  </div>
                  <span className="mt-1.5 block text-[12px] leading-relaxed text-haze">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick stat row */}
        <div className="relative mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-4 px-6 sm:grid-cols-4 lg:px-8">
          <StatCard value="30" label="Years of infrastructure & field experience" />
          <StatCard value="QL-A" label="Positive utility verification, coast to coast" />
          <StatCard value="8" label="Integrated geospatial & subsurface services" />
          <StatCard value="N.A." label="Projects delivered across North America" />
        </div>
      </section>

      {/* ============ 3. TECHNOLOGY / INTELLIGENCE ============ */}
      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Technology stack"
              title="Connected tools for field capture, data processing and engineering delivery."
              description="From GNSS and UAV LiDAR to GPR, GIS, BIM and cloud-based delivery — AMEng runs one connected technology stack from the field to the design office."
            />
            <CTAButton to="/technology" variant="secondary" className="shrink-0">See full stack</CTAButton>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech) => (
              <TechnologyCard key={tech.name} tech={tech} />
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
              description="Surveying, geomatics, UAV services, subsurface utility engineering, utility mapping, QL-A daylighting, CCTV sewer inspection, and concrete scanning, imaging and coring."
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
