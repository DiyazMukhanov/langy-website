import { useRouter } from "next/router"
import EasyEnglishLayout from "../../easyEnglish/EasyEnglishLayout"

export default function CardLesson() {
    const router = useRouter()
    const lessonNumber = router.query.number

    return <>
        <EasyEnglishLayout lessonNumber={lessonNumber} />
    </>
}