import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson3/test-materials";

export default function Video() {
   const lessonNumber = 3
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: 3
 }

   
   return <TestLessonLayout 
   questions={questions} 
   nextUrl='/lessons/lesson4/video'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}