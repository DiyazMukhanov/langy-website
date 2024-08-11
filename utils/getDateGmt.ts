export function getDateInGmtFive(dateStr: string) {
  const date = new Date(dateStr);
  const offset = 5 * 60 * 60 * 1000; // GMT+5 in milliseconds
  const localDate = new Date(date.getTime() + offset);
  const weekday = localDate.getUTCDay(); // Sunday - 0, Monday - 1, etc.
  const hour = localDate.getUTCHours();
  return { weekday, hour };
}
