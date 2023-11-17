import WritingLessonLayout from "@/modules/study/advanced/writing/WritingLessonLayout";
import { nextLessonUrlGenerator } from "../shared/nextLessonUrlGenerator";

export default function Writing() {
   const currentLessonData = {
      currentChapter: 'writing',
      currentLesson: 1,
      level: 'Elementary'
   }
   
   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, currentLessonData.currentLesson)

   return <WritingLessonLayout
      writingTask='Пожалуйста напишите короткое эссе на тему "Моя семья" (около 150 слов)'
      nextUrl={nextUrl}
      currentChapter={currentLessonData.currentChapter}
      lessonNumber={currentLessonData.currentLesson}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
   />
}