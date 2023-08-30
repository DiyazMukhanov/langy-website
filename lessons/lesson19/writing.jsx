import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 19

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: lessonNumber,
    level: 'Intermediate'
 }

   const nextUrl = `/lessons/lesson${lessonNumber}/test`
   
   return <WritingLessonLayout 
   writingTask='Напишите вкратце о вашем образовании (около 100 слов)'
   nextUrl={nextUrl}
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}