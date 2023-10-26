import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 10

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: 10,
    level: 'Pre-Intermediate'
 }

   return <WritingLessonLayout 
   writingTask='Напишите вкратце о том как вы проводите свободное время (150 слов)'
   nextUrl='/lessons/lesson10/test'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}