import { useRouter } from "next/router"
import { CHAPTER_5 } from "../../everydayEnglish/shared/navRoutes"
import EveryDayEnglishLayout from "../../everydayEnglish/shared/EverydayEnglishLayout/EverydayEnglishLayout"
import SpeakingLessonLayout from "../../everydayEnglish/SpeakingLessonLayout"

export default function BlocksLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)

    return <>
        <EveryDayEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_5}>
            <SpeakingLessonLayout />
        </EveryDayEnglishLayout>
    </>
}