import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson10/test-materials";

export default function Test() {
   const lessonNumber = 10
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: 10
 }

   
   return <TestLessonLayout 
   questions={questions} 
   nextUrl='/lessons/lesson10/video'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}