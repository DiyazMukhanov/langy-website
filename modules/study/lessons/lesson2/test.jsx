import TestLessonLayout from "@/modules/study/advanced/test/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson2/test-materials";

export default function Test() {
   const lessonNumber = 2
   const currentLessonData = {
      currentChapter: 'test',
      currentLesson: 2,
      level: 'Elementary'
   }


   return <TestLessonLayout
      questions={questions}
      nextUrl='/lessons/lesson3/video'
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}