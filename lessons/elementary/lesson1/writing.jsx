import { UserContext } from "@/store/userContext"
import { useContext } from "react"
import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";


export default function Writing() {
   const userCtx = useContext(UserContext)
   const lessonNumber = 1

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: 1
 }

   return <WritingLessonLayout 
   writingTask='Пожалуйста напишите короткое эссе на тему "Моя семья"'
   lessonsSummary={userCtx.lessonsSummary}
   nextUrl='/lessons/elementary/lesson1/test'
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   />
}