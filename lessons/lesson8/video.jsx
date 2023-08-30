import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson8/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson8/video-materials";


export default function Video() {
   console.log(videoUrl)
   const lessonNumber = 8

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 8,
      level: 'Elementary'
   }

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   videoUrl={videoUrl} 
   nextUrl='/lessons/lesson8/audio'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={true}
   topic='This, that, these, those'
   />
}