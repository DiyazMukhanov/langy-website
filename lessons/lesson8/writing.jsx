import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 8

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: 8,
    level: 'Elementary'
 }

   return <WritingLessonLayout 
   writingTask='Напишите вкратце о вашем любимом школьном предмете (150 слов)'
   nextUrl='/lessons/lesson8/test'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}