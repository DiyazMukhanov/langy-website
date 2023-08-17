import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 6

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: 6
 }

   return <WritingLessonLayout 
   writingTask='Напишите вкратце о вашем университете (около 150 слов)'
   nextUrl='/lessons/lesson6/test'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}