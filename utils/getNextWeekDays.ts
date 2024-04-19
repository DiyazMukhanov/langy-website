export function getNextWeekDays() {
  const today = new Date();
  const todayDayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
  // Adjust to ensure the calculation accounts for starting the next week on Monday
  const daysUntilNextMonday = todayDayOfWeek === 0 ? 1 : 8 - todayDayOfWeek;

  const nextMonday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + daysUntilNextMonday
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
