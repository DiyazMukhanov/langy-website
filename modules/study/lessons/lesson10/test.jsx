import TestLessonLayout from "@/modules/study/advanced/test/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson10/test-materials";

export default function Test() {
   const lessonNumber = 10
   const currentLessonData = {
      currentChapter: 'test',
      currentLesson: 10,
      level: 'Pre-Intermediate'
   }


   return <TestLessonLayout
      questions={questions}
      nextUrl='/lessons/lesson11/video'
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}