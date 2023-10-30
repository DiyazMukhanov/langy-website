import VideoLessonLayout from "@/modules/study/advanced/grammar/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson18/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson18/video-materials";


export default function Video() {

   const lessonNumber = 18

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
      topic='Used to'
   />
}