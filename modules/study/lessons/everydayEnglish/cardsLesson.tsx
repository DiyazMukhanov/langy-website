import { useRouter } from "next/router"
import { CHAPTER_2 } from "../../everydayEnglish/shared/navRoutes"
import EveryDayEnglishLayout from "../../everydayEnglish/shared/EverydayEnglishLayout/EverydayEnglishLayout"
import CardsLessonLayout from "../../everydayEnglish/CardsLessonLayout"
import { phrases } from "@/utils/lessonsMaterials/easyEnglish/lesson1/phrases"

export default function CardsLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)

    return <>
        <EveryDayEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_2}>
            <CardsLessonLayout data={phrases} />
        </EveryDayEnglishLayout>
    </>
}