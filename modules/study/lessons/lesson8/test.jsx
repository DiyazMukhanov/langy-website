import TestLessonLayout from "@/modules/study/advanced/test/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson8/test-materials";

export default function Test() {
   const lessonNumber = 8
   const currentLessonData = {
      currentChapter: 'test',
      currentLesson: 8,
      level: 'Elementary'
   }


   return <TestLessonLayout
      questions={questions}
      nextUrl='/lessons/lesson9/video'
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}