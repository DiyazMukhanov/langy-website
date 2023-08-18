import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 2

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: 2
 }

   return <WritingLessonLayout 
   writingTask='Напишите вкратце о вашей квартире\комнате" (около 150 слов)'
   nextUrl='/lessons/lesson2/test'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}