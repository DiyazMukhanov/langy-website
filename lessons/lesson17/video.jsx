import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson17/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson17/video-materials";


export default function Video() {
   
   const lessonNumber = 17

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: lessonNumber,
      level: 'Intermediate'
   }

   const nextUrl = `/lessons/lesson${lessonNumber}/audio`

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl={nextUrl}
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   topic='Much, many, few'
   />
}