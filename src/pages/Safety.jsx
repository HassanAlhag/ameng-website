import { ShieldCheck, Brain, HandHeart, Scale, ClipboardCheck, AlertOctagon, Building2, Users2, UserCheck } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import CTASection from "../components/sections/CTASection";

const standards = [
  { icon: Brain, name: "Predictive & Tech-Driven Risk Management", text: "AI-enabled risk tracking, real-time connected site metrics and sensor-driven hazard detection isolate field risks before they turn into incidents." },
  { icon: HandHeart, name: "Psychological Safety & Burnout Design", text: "True fitness-for-duty includes mental well-being — we engineer workloads and prioritize psychological support to eliminate burnout and distraction." },
  { icon: AlertOctagon, name: "Absolute Right to Stop Work", text: "Every team member — regardless of role or tenure — holds absolute authority to immediately stop any task if an unsafe condition is recognized." },
  { icon: Scale, name: "Regulatory Mastery", text: "Strict, unyielding adherence to all applicable OSHA standards in the United States and CCOHS / provincial regulations across Canada." },
];

const responsibility = [
  { icon: Building2, name: "Executive Leadership", text: "Pledges top-tier resources, continuous training, up-to-date protective equipment and transparent incident reporting systems." },
  { icon: Users2, name: "Project Managers & Supervisors", text: "Accountable for daily field-level hazard assessments and actively mentoring new or contract personnel." },
  { icon: UserCheck, name: "Every Employee & Partner", text: "Empowered to serve as the safety eyes and ears of our firm — reporting unsafe behaviors and never compromising life for project speed." },
];

// ============================================================
// SAFETY & QUALITY PAGE
// Rewritten from the corporate profile's "Health, Safety & Quality"
// section, including the leadership statement and shared
// responsibility model.
// ============================================================
export default function Safety() {
  return (
    <>
      <PageHero
        eyebrow="Safety & Quality"
        title="World-class engineering cannot exist without a world-class safety culture."
        description="Safety is not a compliance checkbox — it is a performance driver integrated directly into our design, field operations and daily management."
        breadcrumb={[{ label: "Safety" }]}
      />

      {/* Leadership statement */}
      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <ShieldCheck className="h-7 w-7 text-orange" strokeWidth={1.5} />
            <p className="mt-5 text-[16px] leading-relaxed text-haze sm:text-[17px]">
              "At AMEng, we believe that world-class engineering cannot exist without a world-class
              safety culture. We treat all physical, environmental and mental wellness hazards as
              predictable, manageable and entirely preventable."
            </p>
            <p className="mt-5 text-[13.5px] font-semibold text-white">
              Marve Tak, PMP — Director of Innovation, Engineering and Technology
            </p>
          </div>
        </div>
      </section>

      {/* Cutting-edge safety standards */}
      <section className="border-t border-white/5 bg-ink-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Cutting-edge safety standards" title="We continuously evolve our operations to address modern risks." />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {standards.map((s) => (
              <div key={s.name} className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6">
                <s.icon className="h-5 w-5 text-orange" strokeWidth={1.5} />
                <h3 className="mt-4 text-[15.5px] font-bold text-white">{s.name}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-haze">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared responsibility */}
      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Shared responsibility" title="Safety is everyone's job, at every level." align="center" className="mx-auto" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {responsibility.map((r) => (
              <div key={r.name} className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6 text-center">
                <r.icon className="mx-auto h-6 w-6 text-orange" strokeWidth={1.5} />
                <h3 className="mt-4 text-[15px] font-bold text-white">{r.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-haze">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="border-t border-white/5 bg-ink-950 py-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 lg:px-8">
          <ClipboardCheck className="h-5 w-5 text-orange" strokeWidth={1.5} />
          {["OSHA (U.S.)", "CCOHS / Provincial Regulations (Canada)", "ASCE 38-22", "CSA S250", "NASSCO PACP / MACP / LACP"].map((s) => (
            <span key={s} className="font-data rounded-md border border-white/15 px-3 py-1.5 text-[11.5px] font-semibold text-haze">
              {s}
            </span>
          ))}
        </div>
      </section>

      <CTASection
        title="Ask us about our safety program before you mobilize."
        primaryCta={{ to: "/contact", label: "Request a Consultation" }}
        tone="orange"
      />
    </>
  );
}
