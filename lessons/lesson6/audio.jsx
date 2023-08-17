import AudioLessonLayout from "@/layouts/Lessons/AudioLessonLayout";
import { text } from "../../utils/lessonsMaterials/lesson6/audio-materials";
import { audioTasks } from "../../utils/lessonsMaterials/lesson6/audio-materials";
import { wordsWithTranslations } from "../../utils/lessonsMaterials/lesson6/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 6
   }

   return <AudioLessonLayout 
   text={text} 
   audioTasks={audioTasks} 
   wordsWithTranslations={wordsWithTranslations} 
   audioSrc="/audio/lesson-6.mp3"
   lessonNumber={6}
   nextUrl='/lessons/lesson6/writing'
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}