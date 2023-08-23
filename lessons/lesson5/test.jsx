import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson5/test-materials";

export default function Video() {
   const lessonNumber = 5
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: 5
 }

   
   return <TestLessonLayout 
   questions={questions} 
   nextUrl='/lessons/lesson6/video'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}