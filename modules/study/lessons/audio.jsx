import AudioLessonLayout from "@/modules/study/advanced/audio/AudioLessonLayout";
import { text } from "../../../utils/lessonsMaterials/lesson1/audio-materials";
import { audioTasks } from "../../../utils/lessonsMaterials/lesson1/audio-materials";
import { wordsWithTranslations } from "../../../utils/lessonsMaterials/lesson1/audio-materials";
import { useRouter } from "next/router";
import { audioTexts } from "./utils/titles"
import { nextLessonUrlGenerator } from "./shared/nextLessonUrlGenerator";

export default function Audio() {
   const router = useRouter()
   const lessonNumber = router.query.lessonNumber

   const currentLessonData = {
      currentChapter: 'audio',
      currentLesson: lessonNumber,
      level: 'Elementary'
   }

   const nextUrl = nextLessonUrlGenerator(currentLessonData.currentChapter, Number(lessonNumber))

   const audioSrc = `/audio/lesson-${lessonNumber}.mp3`
   const textTitle = audioTexts[lessonNumber]

   return <AudioLessonLayout
      text={text}
      audioTasks={audioTasks}
      wordsWithTranslations={wordsWithTranslations}
      audioSrc={audioSrc}
      lessonNumber={lessonNumber}
      nextUrl={nextUrl}
      currentLessonData={currentLessonData}
      subscriptionIsNeeded={false}
      textTitle={textTitle}
   />
}