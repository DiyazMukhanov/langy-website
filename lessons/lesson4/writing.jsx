import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 4

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: 4
 }

   return <WritingLessonLayout 
   writingTask='Напишите вкратце о вашем хобби (около 150 слов)'
   nextUrl='/lessons/lesson4/test'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}