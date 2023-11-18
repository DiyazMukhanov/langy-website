import AudioLessonLayout from "@/modules/study/advanced/audio/AudioLessonLayout";
import { text } from "../../../../utils/lessonsMaterials/lesson18/audio-materials";
import { audioTasks } from "../../../../utils/lessonsMaterials/lesson18/audio-materials";
import { wordsWithTranslations } from "../../../../utils/lessonsMaterials/lesson18/audio-materials";
import { nextLessonUrlGenerator } from "../shared/nextLessonUrlGenerator";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 18,
      level: 'Intermediate'
   }

   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, currentLessonData.currentLesson)

   return <AudioLessonLayout
      text={text}
      audioTasks={audioTasks}
      wordsWithTranslations={wordsWithTranslations}
      audioSrc="/audio/lesson-18.mp3"
      nextUrl={nextUrl}
      currentChapter={currentLessonData.currentChapter}
      lessonNumber={currentLessonData.currentLesson}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
      textTitle='USA'
   />
}