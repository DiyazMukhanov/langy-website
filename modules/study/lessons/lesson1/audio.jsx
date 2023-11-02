import AudioLessonLayout from "@/modules/study/advanced/audio/AudioLessonLayout";
import { text } from "../../../../utils/lessonsMaterials/lesson1/audio-materials";
import { audioTasks } from "../../../../utils/lessonsMaterials/lesson1/audio-materials";
import { wordsWithTranslations } from "../../../../utils/lessonsMaterials/lesson1/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 1,
      level: 'Elementary'
   }

   return <AudioLessonLayout
      text={text}
      audioTasks={audioTasks}
      wordsWithTranslations={wordsWithTranslations}
      audioSrc="/audio/lesson-1.mp3"
      lessonNumber={1}
      nextUrl='/lessons/lesson1/writing'
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
      textTitle='My family'
   />
}