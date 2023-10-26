import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson24/test-materials";

export default function Test() {
   const lessonNumber = 24
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: lessonNumber,
    level: 'Intermediate'
 }

   const nextUrl = `/lessons/lesson1/video`

   return <TestLessonLayout 
   questions={questions} 
   nextUrl={nextUrl}
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}