import { ChevronLeft, ChevronRight } from "lucide-react";
import useAutoSlider from "../../lib/useAutoSlider";

// ============================================================
// ImageSlider
// Lightweight hero gallery (no carousel dependency). One image at
// a time in a fixed 4:3 frame (so the hero never changes height),
// subtle cross-fade, ~5s autoplay that restarts after any manual
// navigation and pauses on hover/focus. Autoplay and the fade are
// switched off for prefers-reduced-motion. Only the current and
// next slides are mounted with a src, so later photos load on
// demand instead of all at once.
//
// images: [{ src, alt, position }]  (position = CSS object-position)
// Slide state/autoplay/swipe live in src/lib/useAutoSlider.js (shared
// with ProjectGallery); this file is only the hero layout.
// ============================================================
export default function ImageSlider({ images = [], label = "Image gallery" }) {
  const count = images.length;
  const { index, goTo, loaded, containerProps } = useAutoSlider(count);

  if (count === 0) return null;

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink-950/60 text-white backdrop-blur-sm transition-colors hover:border-orange hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange sm:h-9 sm:w-9";

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] border border-white/10 bg-ink-950"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      {...containerProps}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${count}`}
        >
          {loaded.has(i) && (
            <img
              src={img.src}
              alt={img.alt || ""}
              width="1000"
              height="750"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              decoding="async"
              className="h-full w-full object-cover"
              style={{ objectPosition: img.position || "50% 50%" }}
            />
          )}
        </div>
      ))}

      {/* Same top wash as CardMedia, plus a light bottom fade for the controls. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/60 via-transparent to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/70 to-transparent" aria-hidden="true" />

      {count > 1 && (
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-3 sm:p-4">
          <div className="flex items-center">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show image ${i + 1} of ${count}`}
                aria-current={i === index ? "true" : undefined}
                className="group flex h-6 items-center px-1 focus-visible:outline-none"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none group-focus-visible:ring-2 group-focus-visible:ring-orange ${
                    i === index ? "w-5 bg-orange" : "w-1.5 bg-white/50 group-hover:bg-white/80"
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
      )}
    </div>
  );
}
