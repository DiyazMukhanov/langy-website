import { useRouter } from "next/router"
import { CHAPTER_5 } from "../../everydayEnglish/shared/navRoutes"
import EveryDayEnglishLayout from "../../everydayEnglish/shared/EverydayEnglishLayout/EverydayEnglishLayout"
import SpeakingLessonLayout from "../../everydayEnglish/SpeakingLessonLayout"
import { useLessonMaterials } from "../../shared/hooks/useLessonMaterials"
import { getSpeaking } from "./shared/api/getSpeaking"

export default function BlocksLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)
    const { isLoading, lessonMaterials } = useLessonMaterials(getSpeaking, lessonNumber)

    return <>
        <EveryDayEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_5}>
            <SpeakingLessonLayout speakingQuestions={lessonMaterials?.data} />
        </EveryDayEnglishLayout>
    </>
}