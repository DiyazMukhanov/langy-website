import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 15

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: lessonNumber,
    level: 'Pre-Intermediate'
 }

   const nextUrl = `/lessons/lesson${lessonNumber}/test`
   
   return <WritingLessonLayout 
   writingTask='Напишите вкратце каким видом спорта вы занимаетесь или любите (около 100 слов)'
   nextUrl={nextUrl}
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}