import { ChevronLeft, ChevronRight } from "lucide-react";
import useAutoSlider from "../../lib/useAutoSlider";

// ============================================================
// ProjectGallery
// Wide project photo gallery for /projects. One dominant image with
// the previous/next photos partly visible either side (tablet and
// up); one image at a time on phones. Uses the same slide logic as
// the Construction hero slider (src/lib/useAutoSlider.js): ~5s
// autoplay that restarts after manual navigation, pause on
// hover/focus, swipe + arrow keys, reduced-motion support, and only
// the visible/adjacent photos mounted so the rest load on demand.
//
// Layout: an invisible spacer fixes the frame height (4:3 on phones,
// 3:2 from sm) so changing slides never shifts the page; each slide
// is positioned by its offset from the active index, which makes the
// loop seamless in both directions.
// ============================================================
export default function ProjectGallery({ images = [], label = "Project gallery" }) {
  const count = images.length;
  const { index, goTo, loaded, containerProps } = useAutoSlider(count, { preloadPrev: true });

  if (count === 0) return null;

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink-950/60 text-white transition-colors hover:border-orange hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      className="focus-visible:outline-none"
      {...containerProps}
    >
      <div className="relative touch-pan-y overflow-hidden [--gap:12px] [--w:100%] sm:[--gap:20px] sm:[--w:84%] lg:[--gap:24px] lg:[--w:74%]">
        {/* Spacer: sets the stable frame height */}
        <div className="mx-auto aspect-[4/3] w-[var(--w)] sm:aspect-[3/2]" aria-hidden="true" />

        {images.map((img, i) => {
          let offset = i - index;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;
          const isActive = offset === 0;
          const isAdjacent = Math.abs(offset) === 1;

          return (
            <div
              key={img.src}
              className={`absolute top-0 left-[calc((100%-var(--w))/2)] h-full w-[var(--w)] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none ${
                isActive
                  ? "opacity-100"
                  : isAdjacent
                    ? "cursor-pointer opacity-35 hover:opacity-55"
                    : "pointer-events-none opacity-0"
              }`}
              style={{ transform: `translateX(calc(${offset} * (100% + var(--gap))))` }}
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              onClick={isAdjacent ? () => goTo(i) : undefined}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[10px] border border-white/10 bg-ink-900">
                {loaded.has(i) && (
                  <img
                    src={img.src}
                    alt={img.alt || ""}
                    width="1100"
                    height="733"
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable="false"
                    className="h-full w-full select-none object-cover"
                    style={{ objectPosition: img.position || "50% 50%" }}
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/50 via-transparent to-ink-950/30" aria-hidden="true" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress + controls */}
      <div className="mx-auto mt-6 flex w-full items-center gap-5 sm:w-[84%] lg:w-[74%]">
        <span className="font-data shrink-0 text-xs font-bold tracking-[0.14em] text-mist" aria-live="polite">
          <span className="text-white">{String(index + 1).padStart(2, "0")}</span> / {String(count).padStart(2, "0")}
        </span>
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show image ${i + 1} of ${count}`}
              aria-current={i === index ? "true" : undefined}
              className="group flex-1 py-2 focus-visible:outline-none"
            >
              <span
                className={`block h-[3px] rounded-full transition-colors duration-300 motion-reduce:transition-none group-focus-visible:ring-2 group-focus-visible:ring-orange ${
                  i === index ? "bg-orange" : "bg-white/15 group-hover:bg-white/35"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" onClick={() => goTo(index - 1)} aria-label="Previous image" className={btn}>
            <ChevronLeft className="h-4 w-4" strokeWidth={2.25} />
          </button>
          <button type="button" onClick={() => goTo(index + 1)} aria-label="Next image" className={btn}>
            <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </div>
  );
}
