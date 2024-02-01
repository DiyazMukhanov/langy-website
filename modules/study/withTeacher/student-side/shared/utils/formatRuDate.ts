export function formatRussianDate(dateString: string | number | Date) {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    return date.toLocaleDateString('ru-RU', options);
}