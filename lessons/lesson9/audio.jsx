import AudioLessonLayout from "@/layouts/Lessons/AudioLessonLayout";
import { text } from "../../utils/lessonsMaterials/lesson9/audio-materials";
import { audioTasks } from "../../utils/lessonsMaterials/lesson9/audio-materials";
import { wordsWithTranslations } from "../../utils/lessonsMaterials/lesson9/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 9,
      level: 'Pre-Intermediate'
   }

   return <AudioLessonLayout 
   text={text} 
   audioTasks={audioTasks} 
   wordsWithTranslations={wordsWithTranslations} 
   audioSrc="/audio/lesson-9.mp3"
   lessonNumber={9}
   nextUrl='/lessons/lesson9/writing'
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   textTitle='How I spend my weekends'
   />
}