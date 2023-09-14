import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/beginner/lesson1/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/beginner/lesson1/video-materials";


export default function Video() {
  
   const lessonNumber = 1

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: lessonNumber,
      level: 'Beginner'
   }

   const nextUrl = `/lessons/beginner/lesson${lessonNumber}/audio`

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl={nextUrl}
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   topic='Beginner 1 topic'
   isBeginner={true}
   />
}