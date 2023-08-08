import AudioLessonLayout from "@/layouts/Lessons/AudioLessonLayout";
import { text } from "../../../utils/lessonsMaterials/elementary/lesson1/audio-materials";
import { audioTasks } from "../../../utils/lessonsMaterials/elementary/lesson1/audio-materials";
import { wordsWithTranslations } from "../../../utils/lessonsMaterials/elementary/lesson1/audio-materials";


export default function Audio() {
   return <AudioLessonLayout text={text} audioTasks={audioTasks} wordsWithTranslations={wordsWithTranslations}/>
}