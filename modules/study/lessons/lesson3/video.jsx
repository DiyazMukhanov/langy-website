import VideoLessonLayout from "@/modules/study/advanced/grammar/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson3/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson3/video-materials";


export default function Video() {

   const lessonNumber = 3

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 3,
      level: 'Elementary'
   }

   return <VideoLessonLayout
      videoTasks={videoTasks}
      videoUrl={videoUrl}
      nextUrl='/lessons/lesson3/audio'
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
      topic='Pronouns'
   />
}