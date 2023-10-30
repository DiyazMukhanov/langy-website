import WritingLessonLayout from "@/modules/study/advanced/writing/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 11

   const currentLessonData = {
      currentChapter: 'writing',
      currentLesson: 11,
      level: 'Pre-Intermediate'
   }

   return <WritingLessonLayout
      writingTask='Напишите вкратце о вашей любимой книге (150 слов)'
      nextUrl='/lessons/lesson11/test'
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}