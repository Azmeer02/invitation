"use client";

import { closing } from "@/data/wedding";
import { Reveal } from "./Reveal";

export function Closing() {
  if (!closing.enabled) return null;
  return (
    <section className="px-6 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span
          className="font-script text-6xl"
          style={{ color: "color-mix(in srgb, var(--accent) 55%, transparent)" }}
          aria-hidden
        >
          ❝
        </span>
        <blockquote
          className="-mt-4 font-display text-2xl leading-relaxed sm:text-3xl"
          style={{ color: "var(--text)" }}
        >
          {closing.quote}
        </blockquote>
        {closing.source && (
          <p
            className="mt-5 font-body text-sm tracking-[0.18em]"
            style={{ color: "var(--accent)" }}
          >
            {closing.source}
          </p>
        )}
      </Reveal>
    </section>
  );
}
