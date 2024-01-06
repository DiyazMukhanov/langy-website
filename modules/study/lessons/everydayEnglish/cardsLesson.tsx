import { useRouter } from "next/router"
import { CHAPTER_2 } from "../../everydayEnglish/shared/navRoutes"
import EveryDayEnglishLayout from "../../everydayEnglish/shared/EverydayEnglishLayout/EverydayEnglishLayout"
import CardsLessonLayout from "../../everydayEnglish/CardsLessonLayout"
import { useLessonMaterials } from "../../shared/hooks/useLessonMaterials"
import { getPhrases } from "./shared/api/getPhrases"
import Loader from "@/modules/shared/Loader"

export default function CardsLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)
    const { isLoading, lessonMaterials } = useLessonMaterials(getPhrases, lessonNumber)

    if (isLoading) {
        return <Loader small={false} />
    }

    return <>
        <EveryDayEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_2}>
            <CardsLessonLayout data={lessonMaterials.data} />
        </EveryDayEnglishLayout>
    </>
}