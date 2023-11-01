import VideoLessonLayout from "@/modules/study/advanced/grammar/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson1/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson1/video-materials";


export default function Video() {
   const lessonNumber = 1

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 1,
      level: 'Elementary'
   }

   return <VideoLessonLayout
      videoTasks={videoTasks}
      videoUrl={videoUrl}
      nextUrl='/lessons/lesson1/audio'
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
      topic='Articles / Артикли'
   />
}