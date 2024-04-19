export function getCurrentWeekDays() {
  const today = new Date();
  const todayDayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
  // Correct the offset calculation to always land on Monday
  const daysUntilThisMonday = todayDayOfWeek === 0 ? -6 : 1 - todayDayOfWeek;

  const thisMonday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + daysUntilThisMonday
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
