import TestLessonLayout from "@/modules/study/advanced/test/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson3/test-materials";

export default function Test() {
   const lessonNumber = 3
   const currentLessonData = {
      currentChapter: 'test',
      currentLesson: 3,
      level: 'Elementary'
   }


   return <TestLessonLayout
      questions={questions}
      nextUrl='/lessons/lesson4/video'
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}