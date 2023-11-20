export const getLevel = (lessonNumber) => {
    let level

    if (lessonNumber < 9) {
        level = 'Elementary'
    }

    if (lessonNumber > 8 && lessonNumber < 17) {
        level = 'Pre-intermediate'
    }

    if (lessonNumber > 16 && lessonNumber < 25) {
        level = 'Intermediate'
    }

    return level
}