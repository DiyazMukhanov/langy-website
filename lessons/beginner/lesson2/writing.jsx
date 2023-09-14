import WritingLessonLayout from "@/layouts/Lessons/WritingLessonLayout";

export default function Writing() {
   const lessonNumber = 2

   const currentLessonData = {
    currentChapter: 'writing',
    currentLesson: lessonNumber,
    level: 'Beginner'
 }

   const nextUrl = `/lessons/beginner/lesson2/video`
   
   return <WritingLessonLayout 
   writingTask='Напишите что-нибудь из бегиннера'
   nextUrl={nextUrl}
   lessonNumber={lessonNumber}
   currentLessonData={currentLessonData}
   subscriptionIsNeeded={false}
   isBeginner={true}
   />
}