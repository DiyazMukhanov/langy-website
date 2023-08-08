import VideoLessonLayout from "@/layouts/Lessons/VideoLessonLayout";
import { videoTasks } from "@/utils/lessonsMaterials/elementary/lesson1/video-materials";
import { UserContext } from "@/store/userContext"
import { useContext } from "react"
import { videoUrl } from "@/utils/lessonsMaterials/elementary/lesson1/video-materials";


export default function Video() {
   const userCtx = useContext(UserContext)

   return <VideoLessonLayout 
   videoTasks={videoTasks} 
   lessonsSummary={userCtx.lessonsSummary}
   videoUrl={videoUrl} 
   nextUrl='/lessons/elementary/lesson1/audio'/>
}