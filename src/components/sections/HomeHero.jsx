import { Satellite, Radar, CloudCog } from "lucide-react";
import CTAButton from "../ui/CTAButton";
import StatCard from "../ui/StatCard";
import HeroVideoPanel from "./HeroVideoPanel";

// Shared content, defined exactly once so the two hero presentations
// below can never drift apart on copy, CTAs, chips or stats — only
// the surrounding layout differs between variants.
const CAPABILITY_CHIPS = [
  { icon: Satellite, label: "Point Cloud + LiDAR" },
  { icon: Radar, label: "GPR / Utility Intelligence" },
  { icon: CloudCog, label: "Cloud Data Delivery" },
];

const STATS = [
  { value: "30", label: "Years of infrastructure & field experience" },
  { value: "QL-A", label: "Positive utility verification, coast to coast" },
  { value: "8", label: "Integrated geospatial & subsurface services" },
  { value: "N.A.", label: "Projects delivered across North America" },
];

function Eyebrow() {
  return (
    <div className="font-data mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange">
      <span className="h-[2px] w-6 bg-orange" aria-hidden="true" />
      Precision, Above and Below Ground™
    </div>
  );
}

function Headline() {
  return (
    <h1 className="text-white">
      Infrastructure intelligence for what's above ground —
      <span className="text-orange"> and buried below it.</span>
    </h1>
  );
}

function Paragraph({ className = "" }) {
  return (
    <p className={`text-[16px] leading-relaxed text-haze ${className}`}>
      AMEng turns GNSS, UAV LiDAR, GPR, GIS and CCTV field data into engineering-ready
      insight that reduces risk before you design, dig, core or build.
    </p>
  );
}

function CTAs() {
  return (
    <div className="mt-9 flex flex-wrap items-center gap-4">
      <CTAButton to="/contact" variant="primary" size="lg">Request a Consultation</CTAButton>
      <CTAButton to="/services" variant="secondary" size="lg" icon={false}>Explore Services</CTAButton>
    </div>
  );
}

function CapabilityChips() {
  return (
    <ul className="mt-8 flex flex-wrap gap-2.5">
      {CAPABILITY_CHIPS.map((p) => (
        <li
          key={p.label}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-2 text-[12.5px] font-semibold text-haze"
        >
          <p.icon className="h-3.5 w-3.5 shrink-0 text-orange" strokeWidth={1.75} />
          {p.label}
        </li>
      ))}
    </ul>
  );
}

function StatRow({ className = "" }) {
  return (
    <div className={`mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 sm:grid-cols-4 lg:px-8 ${className}`}>
      {STATS.map((s) => (
        <StatCard key={s.label} value={s.value} label={s.label} />
      ))}
    </div>
  );
}

// Wider container used only by "backgroundEnhanced" — shared between
// the hero content and the stat strip below it so both align to the
// exact same edges. Deliberately wider than the site-wide max-w-7xl
// container (used by every other section/page) so this hero reads
// as a wider, more open composition without affecting anything else.
const ENHANCED_CONTAINER = "mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-14 xl:px-20";

// Bottom stat strip used by "backgroundEnhanced" — a single bordered,
// divided bar rather than four separate cards, so the row reads as
// one continuous data band anchoring the bottom of the hero instead
// of a loose grid competing with the video for attention. Opacity is
// kept moderate (not heavy) so it stays legible without becoming a
// second dark slab over the footage. Uses the same wider container as
// the content above so it spans and centers to matching edges.
function StatStrip() {
  return (
    <div className={ENHANCED_CONTAINER}>
      <div className="grid grid-cols-2 divide-x divide-y divide-white/10 rounded-xl border border-white/10 bg-ink-950/50 backdrop-blur-sm sm:grid-cols-4 sm:divide-y-0">
        {STATS.map((s) => (
          <div key={s.label} className="px-5 py-5">
            <div className="font-data text-2xl font-bold text-orange sm:text-[26px]">{s.value}</div>
            <div className="mt-1.5 text-[12px] leading-snug text-haze">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// HomeHero
// Owns the homepage's section 2 (Hero) across three presentations:
//   variant="contained"          — bounded video panel beside the
//                                   text column (production hero).
//   variant="background"         — video fills the entire section
//                                   as a full-bleed background layer,
//                                   text/CTAs/chips/stats overlaid.
//   variant="backgroundEnhanced" — same full-bleed video as
//                                   "background", but with a lighter,
//                                   cinematic treatment: contrast is
//                                   localized to the left text column
//                                   only, laid out in a wider, centered
//                                   container with a ~55/45 desktop
//                                   grid so the right side of the
//                                   frame stays open and the footage
//                                   reads as the dominant visual.
// Headline, supporting copy, CTAs, capability data and stats are
// each defined once above and rendered by every branch, so all
// three variants are provably identical outside of hero presentation.
// ============================================================
export default function HomeHero({ variant = "contained" }) {
  if (variant === "backgroundEnhanced") {
    return (
      <section className="relative overflow-hidden bg-ink-900 pt-36 pb-20 sm:pt-40 sm:pb-28">
        {/* Identical video, poster, controls and behavior as the
            "background" variant — reusing the same HeroVideoPanel
            component/props means autoplay, reduced-motion handling,
            IntersectionObserver pause/resume and accessibility are
            byte-identical to /home2, not re-implemented. Video files
            and poster are untouched.
            Section top/bottom padding (pt-36 pb-20 sm:pt-40 sm:pb-28)
            is intentionally identical to the "background" variant's
            section below: HeroVideoPanel's background mode is
            absolute inset-0, so the video's rendered height is always
            exactly the section's height. Matching this padding is how
            the two variants get the same video height/container/
            responsive sizing without duplicating the video component
            itself. Only this outer padding changed — the internal
            gaps between headline/CTAs/chips/stats below are untouched. */}
        <HeroVideoPanel variant="background" />

        {/* Localized gradient — only wide enough to seat the text
            column. On mobile the text spans the full width so the
            wash covers the full width there too; from sm: up it
            narrows so the right side of the frame stays clear and
            the video reads as the dominant visual, per the cinematic
            direction for this variant. Meaningfully lighter than a
            full-bleed scrim (no flat overlay across the whole frame). */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-ink-950/75 via-ink-950/30 to-transparent sm:w-4/5 lg:w-3/5 xl:w-1/2"
          aria-hidden="true"
        />
        {/* Thin top wash keeps the fixed header legible without
            darkening the rest of the frame. */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink-950/35 to-transparent"
          aria-hidden="true"
        />
        {/* Grid texture kept faint — brand continuity without masking
            the footage; the "background" variant runs this at a much
            higher opacity, deliberately reduced here. */}
        <div className="bg-grid pointer-events-none absolute inset-0 z-[1] opacity-20" aria-hidden="true" />
        <div className="bg-scan-glow pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

        {/* Wider container (see ENHANCED_CONTAINER) so the hero reads
            as an open, centered composition rather than the standard
            max-w-7xl used elsewhere on the page. A real two-column
            grid — roughly 55% / 45% at lg: — reserves the right side
            for the video instead of letting text stretch to fill it;
            with only one grid item present, the second column track
            is simply left empty, so no placeholder panel is needed. */}
        <div className={`relative z-10 ${ENHANCED_CONTAINER}`}>
          <div className="lg:grid lg:grid-cols-[55%_45%] lg:items-center">
            <div className="max-w-xl">
              <Eyebrow />
              <Headline />
              <Paragraph className="mt-6" />
              <CTAs />
              {/* Capability items as a minimal transparent chip row
                  (same treatment as /home2) rather than a solid panel —
                  keeps the right side of the frame unobstructed. */}
              <CapabilityChips />
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-12 sm:mt-14">
          <StatStrip />
        </div>
      </section>
    );
  }

  if (variant === "background") {
    return (
      <section className="relative overflow-hidden bg-ink-900 pt-36 pb-20 sm:pt-40 sm:pb-28">
        <HeroVideoPanel variant="background" />
        {/* Same decorative grid/glow layers as the contained hero, kept
            above the video + scrim for brand consistency between variants. */}
        <div className="bg-grid pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
        <div className="bg-scan-glow pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow />
            <Headline />
            <Paragraph className="mt-6 max-w-xl" />
            <CTAs />
            <CapabilityChips />
          </div>
        </div>

        <StatRow className="relative z-10 mt-16" />
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-ink-gradient bg-grid pt-36 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-scan-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <Eyebrow />
          <Headline />
          <Paragraph className="mt-6 max-w-xl" />
          <CTAs />
          <CapabilityChips />
        </div>

        {/* Corporate field-footage video — bounded panel beside the text column. */}
        <HeroVideoPanel variant="contained" />
      </div>

      <StatRow className="relative mt-16" />
    </section>
  );
}
