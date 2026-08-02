import { useState } from "react";
import { Mail, MapPin, Clock, Upload, CheckCircle2, X, FileText, AlertCircle } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import CTAButton from "../components/ui/CTAButton";
import { services } from "../data/services";
import { screenFiles, submitContactRequest, MAX_FILE_SIZE_MB, MAX_FILES } from "../lib/contactSubmission";

const inputClass =
  "w-full rounded-md border border-white/15 bg-white/[0.04] px-4 py-3 text-[14.5px] text-white placeholder:text-mist/70 outline-none transition-colors focus:border-orange";
const inputErrorClass = "border-red-500/60 focus:border-red-500";
const labelClass = "mb-1.5 block text-[12.5px] font-semibold uppercase tracking-wide text-mist";
const errorTextClass = "mt-1.5 text-[12px] text-red-400";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFields(fields) {
  const errors = {};
  if (!fields.fullName) errors.fullName = "Full name is required.";
  if (!fields.email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!fields.service) errors.service = "Select the service you need.";
  if (!fields.subject) errors.subject = "Subject is required.";
  if (!fields.message) errors.message = "Tell us a bit about the project.";
  return errors;
}

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

// ============================================================
// CONTACT US / REQUEST CONSULTATION PAGE
// Lead form: full name, company, email, phone, project location,
// service (from services.js — stays in sync automatically), subject,
// project description and optional multi-file document upload.
//
// Submission goes through src/lib/contactSubmission.js — this
// component never talks to a network endpoint directly. That module
// is the seam a real backend gets wired into later; see its header
// comment for how. Today (no backend configured) it resolves locally
// so the full flow, including validation and the confirmation state,
// can be exercised end-to-end.
// ============================================================
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [fileErrors, setFileErrors] = useState([]);

  function handleFilesSelected(e) {
    const { accepted, rejected } = screenFiles(e.target.files, files);
    if (accepted.length) setFiles((prev) => [...prev, ...accepted]);
    setFileErrors(rejected);
    e.target.value = ""; // reset so selecting the same file again still fires onChange
  }

  function removeFile(index) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fields = {
      fullName: (data.get("fullName") || "").toString().trim(),
      company: (data.get("company") || "").toString().trim(),
      email: (data.get("email") || "").toString().trim(),
      phone: (data.get("phone") || "").toString().trim(),
      location: (data.get("location") || "").toString().trim(),
      service: (data.get("service") || "").toString(),
      subject: (data.get("subject") || "").toString().trim(),
      message: (data.get("message") || "").toString().trim(),
    };

    const errors = validateFields(fields);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitContactRequest(fields, files);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err?.message || "Something went wrong sending your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Need infrastructure data before mobilization?"
        description="Submit drawings, site plans or project requirements and AMEng will identify the right survey, SUE, GPR or scanning workflow."
        breadcrumb={[{ label: "Contact Us" }]}
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
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="fullName">Full Name</label>
                    <input
                      className={`${inputClass} ${fieldErrors.fullName ? inputErrorClass : ""}`}
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      aria-invalid={fieldErrors.fullName ? "true" : "false"}
                      aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
                    />
                    {fieldErrors.fullName && <p id="fullName-error" className={errorTextClass}>{fieldErrors.fullName}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="company">Company Name</label>
                    <input className={inputClass} id="company" name="company" type="text" autoComplete="organization" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Email</label>
                    <input
                      className={`${inputClass} ${fieldErrors.email ? inputErrorClass : ""}`}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      aria-invalid={fieldErrors.email ? "true" : "false"}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    />
                    {fieldErrors.email && <p id="email-error" className={errorTextClass}>{fieldErrors.email}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">Phone Number</label>
                    <input className={inputClass} id="phone" name="phone" type="tel" autoComplete="tel" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="location">Project Location</label>
                    <input className={inputClass} id="location" name="location" type="text" placeholder="City, Province/State" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="service">Service Required</label>
                    <select
                      className={`${inputClass} ${fieldErrors.service ? inputErrorClass : ""}`}
                      id="service"
                      name="service"
                      defaultValue=""
                      aria-invalid={fieldErrors.service ? "true" : "false"}
                      aria-describedby={fieldErrors.service ? "service-error" : undefined}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.name}</option>
                      ))}
                      <option value="not-sure">Not sure / need guidance</option>
                    </select>
                    {fieldErrors.service && <p id="service-error" className={errorTextClass}>{fieldErrors.service}</p>}
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="subject">Subject</label>
                  <input
                    className={`${inputClass} ${fieldErrors.subject ? inputErrorClass : ""}`}
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Topographic survey — 12-acre commercial site"
                    aria-invalid={fieldErrors.subject ? "true" : "false"}
                    aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
                  />
                  {fieldErrors.subject && <p id="subject-error" className={errorTextClass}>{fieldErrors.subject}</p>}
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">Project Description / Requirements</label>
                  <textarea
                    className={`${inputClass} ${fieldErrors.message ? inputErrorClass : ""}`}
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project, timeline and any known constraints."
                    aria-invalid={fieldErrors.message ? "true" : "false"}
                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                  />
                  {fieldErrors.message && <p id="message-error" className={errorTextClass}>{fieldErrors.message}</p>}
                </div>

                <div>
                  <label className={labelClass} htmlFor="upload">Supporting Documents (optional)</label>
                  <p className="mb-3 text-[13px] leading-relaxed text-haze">
                    Drawings, site plans and other project documents help AMEng understand your requirements
                    before preparing a proposal or scheduling a consultation.
                  </p>
                  <label
                    htmlFor="upload"
                    className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-white/20 px-4 py-4 text-[13.5px] text-mist hover:border-orange hover:text-orange"
                  >
                    <Upload className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                    Choose files — PDF, Word, Excel, CAD (DWG/DXF) or images, up to {MAX_FILE_SIZE_MB}MB each
                  </label>
                  <input
                    id="upload"
                    name="upload"
                    type="file"
                    multiple
                    className="sr-only"
                    onChange={handleFilesSelected}
                  />

                  {files.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-2">
                      {files.map((file, i) => (
                        <li
                          key={`${file.name}-${file.size}-${i}`}
                          className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2"
                        >
                          <span className="flex min-w-0 items-center gap-2 text-[13px] text-haze">
                            <FileText className="h-4 w-4 shrink-0 text-orange" strokeWidth={1.75} />
                            <span className="truncate">{file.name}</span>
                            <span className="shrink-0 text-mist">{formatFileSize(file.size)}</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(i)}
                            aria-label={`Remove ${file.name}`}
                            className="shrink-0 text-mist hover:text-orange"
                          >
                            <X className="h-4 w-4" strokeWidth={1.75} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}

                  {fileErrors.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {fileErrors.map((msg, i) => (
                        <li key={i} className="flex items-start gap-2 text-[12px] text-red-400">
                          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                          <span>{msg}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-2 text-[12px] text-mist">
                    Up to {MAX_FILES} files, {MAX_FILE_SIZE_MB}MB each.
                  </p>
                </div>

                {submitError && (
                  <div className="flex items-start gap-2 rounded-md border border-red-500/30 bg-red-500/5 px-4 py-3 text-[13.5px] text-red-400">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
                    <span>{submitError}</span>
                  </div>
                )}

                <CTAButton type="submit" size="lg" icon={false} disabled={submitting} className="w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60">
                  {submitting ? "Sending…" : "Request a Consultation"}
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
