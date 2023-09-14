import AudioLessonLayout from "@/layouts/Lessons/AudioLessonLayout";
import { text } from "../../../utils/lessonsMaterials/beginner/lesson2/audio-materials";
import { audioTasks } from "../../../utils/lessonsMaterials/beginner/lesson2/audio-materials";
import { wordsWithTranslations } from "../../../utils/lessonsMaterials/beginner/lesson2/audio-materials";

export default function Audio() {
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: 2,
      level: 'Beginner'
   }

   const audioSrc = `/audio/lesson-${currentLessonData.currentLesson}.mp3`
   // const audioSrc = '/audio/elementary-1.mp3'
   const nextUrl = `/lessons/beginner/lesson${currentLessonData.currentLesson}/writing`

   console.log(audioSrc)

   return <AudioLessonLayout 
   text={text} 
   audioTasks={audioTasks} 
   wordsWithTranslations={wordsWithTranslations} 
   audioSrc={audioSrc}
   lessonNumber={currentLessonData.currentLesson}
   nextUrl={nextUrl}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   textTitle='Environmental pollution'
   isBeginner={true}
   />
}