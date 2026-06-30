"use client";

import { story } from "@/data/wedding";
import { Reveal } from "./Reveal";
import { Flourish } from "./Ornaments";

export function Story() {
  if (!story.enabled) return null;
  return (
    <section className="px-6 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Flourish className="mb-7" />
        <h2
          className="font-names text-5xl gold-text sm:text-6xl"
          style={{ lineHeight: 1.2 }}
        >
          {story.heading}
        </h2>
        <p
          className="mt-6 font-display text-xl leading-relaxed sm:text-2xl"
          style={{ color: "var(--text)" }}
        >
          {story.body}
        </p>
      </Reveal>
    </section>
  );
}
