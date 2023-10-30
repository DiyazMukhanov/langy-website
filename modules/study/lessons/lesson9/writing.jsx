import WritingLessonLayout from "@/modules/study/advanced/writing/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 9

   const currentLessonData = {
      currentChapter: 'writing',
      currentLesson: 9,
      level: 'Pre-Intermediate'
   }

   return <WritingLessonLayout
      writingTask='Напишите вкратце о том как вы проводите выходные (150 слов)'
      nextUrl='/lessons/lesson9/test'
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}