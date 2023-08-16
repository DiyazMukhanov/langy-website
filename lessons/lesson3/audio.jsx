import AudioLessonLayout from "@/layouts/Lessons/AudioLessonLayout";
import { text } from "../../utils/lessonsMaterials/lesson3/audio-materials";
import { audioTasks } from "../../utils/lessonsMaterials/lesson3/audio-materials";
import { wordsWithTranslations } from "../../utils/lessonsMaterials/lesson3/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 3
   }

   return <AudioLessonLayout 
   text={text} 
   audioTasks={audioTasks} 
   wordsWithTranslations={wordsWithTranslations} 
   audioSrc="/audio/lesson-3.mp3"
   lessonNumber={3}
   nextUrl='/lessons/lesson3/writing'
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}