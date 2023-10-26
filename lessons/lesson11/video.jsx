import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson11/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson11/video-materials";


export default function Video() {
   const lessonNumber = 11

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 11,
      level: 'Pre-Intermediate'
   }

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl='/lessons/lesson11/audio'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   topic='Future simple / Будущее простое время'
   />
}