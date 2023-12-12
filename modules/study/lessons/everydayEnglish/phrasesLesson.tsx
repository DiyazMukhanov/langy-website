import { useRouter } from "next/router"
import PhrasesLessonLayout from "../../everydayEnglish/PhrasesLessonLayout"
import { CHAPTER_1 } from "../../everydayEnglish/shared/navRoutes"
import { phrases } from "@/utils/lessonsMaterials/easyEnglish/lesson1/phrases"
import EveryDayEnglishLayout from "../../everydayEnglish/shared/EverydayEnglishLayout/EverydayEnglishLayout"
import { useLessonMaterials } from "../../shared/hooks/useLessonMaterials"
import { getPhrases } from "./shared/api/getPhrases"
import Loader from "@/modules/shared/Loader"

export default function PhrasesLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)
    const { isLoading, lessonMaterials } = useLessonMaterials(getPhrases, lessonNumber)

    if (isLoading) {
        return <Loader small={false} />
    } else {
        return <>
            <EveryDayEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_1}>
                <PhrasesLessonLayout data={lessonMaterials.data} />
            </EveryDayEnglishLayout>
        </>
    }

}