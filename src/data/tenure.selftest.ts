import {
  diffYearsMonths,
  formatPeriod,
  formatTenureLong,
  formatYearsPlus,
  parseMonth,
} from "./tenure.ts";

const t = diffYearsMonths(parseMonth("2015-09-01"), new Date(2026, 9, 19));
if (t.years !== 11 || t.months !== 1) {
  throw new Error(`tenure.selftest: unexpected ${JSON.stringify(t)}`);
}
if (formatYearsPlus(11) !== "11+") throw new Error("yearsPlus");
if (formatTenureLong(t) !== "11 Years, 1 Month") {
  throw new Error(`long: ${formatTenureLong(t)}`);
}
if (formatPeriod("2022-04", "2025-04") !== "Apr 2022 – Apr 2025") {
  throw new Error("period");
}
if (formatPeriod("2025-05") !== "May 2025 – Present") {
  throw new Error("open period");
}

console.log("tenure.selftest ok");
