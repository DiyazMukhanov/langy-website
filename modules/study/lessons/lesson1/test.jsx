import TestLessonLayout from "@/modules/study/advanced/test/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson1/test-materials";

export default function Test() {
   const lessonNumber = 1
   const currentLessonData = {
      currentChapter: 'test',
      currentLesson: 1,
      level: 'Elementary'
   }


   return <TestLessonLayout
      questions={questions}
      nextUrl='/lessons/lesson2/video'
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}