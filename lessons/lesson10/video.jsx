import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson10/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson10/video-materials";


export default function Video() {
   const lessonNumber = 10

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 10,
      level: 'Pre-Intermediate'
   }

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl='/lessons/lesson10/audio'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   topic='Reported speech / Косвенная речь'
   />
}