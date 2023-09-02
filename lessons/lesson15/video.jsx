import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson15/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson15/video-materials";


export default function Video() {
  
   const lessonNumber = 15

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: lessonNumber,
      level: 'Pre-Intermediate'
   }

   const nextUrl = `/lessons/lesson${lessonNumber}/audio`

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl={nextUrl}
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   topic='Superlative adjectives / Превосходная форма прилагательных'
   />
}