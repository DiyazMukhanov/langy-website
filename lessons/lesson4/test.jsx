import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson4/test-materials";

export default function Video() {
   const lessonNumber = 4
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: 4
 }

   
   return <TestLessonLayout 
   questions={questions} 
   nextUrl='/lessons/lesson5/video'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}