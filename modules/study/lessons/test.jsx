import TestLessonLayout from "@/modules/study/advanced/test/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson1/test-materials";
import { nextLessonUrlGenerator } from "./shared/nextLessonUrlGenerator";
import { getLevel } from "./utils/getLevel";
import { useRouter } from "next/router";


export default function Test() {
   const router = useRouter()
   const lessonNumber = router.query.lessonNumber

   const level = getLevel(Number(lessonNumber))

   const currentLessonData = {
      currentChapter: 'test',
      currentLesson: lessonNumber,
      level: level
   }
   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, Number(lessonNumber))

   return <TestLessonLayout
      questions={questions}
      nextUrl={nextUrl}
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}