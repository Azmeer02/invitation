"use client";

import { useEffect, useState } from "react";
import { countdownTargetISO, events } from "@/data/wedding";
import { formatLongDate } from "@/lib/format";
import { Reveal } from "./Reveal";
import { Flourish } from "./Ornaments";

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function getRemaining(target: number): Remaining {
  const diff = Math.max(0, target - Date.now());
  const seconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

const UNITS: { key: keyof Remaining; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export function Countdown() {
  const target = new Date(countdownTargetISO).getTime();
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(getRemaining(target));
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const done =
    remaining &&
    remaining.days === 0 &&
    remaining.hours === 0 &&
    remaining.minutes === 0 &&
    remaining.seconds === 0;

  const firstEvent = events[0];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <Reveal
        className="relative mx-auto max-w-3xl rounded-3xl border px-4 py-12 text-center sm:px-12"
        style={{
          background: "color-mix(in srgb, var(--surface) 70%, transparent)",
          borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
        }}
      >
        <p
          className="font-body text-[11px] uppercase tracking-[0.3em]"
          style={{ color: "var(--muted)" }}
        >
          {done ? "The celebrations have begun" : "Counting down to the big day"}
        </p>
        <h2
          className="mt-3 font-display text-3xl sm:text-4xl"
          style={{ color: "var(--heading)" }}
        >
          {firstEvent.title}
        </h2>
        <p
          className="mt-1 font-body text-sm"
          style={{ color: "var(--primary)" }}
        >
          {formatLongDate(firstEvent.date)} · {firstEvent.startTime}
        </p>

        <Flourish className="my-7" />

        <div className="grid w-full grid-cols-4 gap-2 sm:gap-4">
          {UNITS.map((unit) => (
            <div
              key={unit.key}
              className="flex flex-col items-center rounded-xl border px-1 py-4 sm:rounded-2xl sm:px-3 sm:py-6"
              style={{
                background: "var(--surface)",
                borderColor: "var(--line)",
              }}
            >
              <span
                className="font-display text-2xl tabular-nums leading-none sm:text-5xl"
                style={{ color: "var(--heading)" }}
              >
                {String(remaining ? remaining[unit.key] : 0).padStart(2, "0")}
              </span>
              <span
                className="mt-2 font-body text-[9px] uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.2em]"
                style={{ color: "var(--muted)" }}
              >
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
