export type Tenure = { years: number; months: number };

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** Parse `YYYY-MM` or `YYYY-MM-DD` as local month start (day defaults to 1). */
export function parseMonth(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

export function diffYearsMonths(from: Date, to: Date = new Date()): Tenure {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  if (to.getDate() < from.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years: Math.max(0, years), months: Math.max(0, months) };
}

export function formatMonthYear(iso: string): string {
  const date = parseMonth(iso);
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

/** Start–end only. Open end → "Present". */
export function formatPeriod(start: string, end?: string | null): string {
  const startLabel = formatMonthYear(start);
  if (!end) return `${startLabel} – Present`;
  return `${startLabel} – ${formatMonthYear(end)}`;
}

export function formatYearsPlus(years: number): string {
  return `${years}+`;
}

export function formatTenureLong({ years, months }: Tenure): string {
  const y = `${years} Year${years === 1 ? "" : "s"}`;
  const m = `${months} Month${months === 1 ? "" : "s"}`;
  return `${y}, ${m}`;
}
