import VideoLessonLayout from "@/modules/study/advanced/grammar/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson5/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson5/video-materials";
import { nextLessonUrlGenerator } from "../shared/nextLessonUrlGenerator";

export default function Video() {
   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 5,
      level: 'Elementary'
   }

   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, currentLessonData.currentLesson)

   return <VideoLessonLayout
      videoTasks={videoTasks}
      videoUrl={videoUrl}
      nextUrl={nextUrl}
      currentChapter={currentLessonData.currentChapter}
      lessonNumber={currentLessonData.currentLesson}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
      topic='Present simple / Настоящее простое время'
   />
}