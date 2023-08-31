import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson5/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson5/video-materials";


export default function Video() {
  
   const lessonNumber = 5

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 5,
      level: 'Elementary'
   }

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl='/lessons/lesson5/audio'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   topic='Present simple / Настоящее простое время'
   />
}