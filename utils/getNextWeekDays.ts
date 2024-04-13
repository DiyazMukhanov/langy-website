export function getNextWeekDays() {
  const today = new Date();
  const todayDayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
  const daysUntilNextMonday = (8 - todayDayOfWeek) % 7; // Calculate how many days until next Monday
  const nextMonday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + daysUntilNextMonday
  );

  const days: any = [];
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
      nextMonday.getFullYear(),
      nextMonday.getMonth(),
      nextMonday.getDate() + i
    );
    const day = dayNames[date.getDay() - 1 >= 0 ? date.getDay() - 1 : 6]; // Adjust for array index (-1 because array starts at 0)
    const dateStr = `${date.getDate()} ${monthNames[date.getMonth()]}`;
    days.push({ day: day, date: dateStr });
  }

  return days;
}
