export function getCurrentWeekDays() {
  // Get the current UTC date and time
  const now = new Date();
  // Convert it to GMT+5 by adding 5 hours to UTC time
  const localTime = new Date(now.getTime() + 5 * 60 * 60 * 1000);

  const todayDayOfWeek = localTime.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
  // Correct the offset calculation to always land on Monday
  const daysUntilThisMonday = todayDayOfWeek === 0 ? -6 : 1 - todayDayOfWeek;

  const thisMonday = new Date(
    localTime.getFullYear(),
    localTime.getMonth(),
    localTime.getDate() + daysUntilThisMonday
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
      thisMonday.getFullYear(),
      thisMonday.getMonth(),
      thisMonday.getDate() + i
    );
    const day = dayNames[date.getDay()]; // Correctly fetches day name based on the day of week
    const dateStr = `${date.getDate()} ${monthNames[date.getMonth()]}`;
    days.push({ day: day, date: dateStr });
  }

  return days;
}
