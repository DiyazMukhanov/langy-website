import AudioLessonLayout from "@/modules/study/advanced/audio/AudioLessonLayout";
import { text } from "../../../../utils/lessonsMaterials/lesson16/audio-materials";
import { audioTasks } from "../../../../utils/lessonsMaterials/lesson16/audio-materials";
import { wordsWithTranslations } from "../../../../utils/lessonsMaterials/lesson16/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 16,
      level: 'Pre-Intermediate'
   }

   const audioSrc = `/audio/lesson-${currentLessonData.currentLesson}.mp3`
   const nextUrl = `/lessons/lesson${currentLessonData.currentLesson}/writing`

   return <AudioLessonLayout
      text={text}
      audioTasks={audioTasks}
      wordsWithTranslations={wordsWithTranslations}
      audioSrc={audioSrc}
      lessonNumber={currentLessonData.currentLesson}
      nextUrl={nextUrl}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
      textTitle='Art'
   />
}