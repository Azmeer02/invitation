"use client";

import { invocation } from "@/data/wedding";
import { Reveal } from "./Reveal";
import { Flourish, Monogram } from "./Ornaments";

export function Invocation() {
  if (!invocation.enabled) return null;
  return (
    <section className="px-6 py-16 sm:py-20">
      <Reveal
        className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border px-6 py-12 text-center sm:px-14 sm:py-14"
        style={{
          background: "color-mix(in srgb, var(--surface) 70%, transparent)",
          borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
        }}
      >
        {invocation.arabic && (
          <p
            className="font-display text-2xl leading-relaxed sm:text-3xl"
            style={{ color: "var(--primary)" }}
            dir="rtl"
            lang="ar"
          >
            {invocation.arabic}
          </p>
        )}
        {invocation.translation && (
          <p
            className="mt-3 font-body text-sm italic tracking-wide sm:text-base"
            style={{ color: "var(--muted)" }}
          >
            {invocation.translation}
          </p>
        )}

        <Flourish className="my-7" />

        <p
          className="font-display text-xl leading-relaxed sm:text-2xl"
          style={{ color: "var(--text)" }}
        >
          {invocation.message}
        </p>

        <Monogram className="mt-9" />
      </Reveal>
    </section>
  );
}
