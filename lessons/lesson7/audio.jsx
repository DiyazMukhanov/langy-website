import AudioLessonLayout from "@/layouts/Lessons/AudioLessonLayout";
import { text } from "../../utils/lessonsMaterials/lesson7/audio-materials";
import { audioTasks } from "../../utils/lessonsMaterials/lesson7/audio-materials";
import { wordsWithTranslations } from "../../utils/lessonsMaterials/lesson7/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 7,
      level: 'Elementary'
   }

   return <AudioLessonLayout 
   text={text} 
   audioTasks={audioTasks} 
   wordsWithTranslations={wordsWithTranslations} 
   audioSrc="/audio/lesson-7.mp3"
   lessonNumber={7}
   nextUrl='/lessons/lesson7/writing'
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   textTitle='My pet'
   />
}