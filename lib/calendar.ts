import type { WeddingEvent } from "@/data/wedding";

/** "4:00 PM" -> { h: 16, m: 0 } (24-hour). */
function parseTime(t: string): { h: number; m: number } {
  const match = t.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
  if (!match) return { h: 0, m: 0 };
  let h = Number(match[1]);
  const m = Number(match[2]);
  const ap = match[3]?.toUpperCase();
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return { h, m };
}

/** Build a `YYYYMMDDTHHMMSS` stamp from an ISO date + a display time. */
function stamp(isoDate: string, time: string): string {
  const [y, mo, d] = isoDate.split("-");
  const { h, m } = parseTime(time);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${y}${mo}${d}T${pad(h)}${pad(m)}00`;
}

/** A Google Calendar "add event" link for a wedding function. */
export function googleCalendarUrl(event: WeddingEvent): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${stamp(event.date, event.startTime)}/${stamp(event.date, event.endTime)}`,
    location: event.venueName,
    details: event.subtitle ?? "",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
