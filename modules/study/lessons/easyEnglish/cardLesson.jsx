import { useRouter } from "next/router"
import EasyEnglishLayout from "../../easyEnglish/shared/EasyEnglishLayout/EasyEnglishLayout"
import CardLessonLayout from "../../easyEnglish/CardLessonLayout"

export default function CardLesson() {
    const router = useRouter()
    const lessonNumber = router.query.number

    return <>
        <EasyEnglishLayout lessonNumber={lessonNumber} >
            <CardLessonLayout />
        </EasyEnglishLayout>
    </>
}