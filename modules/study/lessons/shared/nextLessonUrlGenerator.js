export const nextLessonUrlGenerator = (chapterName, lessonNumber) => {
    const nextChapter = {
        video: "audio",
        audio: "writing",
        writing: "test",
        test: "video"
    }

    if (chapterName === "test") {
        if (lessonNumber === 24) {
            lessonNumber = 1
        } else {
            lessonNumber++
        }
    }

    return `/lessons/${lessonNumber}/${nextChapter[chapterName]}`
}