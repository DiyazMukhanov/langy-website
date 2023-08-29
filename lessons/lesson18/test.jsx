import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson18/test-materials";

export default function Test() {
   const lessonNumber = 18
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: lessonNumber
 }

   const nextUrl = `/lessons/lesson${currentLessonData.currentLesson + 1}/video`

   return <TestLessonLayout 
   questions={questions} 
   nextUrl={nextUrl}
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}