function createTimeSlots(startDateStr) {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const slotsPerDay = 9; // 9 time slots per day
    const slotDuration = 45; // 45 minutes per slot

    let date = new Date(startDateStr);

    // Adjust the date to the next Monday if it's not already a Monday
    while (date.getDay() !== 1) {
        date.setDate(date.getDate() + 1);
    }

    const timeSlots: any[] = [];

    for (let day = 0; day < 7; day++) {
        for (let slot = 0; slot < slotsPerDay; slot++) {
            const startTime = new Date(date);
            startTime.setHours(9 + slot, 0, 0, 0); // Starting at 9:00 AM and every hour after

            const endTime = new Date(startTime);
            endTime.setMinutes(startTime.getMinutes() + slotDuration); // Adding 45 minutes

            const formattedTime = `${startTime.getHours().toString().padStart(2, '0')}:${startTime.getMinutes().toString().padStart(2, '0')} - ${endTime.getHours().toString().padStart(2, '0')}:${endTime.getMinutes().toString().padStart(2, '0')}`;

            // Correct day index calculation, considering Sunday
            const dayIndex = (date.getDay() + 6) % 7; // Adjusted for Monday start and correct Sunday indexing

            timeSlots.push({
                time: formattedTime,
                day: daysOfWeek[dayIndex],
                status: 'free',
                date: startTime.toString()
            });
        }
        date.setDate(date.getDate() + 1); // Move to the next day
    }

    return timeSlots;
}

// Example usage
export const slots = createTimeSlots('Wed Jan 31 2024');

export const times = [
    '09:00 - 09:45',
    '10:00 - 10:45',
    '11:00 - 11:45',
    '12:00 - 12:45',
    '13:00 - 13:45',
    '14:00 - 14:45',
    '15:00 - 15:45',
    '16:00 - 16:45',
    '17:00 - 17:45'
];
