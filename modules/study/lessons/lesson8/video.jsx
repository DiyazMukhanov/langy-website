import VideoLessonLayout from "@/modules/study/advanced/grammar/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson8/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson8/video-materials";


export default function Video() {

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
      subscriptionIsNeeded={false}
      topic='This, that, these, those'
   />
}