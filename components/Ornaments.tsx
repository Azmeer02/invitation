"use client";

import { useId } from "react";
import { couple } from "@/data/wedding";

/**
 * Subtle full-bleed repeating motif behind a section. Uses the theme accent
 * colour at low opacity so it adapts to every theme. Decorative only.
 */
export function PatternBackground({
  opacity = 0.07,
  scale = 56,
  className = "",
}: {
  opacity?: number;
  scale?: number;
  className?: string;
}) {
  const id = useId().replace(/[:]/g, "");
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
    >
      <defs>
        <pattern
          id={id}
          width={scale}
          height={scale}
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="var(--accent)" strokeWidth="1">
            {/* four-petal flower */}
            <path
              d={`M${scale / 2} ${scale * 0.18}
                 C ${scale * 0.62} ${scale * 0.38}, ${scale * 0.62} ${scale * 0.38}, ${scale * 0.82} ${scale / 2}
                 C ${scale * 0.62} ${scale * 0.62}, ${scale * 0.62} ${scale * 0.62}, ${scale / 2} ${scale * 0.82}
                 C ${scale * 0.38} ${scale * 0.62}, ${scale * 0.38} ${scale * 0.62}, ${scale * 0.18} ${scale / 2}
                 C ${scale * 0.38} ${scale * 0.38}, ${scale * 0.38} ${scale * 0.38}, ${scale / 2} ${scale * 0.18} Z`}
            />
            <circle cx={scale / 2} cy={scale / 2} r="1.6" fill="var(--accent)" stroke="none" />
            {/* corner dots create a lattice feel */}
            <circle cx="0" cy="0" r="1" fill="var(--accent)" stroke="none" />
            <circle cx={scale} cy="0" r="1" fill="var(--accent)" stroke="none" />
            <circle cx="0" cy={scale} r="1" fill="var(--accent)" stroke="none" />
            <circle cx={scale} cy={scale} r="1" fill="var(--accent)" stroke="none" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** An ornamental horizontal divider with mirrored swashes and a centre jewel. */
export function Flourish({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`} aria-hidden>
      <svg
        width="220"
        height="24"
        viewBox="0 0 220 24"
        fill="none"
        className="max-w-full"
        style={{ color: "var(--accent)" }}
      >
        <path
          d="M2 12 H70 M150 12 H218"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M70 12 c 8 0 10 -7 16 -7 s 8 7 16 7 M150 12 c -8 0 -10 -7 -16 -7 s -8 7 -16 7"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <g transform="translate(110 12)">
          <path
            d="M0 -8 L5 0 L0 8 L-5 0 Z"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="color-mix(in srgb, var(--accent) 25%, transparent)"
          />
        </g>
      </svg>
    </div>
  );
}

/** Initials inside an ornamental ring — a little crest for the couple. */
export function Monogram({ className = "" }: { className?: string }) {
  const g = couple.groom.trim()[5] ?? "";
  const b = couple.bride.trim()[0] ?? "";
  return (
    <div
      className={`relative flex h-24 w-24 items-center justify-center rounded-full ${className}`}
      style={{
        border: "1px solid color-mix(in srgb, var(--accent) 60%, transparent)",
        boxShadow: "0 0 0 5px color-mix(in srgb, var(--accent) 12%, transparent)",
      }}
      aria-hidden
    >
      <span
        className="font-display text-2xl"
        style={{ color: "var(--accent)" }}
      >
        {g}
        <span className="font-script text-xl" style={{ color: "var(--primary)" }}>
          &amp;
        </span>
        {b}
      </span>
    </div>
  );
}

/** Decorative SVG corner flourish; rotate with the `rotate` style per corner. */
export function CornerFlourish({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden
      className={className}
      style={{ color: "var(--accent)", ...style }}
    >
      <path
        d="M6 6 H30 M6 6 V30"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M6 18 C 22 18, 30 26, 30 42 M18 6 C 18 22, 26 30, 42 30"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      <circle cx="6" cy="6" r="2.2" fill="currentColor" />
    </svg>
  );
}
