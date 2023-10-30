import AudioLessonLayout from "@/modules/study/advanced/audio/AudioLessonLayout";
import { text } from "../../../../utils/lessonsMaterials/lesson19/audio-materials";
import { audioTasks } from "../../../../utils/lessonsMaterials/lesson19/audio-materials";
import { wordsWithTranslations } from "../../../../utils/lessonsMaterials/lesson19/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 19,
      level: 'Intermediate'
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
      textTitle='Education in Great Britain'
   />
}