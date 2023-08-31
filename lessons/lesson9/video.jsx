import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson9/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson9/video-materials";


export default function Video() {
  
   const lessonNumber = 9

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 9,
      level: 'Pre-Intermediate'
   }

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl='/lessons/lesson9/audio'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   topic='Past simple / Простое прошедшее время'
   />
}