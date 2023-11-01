import TestLessonLayout from "@/modules/study/advanced/test/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson9/test-materials";

export default function Test() {
   const lessonNumber = 9
   const currentLessonData = {
      currentChapter: 'test',
      currentLesson: 9,
      level: 'Pre-Intermediate'
   }


   return <TestLessonLayout
      questions={questions}
      nextUrl='/lessons/lesson10/video'
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}