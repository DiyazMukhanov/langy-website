import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 20

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: lessonNumber,
    level: 'Intermediate'
 }

   const nextUrl = `/lessons/lesson${lessonNumber}/test`
   
   return <WritingLessonLayout 
   writingTask='Напишите вкратце о системе обучения в вашей стране (около 100 слов)'
   nextUrl={nextUrl}
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}