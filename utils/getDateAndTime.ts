export function getDateAndTime(isoDateString: string) {
  // Parse the ISO date string into a Date object
  const dateUTC = new Date(isoDateString);

  // Calculate the GMT+5 time
  const gmt5Time = new Date(
    dateUTC.getTime() + (5 * 60 + dateUTC.getTimezoneOffset()) * 60000
  );

  // Define arrays for Russian month names and days
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  // Format the date and time
  const date = `${gmt5Time.getDate()} ${months[gmt5Time.getMonth()]}`;
  const time = `${gmt5Time.getHours().toString().padStart(2, "0")}:${gmt5Time
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return { date, time };
}
