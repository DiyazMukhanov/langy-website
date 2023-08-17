import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson6/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson6/video-materials";


export default function Video() {
   console.log(videoUrl)
   const lessonNumber = 6

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 6
   }

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl='/lessons/lesson6/audio'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   topic='Prepositions / Предлоги'
   />
}