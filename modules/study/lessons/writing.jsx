import WritingLessonLayout from "@/modules/study/advanced/writing/WritingLessonLayout";
import { useRouter } from "next/router";
import { getLevel } from "./utils/getLevel";
import { writingtasks } from "./utils/titles";

export default function Writing() {
   const router = useRouter()
   const lessonNumber = router.query.lessonNumber

   const level = getLevel(Number(lessonNumber))

   const writingtask = writingtasks[lessonNumber]

   const nextUrl = `/lessons/${lessonNumber}/test`

   const currentLessonData = {
      currentChapter: 'writing',
      currentLesson: lessonNumber,
      level: level
   }

   return <WritingLessonLayout
      writingTask={writingtask}
      nextUrl={nextUrl}
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}