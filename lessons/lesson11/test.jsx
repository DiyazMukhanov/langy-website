import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson11/test-materials";

export default function Video() {
   const lessonNumber = 11
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: 11
 }

   
   return <TestLessonLayout 
   questions={questions} 
   nextUrl='/lessons/lesson12/video'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}