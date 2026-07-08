"use client";

import { useEffect, useState } from "react";
import { useAnimate } from "motion/react";
import { couple, events } from "@/data/wedding";
import { formatLongDate } from "@/lib/format";
import { FloatingPetals } from "./FloatingPetals";
import { CornerFlourish, Flourish, Monogram } from "./Ornaments";

function scrollToTop() {
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, o?: object) => void } }).__lenis;
  if (lenis) lenis.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
}

/**
 * Full-page landing animation: a large wax-sealed envelope (kept at its natural
 * proportion so it never distorts, and responsive down to phones). Tapping
 * breaks the seal, the flap lifts, the envelope dissolves, and the invitation
 * fades in, then reveals the site. Built with Framer Motion. Plays on every
 * load; skipped for users who prefer reduced motion.
 */
export function EnvelopeIntro() {
  const [show, setShow] = useState(true);
  const [opening, setOpening] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShow(false);
      return;
    }
    // Always start at the top, regardless of any restored scroll position.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    scrollToTop();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const finish = () => {
    document.body.style.overflow = "";
    scrollToTop();
    setShow(false);
  };

  async function open() {
    if (opening) return;
    setOpening(true);
    scrollToTop();
    animate(".shimmer-ring", { scale: 3, opacity: [0.5, 0] }, { duration: 0.8, ease: "easeOut" });
    await animate(".seal", { scale: 0.35, opacity: 0 }, { duration: 0.4, ease: "easeIn" });
    await animate(".flap", { rotateX: -168 }, { duration: 0.9, ease: [0.4, 0, 0.2, 1] });
    // Envelope dissolves while the invitation fades in.
    animate(".envelope", { opacity: 0, scale: 0.97 }, { duration: 0.7, ease: "easeInOut" });
    await animate(".letter", { opacity: 1, y: 0 }, { duration: 0.8, ease: [0.22, 1, 0.36, 1] });
    await new Promise((r) => setTimeout(r, 800));
    await animate(scope.current, { opacity: 0, scale: 1.05 }, { duration: 0.8, ease: "easeInOut" });
    finish();
  }

  if (!show) return null;

  const cornerStyle = { width: 54, height: 54, opacity: 0.6 };

  return (
    <div
      ref={scope}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(130% 100% at 50% 12%, var(--bg-2), var(--bg) 72%)",
      }}
    >
      <FloatingPetals count={16} />

      {/* Large envelope — natural proportion, sized with a clear margin */}
      <button
        type="button"
        onClick={open}
        aria-label="Open the invitation"
        className="envelope relative"
        style={{ perspective: "2400px" }}
      >
        <div
          className="relative"
          style={{
            width: "min(80vw, calc(78vh * 400 / 264))",
            aspectRatio: "400 / 264",
          }}
        >
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="envBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="var(--surface)" />
                <stop offset="1" stopColor="color-mix(in srgb, var(--bg-2) 80%, var(--surface))" />
              </linearGradient>
              <linearGradient id="envFlap" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="color-mix(in srgb, var(--surface) 88%, var(--accent))" />
                <stop offset="1" stopColor="color-mix(in srgb, var(--bg-2) 70%, var(--accent))" />
              </linearGradient>
            </defs>
          </svg>

          {/* Body */}
          <svg
            viewBox="0 0 400 264"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full drop-shadow-2xl"
          >
            <rect x="1" y="1" width="398" height="262" rx="16" fill="url(#envBody)" stroke="color-mix(in srgb, var(--accent) 55%, transparent)" strokeWidth="2" />
            <path d="M6 256 L200 150 L394 256" fill="none" stroke="color-mix(in srgb, var(--accent) 32%, transparent)" strokeWidth="1.5" />
            <path d="M6 60 L200 150 M394 60 L200 150" fill="none" stroke="color-mix(in srgb, var(--accent) 18%, transparent)" strokeWidth="1.5" />
          </svg>

          {/* Flap (lifts open) */}
          <div
            className="flap absolute inset-0 h-full w-full"
            style={{ zIndex: 30, transformOrigin: "top center" }}
          >
            <svg
              viewBox="0 0 400 264"
              preserveAspectRatio="none"
              className="h-full w-full"
              style={{ filter: "drop-shadow(0 8px 10px rgba(0,0,0,0.2))" }}
            >
              {/* rounded top corners match the body's rx=16 so nothing pokes out */}
              <path d="M1 17 Q1 1 17 1 L383 1 Q399 1 399 17 L200 150 Z" fill="url(#envFlap)" stroke="color-mix(in srgb, var(--accent) 60%, transparent)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M14 14 L200 148 L386 14" fill="none" stroke="color-mix(in srgb, var(--accent) 70%, transparent)" strokeWidth="1" opacity="0.5" />
            </svg>

            {/* Wax seal (sits at the flap point) */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ top: "57%" }}>
              <span
                className="shimmer-ring absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-24 sm:w-24"
                style={{ border: "1px solid color-mix(in srgb, var(--accent) 70%, transparent)", opacity: 0 }}
                aria-hidden
              />
              <div
                className="seal flex h-16 w-16 items-center justify-center rounded-full sm:h-24 sm:w-24"
                style={{
                  background:
                    "radial-gradient(circle at 34% 28%, color-mix(in srgb, var(--primary) 72%, white), var(--primary) 62%, color-mix(in srgb, var(--primary) 70%, black))",
                  boxShadow: "0 6px 16px -4px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,255,255,0.35)",
                  border: "1px solid color-mix(in srgb, var(--accent) 65%, transparent)",
                }}
              >
                <span
                  className="flex items-center font-display text-xl tracking-tight sm:text-3xl"
                  style={{ color: "color-mix(in srgb, var(--surface) 85%, white)" }}
                >
                  {couple.groom.trim()[5] ?? couple.groom[0]}
                  <span className="font-script mx-0.5 text-sm opacity-80 sm:text-base">&amp;</span>
                  {couple.bride.trim()[0]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </button>

      {/* Decorative frame corners (above the envelope) */}
      <CornerFlourish className="absolute left-4 top-4" style={cornerStyle} />
      <CornerFlourish className="absolute right-4 top-4" style={{ ...cornerStyle, transform: "scaleX(-1)" }} />
      <CornerFlourish className="absolute bottom-4 left-4" style={{ ...cornerStyle, transform: "scaleY(-1)" }} />
      <CornerFlourish className="absolute bottom-4 right-4" style={{ ...cornerStyle, transform: "scale(-1,-1)" }} />

      {/* Invitation card — responsive, fades in as the envelope dissolves */}
      <div
        className="letter pointer-events-none absolute inset-0 z-[55] flex items-center justify-center px-6"
        style={{ opacity: 0, transform: "translateY(12px)" }}
      >
        <div
          className="flex w-full max-w-[420px] flex-col items-center rounded-2xl px-6 py-10 text-center sm:px-10 sm:py-12"
          style={{
            background:
              "linear-gradient(160deg, var(--surface), color-mix(in srgb, var(--primary-soft) 28%, var(--surface)))",
            border: "1px solid color-mix(in srgb, var(--accent) 45%, transparent)",
            boxShadow: "0 30px 70px -30px rgba(0,0,0,0.4)",
          }}
        >
          <Monogram className="mb-5" />
          <p
            className="font-body text-xs uppercase tracking-[0.34em]"
            style={{ color: "var(--muted)" }}
          >
            You&apos;re Invited
          </p>
          <p className="font-names mt-3 text-4xl gold-text sm:text-5xl" style={{ lineHeight: 1.3 }}>
            {couple.groom}
          </p>
          <span className="font-script text-2xl" style={{ color: "var(--primary)" }}>
            &amp;
          </span>
          <p className="font-names text-4xl gold-text sm:text-5xl" style={{ lineHeight: 1.3 }}>
            {couple.bride}
          </p>
          <Flourish className="my-4" />
          <p
            className="font-display text-lg tracking-wide sm:text-xl"
            style={{ color: "var(--heading)" }}
          >
            {formatLongDate(events[0].date)}
          </p>
        </div>
      </div>

      {/* Prompt */}
      {!opening && (
        <div className="absolute bottom-6 left-1/2 z-[60] flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-9">
          <span
            className="h-px w-16"
            style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
            aria-hidden
          />
          <p
            className="soft-pulse font-body text-[11px] uppercase tracking-[0.34em] sm:text-xs text-center"
            style={{ color: "var(--muted)" }}
          >
            Tap the envelope to open
          </p>
        </div>
      )}
    </div>
  );
}
