import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";
import { questions } from "@/utils/lessonsMaterials/lesson7/test-materials";

export default function Video() {
   const lessonNumber = 7
   const currentLessonData = {
    currentChapter: 'test',
    currentLesson: 7
 }

   
   return <TestLessonLayout 
   questions={questions} 
   nextUrl='/lessons/lesson8/video'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}