import TestLessonLayout from "@/modules/study/advanced/test/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson10/test-materials";
import { nextLessonUrlGenerator } from "../shared/nextLessonUrlGenerator";

export default function Test() {
   const currentLessonData = {
      currentChapter: 'test',
      currentLesson: 10,
      level: 'Pre-Intermediate'
   }

   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, currentLessonData.currentLesson)

   return <TestLessonLayout
      questions={questions}
      nextUrl={nextUrl}
      currentChapter={currentLessonData.currentChapter}
      lessonNumber={currentLessonData.currentLesson}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}