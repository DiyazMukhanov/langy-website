import VideoLessonLayout from "@/modules/study/advanced/grammar/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/lesson1/video-materials";
import { videoUrl } from "@/utils/lessonsMaterials/lesson1/video-materials";
import { useRouter } from "next/router";
import { getLevel } from "./utils/getLevel";
import { videoTopics } from "./utils/titles";

export default function Video() {
   const router = useRouter()
   const lessonNumber = router.query.lessonNumber

   const level = getLevel(Number(lessonNumber))

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: lessonNumber,
      level: level
   }

   const topic = videoTopics[lessonNumber]

   const nextUrl = `/lessons/${lessonNumber}/audio`

   return <VideoLessonLayout
      videoTasks={videoTasks}
      videoUrl={videoUrl}
      nextUrl={nextUrl}
      lessonNumber={lessonNumber}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
      topic={topic}
   />
}