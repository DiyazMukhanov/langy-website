import TestLessonLayout from "@/modules/study/advanced/test/TestLessonLayout";
import { nextLessonUrlGenerator } from "../shared/nextLessonUrlGenerator";
import { getLevel } from "../utils/getLevel";
import { useRouter } from "next/router";
import { useLessonMaterials } from "../../shared/hooks/useLessonMaterials";
import { getTestMaterials } from "./shared/api/getTestMaterials";
import Loader from "../../../shared/Loader/index";
import { checkIfSuscriptionIsNeeded } from "./shared/utils/checkIfSubscriptionNeeded";


export default function Test() {
   const router = useRouter()
   const lessonNumber = router.query.lessonNumber
   const { isLoading, lessonMaterials } = useLessonMaterials(getTestMaterials, lessonNumber)

   const level = getLevel(Number(lessonNumber))

   const currentLessonData = {
      currentChapter: 'test',
      currentLesson: lessonNumber,
      level: level
   }
   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, Number(lessonNumber))

   const subscriptionIsNeededStatus = checkIfSuscriptionIsNeeded(lessonNumber)

   if (isLoading) {
      return <Loader />
   } else {
      return <TestLessonLayout
         questions={lessonMaterials.questions}
         nextUrl={nextUrl}
         lessonNumber={lessonNumber}
         currentLessonData={currentLessonData}
         subscriptionIsNeeded={subscriptionIsNeededStatus}
      />
   }

}