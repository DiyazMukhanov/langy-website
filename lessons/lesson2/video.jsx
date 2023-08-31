import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson2/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson2/video-materials";


export default function Video() {
  
   const lessonNumber = 2

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 2,
      level: 'Elementary'
   }

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl='/lessons/lesson2/audio'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   topic='Plural nouns / Множественное число'
   />
}