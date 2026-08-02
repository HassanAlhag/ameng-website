import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

// Decide the initial autoplay intent synchronously (read once, not
// tracked on resize — a static heuristic is enough for a decorative
// panel) so mobile/reduced-motion visits never even attempt to
// fetch and play the video.
function shouldAutoplay() {
  if (typeof window === "undefined") return false;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isSmallViewport = !window.matchMedia("(min-width: 640px)").matches;
  return !reduceMotion && !isSmallViewport;
}

// ============================================================
// HeroVideoPanel
// Owns 100% of the hero video's behavior — autoplay attempt,
// scroll-based pause/resume, real event-driven play/pause state,
// accessibility affordances — for BOTH homepage hero presentations,
// so that behavior can never drift between them:
//   variant="contained"  — bounded, bordered panel (used on /, /home1)
//   variant="background" — full-bleed section background (used on /home2)
// Only layout/positioning classes branch on `variant`; the refs,
// effects and toggle logic below are shared and identical either way.
//
// State model:
//   - `playing` (React state) is UI-facing only and is ALWAYS set
//     from the <video>'s own play/pause/ended/error events, never
//     assumed from a click — so the button can't lie about reality
//     (autoplay blocked, playback failing, or the user pausing via
//     the OS media keys / browser UI all correct it automatically).
//   - `wantsToPlayRef` is intent-facing: did autoplay succeed, or
//     did the user explicitly press play? The IntersectionObserver
//     below reads this to decide whether to resume on scroll-back,
//     so a user's manual pause is respected instead of being
//     overridden the moment the panel re-enters the viewport, and a
//     video that was never playing (mobile/reduced-motion, or a
//     blocked autoplay) is never force-started just by scrolling.
// ============================================================
export default function HeroVideoPanel({
  poster = "/images/hero-poster.jpg",
  mp4Src = "/video/hero.mp4",
  webmSrc = "/video/hero.webm",
  variant = "contained",
}) {
  const videoRef = useRef(null);
  const panelRef = useRef(null);
  const wantsToPlayRef = useRef(shouldAutoplay());
  const [playing, setPlaying] = useState(false);

  // Attempt autoplay once, via play()'s returned Promise rather than
  // the bare `autoplay` attribute — this is what lets us actually
  // detect a browser autoplay block instead of just assuming success.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !wantsToPlayRef.current) return;
    el.play()?.catch(() => {
      wantsToPlayRef.current = false;
    });
  }, []);

  // Pause the moment the panel is fully out of the viewport; resume
  // only if it was actually playing (per intent, not assumption)
  // when it scrolls back in.
  useEffect(() => {
    const panel = panelRef.current;
    const el = videoRef.current;
    if (!panel || !el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (wantsToPlayRef.current && el.paused) {
            el.play()?.catch(() => {
              wantsToPlayRef.current = false;
            });
          }
        } else if (!el.paused) {
          el.pause();
        }
      },
      { threshold: 0 }
    );
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  function toggle() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      wantsToPlayRef.current = true;
      el.play()?.catch(() => {
        wantsToPlayRef.current = false;
      });
    } else {
      wantsToPlayRef.current = false;
      el.pause();
    }
  }

  const isBackground = variant === "background";

  const video = (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      onEnded={() => setPlaying(false)}
      onError={() => {
        wantsToPlayRef.current = false;
        setPlaying(false);
      }}
    >
      <source src={mp4Src} type="video/mp4" />
      <source src={webmSrc} type="video/webm" />
    </video>
  );

  const toggleButton = (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause background video" : "Play background video"}
      aria-pressed={!playing}
      className={`absolute z-20 flex h-10 w-10 items-center justify-center rounded-lg border border-orange/30 bg-ink-950/80 text-orange backdrop-blur-sm transition-colors hover:bg-ink-950/90 ${
        // Background variant anchors controls to the top corners: the
        // hero content column and the stat-card row both sit in the
        // lower two-thirds of a full-bleed section, so bottom-anchored
        // controls would collide with the stats grid. Top corners stay
        // clear of both on every breakpoint.
        //
        // top-24 (not top-6): the site header is `fixed` (out of
        // document flow) at h-20 (80px) with z-50, so on the
        // full-bleed video — which starts at the very top of the
        // section, i.e. the top of the page — anything placed at
        // top-6 (24px) sits underneath the header's hit-test area
        // (and directly under the mobile menu toggle / desktop nav on
        // top of it). That made this control visible but unclickable.
        // top-24 (96px) clears the header by 16px on every breakpoint,
        // since the header's height doesn't change responsively.
        isBackground ? "top-24 right-6" : "bottom-4 right-4"
      }`}
    >
      {playing ? <Pause className="h-4.5 w-4.5" strokeWidth={1.75} /> : <Play className="h-4.5 w-4.5" strokeWidth={1.75} />}
    </button>
  );

  const badge = (
    <div
      className={`absolute z-20 rounded-md border border-white/10 bg-ink-950/80 px-3 py-1.5 backdrop-blur-sm ${
        // Same top-24 fix as the toggle button above — top-6 sat
        // directly under the fixed header's logo, so it was both
        // visually crowded and behind the header's hit-test area.
        isBackground ? "top-24 left-6" : "left-4 top-4"
      }`}
    >
      <span className="font-data text-[11px] font-bold uppercase tracking-[0.14em] text-orange">Field Footage</span>
    </div>
  );

  if (isBackground) {
    // Full-bleed: fills its nearest positioned ancestor (the hero
    // <section>), sits behind the section's own decorative grid/glow
    // layers and content — those are stacked by the caller, not here.
    // The scrim is stronger than the contained variant's because real
    // body text sits directly on top of it, not just brand cohesion.
    return (
      <div ref={panelRef} className="absolute inset-0 overflow-hidden">
        {video}
        <div className="bg-ink-gradient pointer-events-none absolute inset-0 opacity-80" aria-hidden="true" />
        {toggleButton}
        {badge}
      </div>
    );
  }

  return (
    <div ref={panelRef} className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-950">
      <div className="bg-points pointer-events-none absolute inset-0 z-10 opacity-30" aria-hidden="true" />
      {/* aspect-video (16:9) matches the source footage exactly — no
          crop mismatch between the poster frame and playback, and
          keeps the panel from growing taller than the text column
          next to it. */}
      <div className="relative aspect-[4/3] sm:aspect-video">
        {video}
        {/* Scrim so the panel still reads as part of the dark UI, not a raw video window */}
        <div className="bg-ink-gradient pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      </div>
      {toggleButton}
      {badge}
    </div>
  );
}
