import WritingLessonLayout from "@/modules/study/advanced/writing/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 13

   const currentLessonData = {
      currentChapter: 'writing',
      currentLesson: lessonNumber,
      level: 'Pre-Intermediate'
   }

   const nextUrl = `/lessons/lesson${lessonNumber}/test`

   return <WritingLessonLayout
      writingTask='Напишите вкратце о вашей мечте (100 слов)'
      nextUrl={nextUrl}
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}