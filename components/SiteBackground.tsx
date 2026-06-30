"use client";

import { useId } from "react";

/**
 * Page background: a tiled damask-style floral motif with a soft colour wash.
 * Fixed, full-viewport, and theme-aware (colours come from CSS variables).
 */
export function SiteBackground() {
  const id = useId().replace(/:/g, "");
  return (
    <div className="site-bg site-bg--wash" aria-hidden>
      <svg className="absolute inset-0 h-full w-full" style={{ opacity: 0.16 }}>
        <defs>
          <pattern id={id} width="120" height="160" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="var(--accent)" strokeWidth="1.1">
              <Blossom cx={60} cy={40} />
              <Blossom cx={0} cy={120} />
              <Blossom cx={120} cy={120} />
              <path d="M60 56 C 40 80, 30 100, 0 120 M60 56 C 80 80, 90 100, 120 120" />
              <path d="M60 40 C 60 18, 60 8, 60 0" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

function Blossom({ cx, cy }: { cx: number; cy: number }) {
  const petals = [0, 60, 120, 180, 240, 300];
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {petals.map((a) => (
        <ellipse key={a} cx="0" cy="-9" rx="4.5" ry="9" transform={`rotate(${a})`} />
      ))}
      <circle cx="0" cy="0" r="2.2" fill="var(--accent)" stroke="none" />
    </g>
  );
}
