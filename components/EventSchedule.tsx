"use client";

import { events } from "@/data/wedding";
import { dateChip, formatLongDate, formatWeekday } from "@/lib/format";
import { Reveal } from "./Reveal";
import { VenueMap } from "./VenueMap";
import { Flourish } from "./Ornaments";
import { EventEmblem } from "./Icons";

export function EventSchedule() {
  return (
    <section id="events" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p
            className="font-body text-[11px] uppercase tracking-[0.3em]"
            style={{ color: "var(--muted)" }}
          >
            Join us in celebration
          </p>
          <h2
            className="mt-3 font-display text-4xl sm:text-5xl"
            style={{ color: "var(--heading)" }}
          >
            The Wedding Events
          </h2>
          <Flourish className="mt-6" />
        </Reveal>

        <ol className="mt-12 flex flex-col items-center">
          {events.map((event, i) => {
            const chip = dateChip(event.date);
            return (
              <li key={event.id} className="flex w-full flex-col items-center">
                {/* Timeline connector */}
                {i > 0 && (
                  <div className="flex flex-col items-center py-3" aria-hidden>
                    <span
                      className="block h-10 w-px"
                      style={{
                        background:
                          "linear-gradient(var(--accent), transparent, var(--accent))",
                      }}
                    />
                  </div>
                )}

                {/* Emblem node */}
                <Reveal>
                  <div
                    className="float-y flex h-16 w-16 items-center justify-center rounded-full"
                    style={{
                      color: "var(--accent)",
                      background: "var(--surface)",
                      border: "1px solid color-mix(in srgb, var(--accent) 55%, transparent)",
                      boxShadow:
                        "0 0 0 6px color-mix(in srgb, var(--accent) 10%, transparent)",
                    }}
                  >
                    <EventEmblem name={event.icon} size={30} />
                  </div>
                </Reveal>

                {/* Card */}
                <Reveal delay={80} className="mt-5 w-full">
                  <article
                    className="grid gap-6 rounded-3xl border p-5 sm:p-7 md:grid-cols-2 md:gap-9"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--line)",
                    }}
                  >
                    {/* Details */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl border text-center"
                          style={{
                            borderColor:
                              "color-mix(in srgb, var(--accent) 50%, transparent)",
                            color: "var(--primary)",
                          }}
                        >
                          <span className="font-display text-2xl leading-none">
                            {chip.day}
                          </span>
                          <span className="font-body text-[10px] uppercase tracking-[0.2em]">
                            {chip.month}
                          </span>
                          <span
                            className="font-body text-[10px]"
                            style={{ color: "var(--muted)" }}
                          >
                            {chip.year}
                          </span>
                        </div>
                        <div>
                          <h3
                            className="font-display text-3xl"
                            style={{ color: "var(--heading)" }}
                          >
                            {event.title}
                          </h3>
                          {event.subtitle && (
                            <p
                              className="font-body text-base italic"
                              style={{ color: "var(--muted)" }}
                            >
                              {event.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <dl className="mt-6 flex flex-col gap-3 font-body text-base">
                        <Row label="When">
                          {formatWeekday(event.date)}, {formatLongDate(event.date)}
                          <br />
                          <span style={{ color: "var(--primary)" }}>
                            {event.startTime} – {event.endTime}
                          </span>
                        </Row>
                        <Row label="Where">
                          <span style={{ color: "var(--heading)" }}>
                            {event.venueName}
                          </span>
                        </Row>
                      </dl>
                    </div>

                    {/* Map */}
                    <VenueMap event={event} />
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <dt
        className="w-16 shrink-0 pt-1 text-[11px] uppercase tracking-[0.2em]"
        style={{ color: "var(--muted)" }}
      >
        {label}
      </dt>
      <dd style={{ color: "var(--text)" }}>{children}</dd>
    </div>
  );
}
