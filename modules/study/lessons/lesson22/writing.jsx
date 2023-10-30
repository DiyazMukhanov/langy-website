import WritingLessonLayout from "@/modules/study/advanced/writing/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 22

   const currentLessonData = {
      currentChapter: 'writing',
      currentLesson: lessonNumber,
      level: 'Intermediate'
   }

   const nextUrl = `/lessons/lesson${lessonNumber}/test`

   return <WritingLessonLayout
      writingTask='Напишите вкратце о вашем любимом времени года (около 100 слов)'
      nextUrl={nextUrl}
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}