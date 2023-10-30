import AudioLessonLayout from "@/modules/study/advanced/audio/AudioLessonLayout";
import { text } from "../../../../utils/lessonsMaterials/lesson2/audio-materials";
import { audioTasks } from "../../../../utils/lessonsMaterials/lesson2/audio-materials";
import { wordsWithTranslations } from "../../../../utils/lessonsMaterials/lesson2/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 2,
      level: 'Elementary'
   }

   return <AudioLessonLayout
      text={text}
      audioTasks={audioTasks}
      wordsWithTranslations={wordsWithTranslations}
      audioSrc="/audio/lesson-2.mp3"
      lessonNumber={2}
      nextUrl='/lessons/lesson2/writing'
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
      textTitle='My flat'
   />
}