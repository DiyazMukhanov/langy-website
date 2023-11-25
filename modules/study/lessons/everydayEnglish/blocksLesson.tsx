import { useRouter } from "next/router"
import { CHAPTER_4 } from "../../everydayEnglish/shared/navRoutes"
import EveryDayEnglishLayout from "../../everydayEnglish/shared/EverydayEnglishLayout/EverydayEnglishLayout"

export default function BlocksLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)

    return <>
        <EveryDayEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_4}>
            Blocks
        </EveryDayEnglishLayout>
    </>
}