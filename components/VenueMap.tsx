"use client";

import { useState } from "react";
import type { WeddingEvent } from "@/data/wedding";
import { useTheme } from "./ThemeProvider";

export function VenueMap({ event }: { event: WeddingEvent }) {
  const { theme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  const q = encodeURIComponent(event.mapQuery || event.venueName);
  const embedSrc = `https://www.google.com/maps?q=${q}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  // Tint the map so it harmonises with the palette; dark themes get an
  // inverted (dark-map) treatment. Hover restores full colour (see globals.css).
  const filter = theme.dark
    ? "invert(0.92) hue-rotate(180deg) saturate(0.7) brightness(0.9) contrast(0.95)"
    : "grayscale(0.25) sepia(0.08) saturate(0.85) contrast(0.95) brightness(1.02)";

  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border"
        style={{ borderColor: "var(--line)" }}
      >
        {!loaded && (
          <div
            className="absolute inset-0 flex items-center justify-center font-body text-sm"
            style={{ background: "var(--bg-2)", color: "var(--muted)" }}
          >
            Loading map…
          </div>
        )}
        <iframe
          title={`Map to ${event.venueName}`}
          src={embedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
          className="map-embed h-full w-full"
          style={{ border: 0, filter }}
        />
        {/* Feather the edges into the card; never blocks map interaction. */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            boxShadow: "inset 0 0 0 1px var(--line)",
            background:
              "radial-gradient(125% 125% at 50% 50%, transparent 62%, color-mix(in srgb, var(--surface) 60%, transparent) 100%)",
          }}
        />
      </div>

      <a
        href={directionsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 font-body text-sm font-medium transition-colors"
        style={{
          borderColor: "var(--primary)",
          color: "var(--primary)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        Get Directions
      </a>
    </div>
  );
}
