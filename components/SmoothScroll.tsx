"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Locomotive-style smooth/inertia scrolling via Lenis. Runs site-wide as a
 * side effect; renders nothing. Disabled when the user prefers reduced motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Don't let the browser restore the previous scroll position on reload.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    // Expose so the intro overlay can reset scroll to the top on open.
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    lenis.scrollTo(0, { immediate: true });

    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
