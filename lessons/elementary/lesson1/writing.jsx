import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 1

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: 1
 }

   return <WritingLessonLayout 
   writingTask='Пожалуйста напишите короткое эссе на тему "Моя семья"'
   nextUrl='/lessons/lesson1/test'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}