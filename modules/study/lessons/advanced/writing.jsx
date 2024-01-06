import WritingLessonLayout from "@/modules/study/advanced/writing/WritingLessonLayout";
import { useRouter } from "next/router";
import { getLevel } from "../utils/getLevel";
import { writingtasks } from "../utils/titles";
import { nextLessonUrlGenerator } from "../shared/nextLessonUrlGenerator";
import { checkIfSuscriptionIsNeeded } from "./shared/utils/checkIfSubscriptionNeeded";

export default function Writing() {
   const router = useRouter()
   const lessonNumber = router.query.lessonNumber

   const level = getLevel(Number(lessonNumber))

   const writingtask = writingtasks[lessonNumber]

   const currentLessonData = {
      currentChapter: 'writing',
      currentLesson: lessonNumber,
      level: level
   }

   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, Number(lessonNumber))

   const subscriptionIsNeededStatus = checkIfSuscriptionIsNeeded(lessonNumber)

   return <WritingLessonLayout
      writingTask={writingtask}
      nextUrl={nextUrl}
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={subscriptionIsNeededStatus}
   />
}