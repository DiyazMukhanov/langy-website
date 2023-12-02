import { useRouter } from "next/router"
import { CHAPTER_3 } from "../../everydayEnglish/shared/navRoutes"
import EveryDayEnglishLayout from "../../everydayEnglish/shared/EverydayEnglishLayout/EverydayEnglishLayout"
import DialogueLessonLayout from "../../everydayEnglish/DialogueLessonLayout"

export default function DialogueLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)

    return <>
        <EveryDayEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_3}>
            <DialogueLessonLayout />
        </EveryDayEnglishLayout>
    </>
}