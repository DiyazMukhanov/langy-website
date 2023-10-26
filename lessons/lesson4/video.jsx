import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson4/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson4/video-materials";


export default function Video() {
  
   const lessonNumber = 4

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 4,
      level: 'Elementary'
   }

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl='/lessons/lesson4/audio'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   topic='To be / Глагол "быть"'
   />
}