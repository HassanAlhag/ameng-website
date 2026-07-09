import CTAButton from "../components/ui/CTAButton";

// ============================================================
// 404 — used both for unmatched routes (App.jsx "*") and for a
// bad :slug on ServiceDetail / SectorDetail.
// ============================================================
export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink-gradient bg-grid py-24">
      <div className="bg-scan-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-xl px-6 text-center">
        <span className="font-data text-sm font-bold uppercase tracking-[0.3em] text-orange">404</span>
        <h1 className="mt-4 text-white">Page not found.</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-haze">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <CTAButton to="/" variant="primary">Back to Home</CTAButton>
        </div>
      </div>
    </section>
  );
}
