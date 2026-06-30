"use client";

import { useMemo } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * Subtle drifting particles behind the content. The shape adapts to the active
 * theme's motif. Values are derived deterministically from the index so server
 * and client markup match (no hydration mismatch, no Math.random).
 */
export function FloatingPetals({ count = 16 }: { count?: number }) {
  const { theme } = useTheme();

  const particles = useMemo(() => {
    // Deterministic pseudo-randomness from a sine hash.
    const rand = (i: number, salt: number) => {
      const x = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }, (_, i) => {
      const size = 8 + rand(i, 1) * 16; // 8–24px
      return {
        left: rand(i, 2) * 100, // vw %
        size,
        duration: 14 + rand(i, 3) * 14, // 14–28s
        delay: -rand(i, 4) * 20, // negative => staggered, already mid-flight
        drift: (rand(i, 5) - 0.5) * 160, // -80..80px
        opacity: 0.25 + rand(i, 6) * 0.35,
      };
    });
  }, [count]);

  const isSparkle = theme.motif === "shimmer" || theme.motif === "ornament";
  const isDot = theme.motif === "dots";

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: isDot ? p.size * 0.5 : p.size,
            height: isDot ? p.size * 0.5 : p.size,
            borderRadius: isDot ? "50%" : isSparkle ? "2px" : undefined,
            background: isSparkle ? "var(--accent)" : "var(--primary-soft)",
            transform: isSparkle ? "rotate(45deg)" : undefined,
            ["--petal-duration" as string]: `${p.duration}s`,
            ["--petal-delay" as string]: `${p.delay}s`,
            ["--petal-drift" as string]: `${p.drift}px`,
            ["--petal-opacity" as string]: `${p.opacity}`,
          }}
        />
      ))}
    </div>
  );
}
