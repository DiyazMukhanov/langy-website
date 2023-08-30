import AudioLessonLayout from "@/layouts/Lessons/AudioLessonLayout";
import { text } from "../../utils/lessonsMaterials/lesson11/audio-materials";
import { audioTasks } from "../../utils/lessonsMaterials/lesson11/audio-materials";
import { wordsWithTranslations } from "../../utils/lessonsMaterials/lesson11/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 11,
      level: 'Pre-Intermediate'
   }

   return <AudioLessonLayout 
   text={text} 
   audioTasks={audioTasks} 
   wordsWithTranslations={wordsWithTranslations} 
   audioSrc="/audio/lesson-11.mp3"
   lessonNumber={11}
   nextUrl='/lessons/lesson11/writing'
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}