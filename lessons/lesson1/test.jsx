import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson1/test-materials";

export default function Video() {
   const lessonNumber = 1
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: 1
 }

   
   return <TestLessonLayout 
   questions={questions} 
   nextUrl='/lessons/lesson2/video'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}