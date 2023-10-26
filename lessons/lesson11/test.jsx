import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson11/test-materials";

export default function Test() {
   const lessonNumber = 11
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: 11,
    level: 'Pre-Intermediate'
 }

   
   return <TestLessonLayout 
   questions={questions} 
   nextUrl='/lessons/lesson12/video'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}