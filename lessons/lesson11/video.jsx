import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson11/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson11/video-materials";


export default function Video() {
   console.log(videoUrl)
   const lessonNumber = 11

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 11
   }

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl='/lessons/lesson11/audio'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   topic='Future simple / Будущее простое время'
   />
}