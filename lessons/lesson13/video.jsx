import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson13/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson13/video-materials";


export default function Video() {
   console.log(videoUrl)
   const lessonNumber = 13

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: lessonNumber
   }

   const nextUrl = `/lessons/lesson${lessonNumber}/audio`

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl={nextUrl}
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   topic='Present perfect'
   />
}