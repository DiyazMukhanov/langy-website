import { useRouter } from "next/router"
import { CHAPTER_3 } from "../../everydayEnglish/shared/navRoutes"
import EveryDayEnglishLayout from "../../everydayEnglish/shared/EverydayEnglishLayout/EverydayEnglishLayout"
import DialogueLessonLayout from "../../everydayEnglish/DialogueLessonLayout"
import { useLessonMaterials } from "../../shared/hooks/useLessonMaterials"
import { getDialogues } from "./shared/api/getDialogues"
import Loader from "@/modules/shared/Loader"

export default function DialogueLesson() {
    const router = useRouter()
    const lessonNumber = Number(router.query.number)
    const { isLoading, lessonMaterials } = useLessonMaterials(getDialogues, lessonNumber)

    if (isLoading) {
        return <Loader small={false} />
    }

    return <>
        <EveryDayEnglishLayout lessonNumber={lessonNumber} chapter={CHAPTER_3}>
            <DialogueLessonLayout data={lessonMaterials.data} />
        </EveryDayEnglishLayout>
    </>
}