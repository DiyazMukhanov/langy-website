import { useRouter } from "next/router"
import EasyEnglishLayout from "../../easyEnglish/shared/EasyEnglishLayout/EasyEnglishLayout"
import { CHAPTER_3 } from "../../easyEnglish/shared/navRoutes"

export default function DialogueLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)

    return <>
        <EasyEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_3}>
            Dialogue
        </EasyEnglishLayout>
    </>
}