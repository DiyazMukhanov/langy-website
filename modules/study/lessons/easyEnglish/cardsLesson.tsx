import { useRouter } from "next/router"
import EasyEnglishLayout from "../../easyEnglish/shared/EasyEnglishLayout/EasyEnglishLayout"
import { CHAPTER_2 } from "../../easyEnglish/shared/navRoutes"

export default function CardsLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)

    return <>
        <EasyEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_2}>
            Cards
        </EasyEnglishLayout>
    </>
}