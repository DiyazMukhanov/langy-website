import AudioLessonLayout from "@/modules/study/advanced/audio/AudioLessonLayout";
import { useRouter } from "next/router";
import { audioTexts } from "../utils/titles"
import { nextLessonUrlGenerator } from "../shared/nextLessonUrlGenerator";
import { getAudioMaterials } from "./shared/api/getAudioMaterials"
import Loader from "../../../shared/Loader/index";
import { useLessonMaterials } from "../../shared/hooks/useLessonMaterials";

export default function Audio() {
   const router = useRouter()
   const lessonNumber = router.query.lessonNumber

   const { isLoading, lessonMaterials } = useLessonMaterials(getAudioMaterials, lessonNumber)
   console.log(lessonMaterials)
   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: lessonNumber,
      level: 'Elementary'
   }

   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, Number(lessonNumber))

   const audioSrc = `/audio/lesson-${lessonNumber}.mp3`
   const textTitle = audioTexts[lessonNumber]

   if (isLoading) {
      return <Loader />

   } else {
      return <AudioLessonLayout
         text={lessonMaterials?.text}
         audioTasks={lessonMaterials?.audioTasks}
         wordsWithTranslations={lessonMaterials?.wordsWithTranslations}
         audioSrc={audioSrc}
         lessonNumber={lessonNumber}
         nextUrl={nextUrl}
         currentLessonData={currentLessonData}
         subscriptionIsNeeded={false}
         textTitle={textTitle}
      />
   }
}