import { useRouter } from "next/router"
import EasyEnglishLayout from "../../easyEnglish/shared/EasyEnglishLayout/EasyEnglishLayout"
import PhrasesLessonLayout from "../../easyEnglish/PhrasesLessonLayout"
import { CHAPTER_1 } from "../../easyEnglish/shared/navRoutes"

export default function PhrasesLesson() {
    const router = useRouter()
    const lessonNumber = router.query.number

    return <>
        <EasyEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_1}>
            <PhrasesLessonLayout />
        </EasyEnglishLayout>
    </>
}