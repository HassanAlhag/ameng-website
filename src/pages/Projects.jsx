import { useMemo, useState } from "react";
import PageHero from "../components/ui/PageHero";
import ProjectCard from "../components/cards/ProjectCard";
import CTASection from "../components/sections/CTASection";
import { projects } from "../data/projects";
import { sectors } from "../data/sectors";

// ============================================================
// PROJECTS PAGE
// Phase 1 filterable capability grid, per the corporate profile's
// projects-page plan (Phase 2 adds full case studies once client
// content is available — swap src/data/projects.js when it is).
// Filtering is simple client-side state; no extra dependency needed
// for a list this size.
// ============================================================
export default function Projects() {
  const [activeSector, setActiveSector] = useState("all");

  const usedSectorSlugs = useMemo(
    () => new Set(projects.map((p) => p.sector)),
    []
  );
  const filterOptions = sectors.filter((s) => usedSectorSlugs.has(s.slug));

  const filtered = activeSector === "all"
    ? projects
    : projects.filter((p) => p.sector === activeSector);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Capability preview across sectors and services."
        description="A representative look at AMEng's work by sector and service. Full project case studies with scope, outcomes and deliverables are available on request."
        breadcrumb={[{ label: "Projects" }]}
      />

      <section className="border-t border-white/5 bg-ink-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by sector">
            <button
              type="button"
              onClick={() => setActiveSector("all")}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                activeSector === "all" ? "bg-orange text-navy" : "border border-white/15 text-haze hover:border-orange hover:text-orange"
              }`}
            >
              All Sectors
            </button>
            {filterOptions.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => setActiveSector(s.slug)}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                  activeSector === s.slug ? "bg-orange text-navy" : "border border-white/15 text-haze hover:border-orange hover:text-orange"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to see full case studies?"
        description="Detailed project scopes, technology deployed and measured outcomes are available on request."
        primaryCta={{ to: "/contact", label: "Request a Consultation" }}
        tone="orange"
      />
    </>
  );
}
