import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson8/test-materials";

export default function Video() {
   const lessonNumber = 8
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: 8
 }

   
   return <TestLessonLayout 
   questions={questions} 
   nextUrl='/lessons/lesson9/video'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}