import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";
import wordSrc_1 from '../../public/audio/lesson9/lesson_9_1.mp3'
import wordSrc_2 from '../../public/audio/lesson9/lesson_9_2.mp3'
import wordSrc_3 from '../../public/audio/lesson9/lesson_9_3.mp3'
import wordSrc_4 from '../../public/audio/lesson9/lesson_9_4.mp3'
import wordSrc_5 from '../../public/audio/lesson9/lesson_9_5.mp3'
import wordSrc_6 from '../../public/audio/lesson9/lesson_9_6.mp3'
import wordSrc_7 from '../../public/audio/lesson9/lesson_9_7.mp3'
import wordSrc_8 from '../../public/audio/lesson9/lesson_9_8.mp3'
import wordSrc_9 from '../../public/audio/lesson9/lesson_9_9.mp3'

export default function BeginnerLesson7() {
   const words_1 = [
     {
        enWord: 'Teacher',
        ruWord: 'Учитель',
      },
      {
        enWord: 'Swimming',
        ruWord: 'Плавание',
      },
      {
        enWord: 'Book',
        ruWord: 'Книга',
      },
  ]

  const wordsToAsk_1 = [
    {
    enWord: 'Swimming',
    ruWord: 'Плавание',
  },
{
    enWord: 'Teacher',
    ruWord: 'Учитель',
  },
  {
    enWord: 'Book',
    ruWord: 'Книга',
  },
]

  const words_2 = [
    {
        enWord: 'Happy',
        ruWord: 'Счастливый',
      },
      {
        enWord: 'Sad',
        ruWord: 'Грустный',
      },
      {
        enWord: 'Brown',
        ruWord: 'Коричневый',
      },
]

const wordsToAsk_2 = [
    {
        enWord: 'Happy',
        ruWord: 'Счастливый',
      },
      {
        enWord: 'Brown',
        ruWord: 'Коричневый',
      },
      {
        enWord: 'Sad',
        ruWord: 'Грустный',
      },
]

const words_3 = [
      {
        enWord: 'Tall',
        ruWord: 'Высокий',
      },
      {
        enWord: 'Student',
        ruWord: 'Студент',
      },
      {
        enWord: 'Black',
        ruWord: 'Черный',
      },
]

const wordsToAsk_3 = [
    {
        enWord: 'Black',
        ruWord: 'Черный',
      },
      {
        enWord: 'Tall',
        ruWord: 'Высокий',
      },
        {
        enWord: 'Student',
        ruWord: 'Студент',
        },
]

   return (
   <>
   <BeginnerLessonLayout 
   lessonNumber={7} 
   isVocabulary={true} 
   words_1={words_1} 
   words_2={words_2} 
   words_3={words_3} 
   wordsToAsk_1={wordsToAsk_1} 
   wordsToAsk_2={wordsToAsk_2} 
   wordsToAsk_3={wordsToAsk_3}
   nextUrl='/lessons/beginner/lesson8'
   wordSrc_1={wordSrc_1}
   wordSrc_2={wordSrc_2} 
   wordSrc_3={wordSrc_3}
   wordSrc_4={wordSrc_4}
   wordSrc_5={wordSrc_5} 
   wordSrc_6={wordSrc_6}
   wordSrc_7={wordSrc_7}
   wordSrc_8={wordSrc_8} 
   wordSrc_9={wordSrc_9}
   />
   </>
   )
}
