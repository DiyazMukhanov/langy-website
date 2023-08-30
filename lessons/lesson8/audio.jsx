import AudioLessonLayout from "@/layouts/Lessons/AudioLessonLayout";
import { text } from "../../utils/lessonsMaterials/lesson8/audio-materials";
import { audioTasks } from "../../utils/lessonsMaterials/lesson8/audio-materials";
import { wordsWithTranslations } from "../../utils/lessonsMaterials/lesson8/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 8,
      level: 'Elementary'
   }

   return <AudioLessonLayout 
   text={text} 
   audioTasks={audioTasks} 
   wordsWithTranslations={wordsWithTranslations} 
   audioSrc="/audio/lesson-8.mp3"
   lessonNumber={8}
   nextUrl='/lessons/lesson8/writing'
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}