import WritingLessonLayout from "@/modules/study/advanced/writing/WritingLessonLayout";
import { nextLessonUrlGenerator } from "../shared/nextLessonUrlGenerator";

export default function Writing() {
   const currentLessonData = {
      currentChapter: 'writing',
      currentLesson: 8,
      level: 'Elementary'
   }

   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, currentLessonData.currentLesson)

   return <WritingLessonLayout
      writingTask='Напишите вкратце о вашем любимом школьном предмете (150 слов)'
      nextUrl={nextUrl}
      currentChapter={currentLessonData.currentChapter}
      lessonNumber={currentLessonData.currentLesson}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}