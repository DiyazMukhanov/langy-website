import { useRouter } from "next/router"
import { CHAPTER_4 } from "../../everydayEnglish/shared/navRoutes"
import EveryDayEnglishLayout from "../../everydayEnglish/shared/EverydayEnglishLayout/EverydayEnglishLayout"
import BlocksLessonLayout from "../../everydayEnglish/BlocksLessonLayout"
import { useLessonMaterials } from "../../shared/hooks/useLessonMaterials"
import { getBlocks } from "./shared/api/getBlocks"
import Loader from "@/modules/shared/Loader"

export default function BlocksLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)
    const { isLoading, lessonMaterials } = useLessonMaterials(getBlocks, lessonNumber)

    if (isLoading) {
        return <Loader small={false} />
    }

    return <>
        <EveryDayEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_4}>
            <BlocksLessonLayout blocks={lessonMaterials.data} />
        </EveryDayEnglishLayout>
    </>
}