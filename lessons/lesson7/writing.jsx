import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 7

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: 7
 }

   return <WritingLessonLayout 
   writingTask='Напишите вкратце о вашем питомце (около 150 слов)'
   nextUrl='/lessons/lesson7/test'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}