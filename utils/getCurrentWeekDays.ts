export function getCurrentWeekDays() {
  const today = new Date();
  const todayDayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
  const daysUntilThisMonday = todayDayOfWeek === 0 ? -6 : 1 - todayDayOfWeek; // Calculate how many days back to this Monday

  const thisMonday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + daysUntilThisMonday
  );

  const days = [];
  const dayNames = ["Пон", "Вт", "Ср", "Чт", "Пт", "Сб", "Вск"]; // Short names in Russian
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
    const day = dayNames[date.getDay()]; // Adjusted day index (simpler as array matches getDay output)
    const dateStr = `${date.getDate()} ${monthNames[date.getMonth()]}`;
    days.push({ day: day, date: dateStr });
  }

  return days;
}
