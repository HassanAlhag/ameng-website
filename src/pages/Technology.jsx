import { TrendingUp, Radio, Video, Box, Sparkles, CloudCog } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import TechnologyCard from "../components/cards/TechnologyCard";
import CTASection from "../components/sections/CTASection";
import { technologies } from "../data/technologies";

const innovationPillars = [
  { icon: TrendingUp, name: "Predictive Risk Analytics", text: "We transform field data into actionable safety metrics, identifying high-risk trends before they cause site incidents." },
  { icon: Radio, name: "Connected Field Tech", text: "Smart wearables and IoT sensors monitor hazardous environments and protect worker health in real time." },
  { icon: Video, name: "Remote-First Inspections", text: "Drones and robotic scanning tools audit high-risk zones, keeping personnel out of harm's way." },
  { icon: Box, name: "Virtual Safety Modeling", text: "3D and 4D simulation software previews construction sequences and eliminates structural hazards during design." },
  { icon: Sparkles, name: "Immersive Training Systems", text: "High-fidelity virtual simulations prepare teams to master emergency response before ever reaching a live site." },
  { icon: CloudCog, name: "Cloud-Based Governance", text: "Instant mobile field-permitting and digital hazard assessments maintain real-time oversight across active sites." },
];

// ============================================================
// TECHNOLOGY PAGE
// Full technology stack (from src/data/technologies.js) plus the
// innovation pillars that connect technology directly to safety.
// ============================================================
export default function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Innovation drives our engineering. Technology secures our people."
        description="We replace reactive safety methods with an intelligent, tech-forward ecosystem — GNSS, total stations, GPR, UAV, LiDAR, GIS, CCTV and cloud data working together to predict hazards and protect field teams in real time."
        breadcrumb={[{ label: "Technology" }]}
      />

      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Full technology stack" title="Connected tools for field capture, data processing and engineering delivery." />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, i) => (
              <TechnologyCard key={tech.name} tech={tech} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Technology & innovation" title="How technology eliminates guesswork and engineers risk out of the equation." />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {innovationPillars.map((p) => (
              <div key={p.name} className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6">
                <p.icon className="h-5 w-5 text-orange" strokeWidth={1.5} />
                <h3 className="mt-4 text-[15.5px] font-bold text-white">{p.name}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-haze">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See our technology stack in action on your project."
        primaryCta={{ to: "/contact", label: "Request a Technical Review" }}
        secondaryCta={{ to: "/projects", label: "View Projects" }}
        tone="orange"
      />
    </>
  );
}
