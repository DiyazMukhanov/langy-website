import AudioLessonLayout from "@/layouts/Lessons/AudioLessonLayout";
import { text } from "../../utils/lessonsMaterials/lesson13/audio-materials";
import { audioTasks } from "../../utils/lessonsMaterials/lesson13/audio-materials";
import { wordsWithTranslations } from "../../utils/lessonsMaterials/lesson13/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 13,
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
   subscriptionIsNeeded={true}
   />
}