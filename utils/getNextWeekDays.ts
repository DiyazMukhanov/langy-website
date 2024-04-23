export function getNextWeekDays() {
  // Create a new date object for 'now'
  const now = new Date();
  // Manually adjust for GMT+5 timezone by adding 5 hours to UTC
  const localTime = new Date(now.getTime() + 5 * 60 * 60 * 1000);

  const todayDayOfWeek = localTime.getDay(); // Adjusted day of week for GMT+5
  // Calculate days until next Monday
  const daysUntilNextMonday = todayDayOfWeek === 0 ? 1 : 8 - todayDayOfWeek;

  const nextMonday = new Date(
    localTime.getFullYear(),
    localTime.getMonth(),
    localTime.getDate() + daysUntilNextMonday
  );

  const days = [];
  const dayNames = ["Вск", "Пон", "Вт", "Ср", "Чт", "Пт", "Сб"]; // Short names in Russian
  const monthNames = [
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
  ]; // Month names in Russian

  for (let i = 0; i < 7; i++) {
    const date = new Date(
      nextMonday.getFullYear(),
      nextMonday.getMonth(),
      nextMonday.getDate() + i
    );
    const day = dayNames[date.getDay()]; // Correctly fetches day name based on the day of week
    const dateStr = `${date.getDate()} ${monthNames[date.getMonth()]}`;
    days.push({ day: day, date: dateStr });
  }

  return days;
}
