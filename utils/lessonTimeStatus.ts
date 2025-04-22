export function lessonTimeStatus(lessonDate: any) {
  // Helper to get a Date object in GMT+5
  function getDateInGMT5(date: any) {
    const localDate = new Date(date);
    const offset = localDate.getTimezoneOffset() * 60000; // Convert timezone offset to milliseconds
    const gmt5Time = new Date(localDate.getTime() + offset + 5 * 3600 * 1000); // GMT+5
    return gmt5Time;
  }

  // Get the current time in GMT+5
  const nowGMT5 = getDateInGMT5(new Date());

  // Convert lesson date to GMT+5
  const lessonGMT5 = getDateInGMT5(lessonDate);

  // Check if the lesson is today
  const isToday = nowGMT5.toDateString() === lessonGMT5.toDateString();

  // Check if the lesson has already finished (assuming lesson time is the start time)
  const alreadyFinished = nowGMT5 > lessonGMT5;

  return { alreadyFinished, isToday };
}
