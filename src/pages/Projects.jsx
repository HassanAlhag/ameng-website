import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import ClientProjectCard from "../components/cards/ClientProjectCard";
import CTASection from "../components/sections/CTASection";
import ProjectGallery from "../components/sections/ProjectGallery";
import { clientProjects } from "../data/clientProjects";
import { projectGallery } from "../data/projectGallery";

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
        image="/images/projects/field-crew-site-works.jpg"
        imageAlt="Field crew in high-visibility gear with a concrete saw at an active industrial site"
      />

      {/* Project Gallery — curated field photography (src/data/projectGallery.js) */}
      <section className="border-t border-white/5 bg-ink-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Projects Gallery"
            description="A glimpse into our work across the field, from surveying and infrastructure to construction and project delivery."
          />
          <div className="mt-10">
            <ProjectGallery images={projectGallery} />
          </div>
        </div>
      </section>

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
