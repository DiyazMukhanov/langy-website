import WritingLessonLayout from "@/modules/study/advanced/writing/WritingLessonLayout";
import { nextLessonUrlGenerator } from "../shared/nextLessonUrlGenerator";

export default function Writing() {
   const currentLessonData = {
      currentChapter: 'writing',
      currentLesson: 16,
      level: 'Pre-Intermediate'
   }

   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, currentLessonData.currentLesson)

   return <WritingLessonLayout
      writingTask='Напишите вкратце, что вы думаете об искусстве (около 100 слов)'
      nextUrl={nextUrl}
      currentChapter={currentLessonData.currentChapter}
      lessonNumber={currentLessonData.currentLesson}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}