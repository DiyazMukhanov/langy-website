import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson1/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson1/video-materials";


export default function Video() {
   console.log(videoUrl)
   const lessonNumber = 1

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 1
   }

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl='/lessons/lesson1/audio'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   />
}