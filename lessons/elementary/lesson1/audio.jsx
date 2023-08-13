import AudioLessonLayout from "@/layouts/Lessons/AudioLessonLayout";
import { text } from "../../../utils/lessonsMaterials/elementary/lesson1/audio-materials";
import { audioTasks } from "../../../utils/lessonsMaterials/elementary/lesson1/audio-materials";
import { wordsWithTranslations } from "../../../utils/lessonsMaterials/elementary/lesson1/audio-materials";
import { getProgressData } from "@/api/user";


export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 1
   }
   
   return <AudioLessonLayout 
   text={text} 
   audioTasks={audioTasks} 
   wordsWithTranslations={wordsWithTranslations} 
   audioSrc="/audio/elementary-1.mp3"
   lessonNumber={1}
   nextUrl='/lessons/elementary/lesson1/writing'
   currentLessonData={currentLessonData}
   />
}