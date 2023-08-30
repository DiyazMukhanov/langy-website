export function getThisLessonNumber(lessonNumber) {
    let thisLessonNumber
    if(lessonNumber < 9) {
        thisLessonNumber = lessonNumber
    }

    if(lessonNumber > 8 && lessonNumber < 17 ) {
        thisLessonNumber = lessonNumber - 8
    }

    if(lessonNumber > 16 ) {
        thisLessonNumber = lessonNumber - 16 
    }

    return thisLessonNumber
}