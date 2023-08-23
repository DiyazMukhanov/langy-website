import AudioLessonLayout from "@/layouts/Lessons/AudioLessonLayout";
import { text } from "../../utils/lessonsMaterials/lesson5/audio-materials";
import { audioTasks } from "../../utils/lessonsMaterials/lesson5/audio-materials";
import { wordsWithTranslations } from "../../utils/lessonsMaterials/lesson5/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 5
   }

   return <AudioLessonLayout 
   text={text} 
   audioTasks={audioTasks} 
   wordsWithTranslations={wordsWithTranslations} 
   audioSrc="/audio/lesson-5.mp3"
   lessonNumber={5}
   nextUrl='/lessons/lesson5/writing'
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   />
}