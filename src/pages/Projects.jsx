import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import ClientProjectCard from "../components/cards/ClientProjectCard";
import CTASection from "../components/sections/CTASection";
import { clientProjects } from "../data/clientProjects";

// ============================================================
// PROJECTS PAGE
// Selected project experience, from client-supplied data in
// src/data/clientProjects.js. SKF Canada leads full-width; the
// remaining clients sit in a two-column grid, with multi-address
// work grouped inside a single client card.
// ============================================================
export default function Projects() {
  const [featured, ...others] = clientProjects;

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Selected project experience."
        description="Client work spanning 3D laser scanning, utility locates, concrete scanning, coring and cutting, and surveying services."
        breadcrumb={[{ label: "Projects" }]}
      />

      <section className="border-t border-white/5 bg-ink-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project Experience"
            title="Selected Project Experience"
            description="A selection of client work and the services performed."
          />

          <div className="mt-10">
            <ClientProjectCard client={featured} />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {others.map((client) => (
              <div key={client.slug} className="flex lg:last:odd:col-span-2">
                <ClientProjectCard client={client} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss Your Project"
        description="Tell us about your site and scope and we'll recommend the right approach."
        primaryCta={{ to: "/contact", label: "Request a Consultation" }}
        tone="orange"
      />
    </>
  );
}
