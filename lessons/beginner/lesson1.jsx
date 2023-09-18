// import BeginnerVideo from "@/components/BeginnerVideo";
import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";


export default function BeginnerLesson1() {
   
   return (
   <>
   <BeginnerLessonLayout 
   lessonNumber={1} 
   isVideoLesson={true} 
   videoUrl='https://storage.googleapis.com/langy.su/videos/beginner/beginner_1.mov'
   nextUrl = '/lessons/beginner/lesson2'
   />
   {/* <BeginnerVideo /> */}
   </>
   )
}