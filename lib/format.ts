// Date formatting helpers shared across sections.

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
];

/** Parse a `YYYY-MM-DD` string into its parts (timezone-safe, no Date shift). */
function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d, weekday: new Date(Date.UTC(y, m - 1, d)).getUTCDay() };
}

/** e.g. "13 January 2027" */
export function formatLongDate(iso: string): string {
  const { y, m, d } = parts(iso);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** e.g. "Wednesday" */
export function formatWeekday(iso: string): string {
  return WEEKDAYS[parts(iso).weekday];
}

/** e.g. { day: "13", month: "Jan", year: "2027" } */
export function dateChip(iso: string) {
  const { y, m, d } = parts(iso);
  return {
    day: String(d).padStart(2, "0"),
    month: MONTHS[m - 1].slice(0, 3),
    year: String(y),
  };
}
