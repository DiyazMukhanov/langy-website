import VideoLessonLayout from "@/modules/study/advanced/grammar/VideoLessonLayout";
import { useRouter } from "next/router";
import { getLevel } from "../utils/getLevel";
import { videoTopics } from "../utils/titles";
import { nextLessonUrlGenerator } from "../shared/nextLessonUrlGenerator";
import { useLessonMaterials } from "../../shared/hooks/useLessonMaterials";
import { getVideoMaterials } from "./shared/api/getVideoMaterials";
import Loader from "../../../shared/Loader/index";
import { checkIfSuscriptionIsNeeded } from "./shared/utils/checkIfSubscriptionNeeded";

export default function Video() {
   const router = useRouter()
   const lessonNumber = router.query.lessonNumber

   const { isLoading, lessonMaterials } = useLessonMaterials(getVideoMaterials, lessonNumber)
   const level = getLevel(Number(lessonNumber))

   const currentLessonData = {
      currentChapter: 'video',
      currentLesson: lessonNumber,
      level: level
   }

   const topic = videoTopics[lessonNumber]

   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, Number(lessonNumber))

   const subscriptionIsNeededStatus = checkIfSuscriptionIsNeeded(lessonNumber)

   if (isLoading) {
      return <Loader />
   } else {
      return <VideoLessonLayout
         videoTasks={lessonMaterials.videoTasks}
         videoUrl={lessonMaterials.videoUrl}
         nextUrl={nextUrl}
         lessonNumber={lessonNumber}
         currentLessonData={currentLessonData}
         subscriptionIsNeeded={subscriptionIsNeededStatus}
         topic={topic}
      />
   }

}