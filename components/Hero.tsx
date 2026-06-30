"use client";

import { couple, events } from "@/data/wedding";
import { formatLongDate } from "@/lib/format";
import { FloatingPetals } from "./FloatingPetals";
import { CornerFlourish, Flourish, Monogram } from "./Ornaments";

export function Hero() {
  const first = events[0];
  const last = events[events.length - 1];
  const dateRange =
    first.date === last.date
      ? formatLongDate(first.date)
      : `${formatLongDate(first.date)} — ${formatLongDate(last.date)}`;

  return (
    <header className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      <FloatingPetals count={18} />

      {/* Ornamental frame */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center rounded-[2rem] border px-6 py-12 sm:px-12 sm:py-14"
        style={{
          borderColor: "color-mix(in srgb, var(--accent) 45%, transparent)",
          background: "color-mix(in srgb, var(--surface) 55%, transparent)",
          backdropFilter: "blur(3px)",
          boxShadow: "0 30px 80px -40px color-mix(in srgb, var(--accent) 60%, transparent)",
        }}
      >
        {/* Corner flourishes */}
        <CornerFlourish className="absolute left-3 top-3" />
        <CornerFlourish className="absolute right-3 top-3" style={{ transform: "scaleX(-1)" }} />
        <CornerFlourish className="absolute bottom-3 left-3" style={{ transform: "scaleY(-1)" }} />
        <CornerFlourish className="absolute bottom-3 right-3" style={{ transform: "scale(-1,-1)" }} />

        <Monogram className="mb-6 float-y" />

        <p
          className="max-w-md font-body text-xs uppercase leading-relaxed tracking-[0.28em] sm:text-sm"
          style={{ color: "var(--muted)" }}
        >
          {couple.intro}
        </p>

        {/* Groom */}
        <h1 className="mt-6 font-names text-4xl gold-text shimmer sm:text-5xl md:text-6xl">
          {couple.groom}
        </h1>
        <p
          className="mt-2 font-body text-sm italic tracking-[0.14em] sm:text-base"
          style={{ color: "var(--muted)" }}
        >
          {couple.groomFather}
        </p>

        <span
          className="my-3 font-script text-4xl"
          style={{ color: "var(--primary)" }}
        >
          &amp;
        </span>

        {/* Bride */}
        <h1 className="font-names text-4xl gold-text shimmer sm:text-5xl md:text-6xl">
          {couple.bride}
        </h1>
        <p
          className="mt-2 font-body text-sm italic tracking-[0.14em] sm:text-base"
          style={{ color: "var(--muted)" }}
        >
          {couple.brideFather}
        </p>

        <Flourish className="my-8 w-full" />

        <p
          className="font-display text-xl tracking-wide sm:text-2xl"
          style={{ color: "var(--heading)" }}
        >
          {dateRange}
        </p>
        <p
          className="mt-3 font-body text-sm tracking-[0.22em]"
          style={{ color: "var(--accent)" }}
        >
          {couple.hashtag}
        </p>
      </div>
    </header>
  );
}
