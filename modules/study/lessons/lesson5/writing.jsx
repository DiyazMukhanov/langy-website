import WritingLessonLayout from "@/modules/study/advanced/writing/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 5

   const currentLessonData = {
      currentChapter: 'writing',
      currentLesson: 5,
      level: 'Elementary'
   }

   return <WritingLessonLayout
      writingTask='Напишите вкратце о вашем городе (около 150 слов)'
      nextUrl='/lessons/lesson5/test'
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}