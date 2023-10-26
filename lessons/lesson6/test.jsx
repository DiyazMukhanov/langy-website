import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson6/test-materials";

export default function Test() {
   const lessonNumber = 6
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: 6,
    level: 'Elementary'
 }

   
   return <TestLessonLayout 
   questions={questions} 
   nextUrl='/lessons/lesson7/video'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}