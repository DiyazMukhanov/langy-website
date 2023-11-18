import WritingLessonLayout from "@/modules/study/advanced/writing/WritingLessonLayout";
import { nextLessonUrlGenerator } from "../shared/nextLessonUrlGenerator";

export default function Writing() {
   const currentLessonData = {
      currentChapter: 'writing',
      currentLesson: 20,
      level: 'Intermediate'
   }

   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, currentLessonData.currentLesson)

   return <WritingLessonLayout
      writingTask='Напишите вкратце о системе обучения в вашей стране (около 100 слов)'
      nextUrl={nextUrl}
      currentChapter={currentLessonData.currentChapter}
      lessonNumber={currentLessonData.currentLesson}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}