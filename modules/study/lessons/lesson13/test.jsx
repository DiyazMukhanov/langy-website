import TestLessonLayout from "@/modules/study/advanced/test/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson13/test-materials";

export default function Test() {
   const lessonNumber = 13
   const currentLessonData = {
      currentChapter: 'test',
      currentLesson: lessonNumber,
      level: 'Pre-Intermediate'
   }

   const nextUrl = `/lessons/lesson${currentLessonData.currentLesson + 1}/video`

   return <TestLessonLayout
      questions={questions}
      nextUrl={nextUrl}
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}