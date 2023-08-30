import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 3

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: 3,
    level: 'Elementary'
 }

   return <WritingLessonLayout 
   writingTask='Напишите вкратце о вашем дне" (около 150 слов)'
   nextUrl='/lessons/lesson3/test'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}