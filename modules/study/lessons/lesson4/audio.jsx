import AudioLessonLayout from "@/modules/study/advanced/audio/AudioLessonLayout";
import { text } from "../../../../utils/lessonsMaterials/lesson4/audio-materials";
import { audioTasks } from "../../../../utils/lessonsMaterials/lesson4/audio-materials";
import { wordsWithTranslations } from "../../../../utils/lessonsMaterials/lesson4/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 4,
      level: 'Elementary'
   }

   return <AudioLessonLayout
      text={text}
      audioTasks={audioTasks}
      wordsWithTranslations={wordsWithTranslations}
      audioSrc="/audio/lesson-4.mp3"
      lessonNumber={4}
      nextUrl='/lessons/lesson4/writing'
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
      textTitle='My hobby'
   />
}