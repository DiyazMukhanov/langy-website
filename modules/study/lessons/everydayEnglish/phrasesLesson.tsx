import { useRouter } from "next/router"
import PhrasesLessonLayout from "../../everydayEnglish/PhrasesLessonLayout"
import { CHAPTER_1 } from "../../everydayEnglish/shared/navRoutes"
import { phrases } from "@/utils/lessonsMaterials/easyEnglish/lesson1/phrases"
import EveryDayEnglishLayout from "../../everydayEnglish/shared/EverydayEnglishLayout/EverydayEnglishLayout"

export default function PhrasesLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)

    return <>
        <EveryDayEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_1}>
            <PhrasesLessonLayout data={phrases} />
        </EveryDayEnglishLayout>
    </>
}