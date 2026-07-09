import { useState } from "react";
import { Mail, MapPin, Clock, Upload, CheckCircle2 } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import CTAButton from "../components/ui/CTAButton";
import { services } from "../data/services";

const inputClass =
  "w-full rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-[14.5px] text-white placeholder:text-mist/70 outline-none transition-colors focus:border-orange";
const labelClass = "mb-1.5 block text-[12.5px] font-semibold uppercase tracking-wide text-mist";

// ============================================================
// CONTACT / REQUEST CONSULTATION PAGE
// Lead form matching the sitemap spec: name, company, email, phone,
// service dropdown (from services.js), project location, message,
// optional document upload.
//
// NOTE for whoever wires this up next: this form currently only
// manages state client-side and shows a confirmation on submit —
// there is no backend yet. Swap handleSubmit's TODO for a real POST
// to your form endpoint / email service (e.g. Formspree, a serverless
// function, or your CRM's API) when one is available.
// ============================================================
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: replace with a real submission (API route / form service).
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Request Consultation"
        title="Need infrastructure data before mobilization?"
        description="Submit drawings, site plans or project requirements and AMEng will identify the right survey, SUE, GPR or scanning workflow."
        breadcrumb={[{ label: "Request Consultation" }]}
      />

      <section className="border-t border-white/5 bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-10 w-10 text-orange" strokeWidth={1.5} />
                <h2 className="mt-5 text-white">Thank you — we've received your request.</h2>
                <p className="mt-3 max-w-sm text-[14.5px] text-haze">
                  A member of the AMEng team will follow up shortly to confirm scope and timing.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="firstName">First Name</label>
                    <input className={inputClass} id="firstName" name="firstName" type="text" required />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="lastName">Last Name</label>
                    <input className={inputClass} id="lastName" name="lastName" type="text" required />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="company">Company</label>
                    <input className={inputClass} id="company" name="company" type="text" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Email</label>
                    <input className={inputClass} id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">Phone</label>
                    <input className={inputClass} id="phone" name="phone" type="tel" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="location">Project Location</label>
                    <input className={inputClass} id="location" name="location" type="text" placeholder="City, Province/State" />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="service">Service Needed</label>
                  <select className={inputClass} id="service" name="service" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                    <option value="not-sure">Not sure / need guidance</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">Project Details</label>
                  <textarea className={inputClass} id="message" name="message" rows={5} placeholder="Tell us about your project, timeline and any known constraints." />
                </div>

                <div>
                  <label className={labelClass} htmlFor="upload">Attach Drawings / Site Plans (optional)</label>
                  <label
                    htmlFor="upload"
                    className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-white/20 px-4 py-4 text-[13.5px] text-mist hover:border-orange hover:text-orange"
                  >
                    <Upload className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                    {fileName || "Choose a file (PDF, DWG, image)"}
                  </label>
                  <input
                    id="upload"
                    name="upload"
                    type="file"
                    className="sr-only"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </div>

                <CTAButton size="lg" icon={false} className="w-full sm:w-auto">
                  Request a Consultation
                </CTAButton>
              </form>
            )}
          </div>

          {/* Contact details */}
          <aside className="flex flex-col gap-5">
            <div className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6">
              <Mail className="h-5 w-5 text-orange" strokeWidth={1.5} />
              <h3 className="mt-4 text-[15px] font-bold text-white">Email</h3>
              <a href="mailto:Info@AMEng.ca" className="mt-1 block text-[14px] text-haze hover:text-orange">
                Info@AMEng.ca
              </a>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6">
              <MapPin className="h-5 w-5 text-orange" strokeWidth={1.5} />
              <h3 className="mt-4 text-[15px] font-bold text-white">Coverage</h3>
              <p className="mt-1 text-[14px] text-haze">Serving clients across North America</p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6">
              <Clock className="h-5 w-5 text-orange" strokeWidth={1.5} />
              <h3 className="mt-4 text-[15px] font-bold text-white">Response Time</h3>
              <p className="mt-1 text-[14px] text-haze">We typically respond to consultation requests within one business day.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
