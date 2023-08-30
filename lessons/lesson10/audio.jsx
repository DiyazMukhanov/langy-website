import AudioLessonLayout from "@/layouts/Lessons/AudioLessonLayout";
import { text } from "../../utils/lessonsMaterials/lesson10/audio-materials";
import { audioTasks } from "../../utils/lessonsMaterials/lesson10/audio-materials";
import { wordsWithTranslations } from "../../utils/lessonsMaterials/lesson10/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 10,
      level: 'Pre-Intermediate'
   }

   return <AudioLessonLayout 
   text={text} 
   audioTasks={audioTasks} 
   wordsWithTranslations={wordsWithTranslations} 
   audioSrc="/audio/lesson-10.mp3"
   lessonNumber={10}
   nextUrl='/lessons/lesson10/writing'
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}