export function checkIfSuscriptionIsNeeded(lessonNumber) {
    if (Number(lessonNumber) !== 1) {
        return true
    }

    return false
}