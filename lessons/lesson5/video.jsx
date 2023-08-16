import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson5/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson5/video-materials";


export default function Video() {
   console.log(videoUrl)
   const lessonNumber = 5

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 5
   }

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl='/lessons/lesson5/audio'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   topic='Present simple / Настоящее простое время'
   />
}