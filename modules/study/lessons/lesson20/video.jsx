import VideoLessonLayout from "@/modules/study/advanced/grammar/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson20/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson20/video-materials";
import { nextLessonUrlGenerator } from "../shared/nextLessonUrlGenerator";

export default function Video() {
   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: 20,
      level: 'Intermediate'
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
      topic='This/It'
   />
}