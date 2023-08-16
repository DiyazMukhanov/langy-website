import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson3/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson3/video-materials";


export default function Video() {
   console.log(videoUrl)
   const lessonNumber = 3

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 3
   }

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl='/lessons/lesson3/audio'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   topic='Pronouns / Местоимения'
   />
}