import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 9

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: 9
 }

   return <WritingLessonLayout 
   writingTask='Напишите вкратце о том как вы проводите свободное время (150 слов)'
   nextUrl='/lessons/lesson9/test'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}