import { startOfDay } from "date-fns";

/**
 * Returns whether the day of `date` is before the day of `dateToCompare`
 * @param date
 * @param dateToCompare
 */
export default function isBeforeDay(
  date: Date | number | string,
  dateToCompare: Date | number | string,
): boolean {
  return startOfDay(date).getTime() < startOfDay(dateToCompare).getTime();
}
