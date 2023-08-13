import { videoTasks } from "@/utils/lessonsMaterials/elementary/lesson1/video-materials";
import { UserContext } from "@/store/userContext"
import { useContext } from "react"
import { videoUrl } from "@/utils/lessonsMaterials/elementary/lesson1/video-materials";
import TestLessonLayout from "@/layouts/Lessons/TestLessonLayout";


export default function Video() {
   const userCtx = useContext(UserContext)
   const lessonNumber = 1

   const questions = [
    {
        id: 1,
        firstPart: 'You shall',
        secondPart: 'this game',
        description: 'Глагол быть имеет разнеы формы. Здесь нужно было поставить эту форму, потому что она больше подходит. Продолжай обучение, у тебя всё получится!',
        answers: [
            {
                id: 1,
                answer: 'play',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'go',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'swim',
                isCorrect: false
            },
            {
                id: 4,
                answer: 'eat',
                isCorrect: false
            }
        ] 
    },
    {
        id: 2,
        firstPart: 'You can',
        secondPart: 'this cake',
        description: 'Глагол быть имеет разнеы формы. Здесь нужно было поставить эту форму, потому что она больше подходит. Продолжай обучение, у тебя всё получится!',
        answers: [
            {
                id: 1,
                answer: 'play',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'go',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'swim',
                isCorrect: false
            },
            {
                id: 4,
                answer: 'eat',
                isCorrect: true
            }
        ] 
    },
    {
        id: 3,
        firstPart: 'You can',
        secondPart: 'this cat',
        description: 'Глагол быть имеет разнеы формы. Здесь нужно было поставить эту форму, потому что она больше подходит. Продолжай обучение, у тебя всё получится!',
        answers: [
            {
                id: 1,
                answer: 'take',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'go',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'swim',
                isCorrect: false
            },
            {
                id: 4,
                answer: 'eat',
                isCorrect: false
            }
        ] 
    }
]

   return <TestLessonLayout 
   questions={questions}
   videoTasks={videoTasks} 
   lessonsSummary={userCtx.lessonsSummary}
   videoUrl={videoUrl} 
   nextUrl='/lessons/elementary/lesson2/video'
   lessonNumber={lessonNumber}
   />
}