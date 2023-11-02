import VideoLessonLayout from "@/modules/study/advanced/grammar/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson7/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson7/video-materials";


export default function Video() {

   const lessonNumber = 7

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 7,
      level: 'Elementary'
   }

   return <VideoLessonLayout
      videoTasks={videoTasks}
      videoUrl={videoUrl}
      nextUrl='/lessons/lesson7/audio'
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
      topic='Present continuous / Настоящее продолжительное время'
   />
}