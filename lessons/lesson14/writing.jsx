import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 14

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: lessonNumber
 }

   const nextUrl = `/lessons/lesson${lessonNumber}/test`
   
   return <WritingLessonLayout 
   writingTask='Напишите вкратце о посещении мероприятия (около 100 слов)'
   nextUrl={nextUrl}
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}