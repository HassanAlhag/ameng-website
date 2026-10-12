import { useCallback, useEffect, useRef, useState } from "react";

// ============================================================
// useAutoSlider
// Shared slide state for the Construction hero ImageSlider and the
// Projects page ProjectGallery (each keeps its own layout/markup):
//   - looping index with goTo()
//   - ~5s autoplay; a fresh timer per slide, so any manual navigation
//     restarts it; paused while hovered/focused; disabled entirely for
//     prefers-reduced-motion
//   - keyboard (←/→) and touch-swipe handlers for the container
//   - `loaded`: the set of slide indexes that should have their <img>
//     mounted (current + next, optionally previous), so later photos
//     load on demand instead of all at once.
// ============================================================
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

export default function useAutoSlider(count, { interval = 5000, preloadPrev = false } = {}) {
  const neighbours = useCallback(
    (i) => {
      const n = Math.max(count, 1);
      const list = [i, (i + 1) % n];
      if (preloadPrev) list.push((i - 1 + n) % n);
      return list;
    },
    [count, preloadPrev]
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState(() => new Set(neighbours(0)));
  const reducedMotion = usePrefersReducedMotion();
  const touchStartX = useRef(null);

  const goTo = useCallback((i) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    setLoaded((prev) => {
      const want = neighbours(index);
      if (want.every((i) => prev.has(i))) return prev;
      const s = new Set(prev);
      want.forEach((i) => s.add(i));
      return s;
    });
  }, [index, neighbours]);

  useEffect(() => {
    if (count < 2 || paused || reducedMotion) return undefined;
    const t = setTimeout(() => goTo(index + 1), interval);
    return () => clearTimeout(t);
  }, [index, paused, reducedMotion, count, goTo, interval]);

  const containerProps = {
    onKeyDown: (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(index - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(index + 1); }
    },
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: (e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); },
    onTouchStart: (e) => { touchStartX.current = e.touches[0].clientX; },
    onTouchEnd: (e) => {
      if (touchStartX.current == null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
      touchStartX.current = null;
    },
  };

  return { index, goTo, loaded, reducedMotion, containerProps };
}
