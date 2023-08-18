import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson2/test-materials";

export default function Video() {
   const lessonNumber = 2
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: 2
 }

   
   return <TestLessonLayout 
   questions={questions} 
   nextUrl='/lessons/lesson3/video'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}