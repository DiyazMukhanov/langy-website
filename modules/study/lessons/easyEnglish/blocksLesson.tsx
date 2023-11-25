import { useRouter } from "next/router"
import EasyEnglishLayout from "../../easyEnglish/shared/EasyEnglishLayout/EasyEnglishLayout"
import { CHAPTER_4 } from "../../easyEnglish/shared/navRoutes"

export default function BlocksLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)

    return <>
        <EasyEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_4}>
            Blocks
        </EasyEnglishLayout>
    </>
}