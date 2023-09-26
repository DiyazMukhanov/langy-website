import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";
import wordSrc_1 from '../../public/audio/lesson12/lesson_12_1.mp3'
import wordSrc_2 from '../../public/audio/lesson12/lesson_12_2.mp3'
import wordSrc_3 from '../../public/audio/lesson12/lesson_12_3.mp3'
import wordSrc_4 from '../../public/audio/lesson12/lesson_12_4.mp3'
import wordSrc_5 from '../../public/audio/lesson12/lesson_12_5.mp3'
import wordSrc_6 from '../../public/audio/lesson12/lesson_12_6.mp3'
import wordSrc_7 from '../../public/audio/lesson12/lesson_12_7.mp3'
import wordSrc_8 from '../../public/audio/lesson12/lesson_12_8.mp3'
import wordSrc_9 from '../../public/audio/lesson12/lesson_12_9.mp3'

export default function BeginnerLesson10() {
   const words_1 = [
    {
      enWord: 'Sandwich',
      ruWord: 'Бутерброд',
    },
    {
      enWord: 'How much',
      ruWord: 'Сколько',
    },
    {
      enWord: 'This',
      ruWord: 'Это',
    },
  ]

  const wordsToAsk_1 = [
    {
      enWord: 'Sandwich',
      ruWord: 'Бутерброд',
    },
    {
      enWord: 'How much',
      ruWord: 'Сколько',
    },
    {
      enWord: 'This',
      ruWord: 'Это',
    },
]

  const words_2 = [
    {
      enWord: 'Help',
      ruWord: 'Помощь',
    },
    {
      enWord: 'Pass',
      ruWord: 'Передавать',
    },
    {
      enWord: 'Salt',
      ruWord: 'Соль',
    },
]

const wordsToAsk_2 = [
  {
    enWord: 'Pass',
    ruWord: 'Передавать',
  },
  {
    enWord: 'Salt',
    ruWord: 'Соль',
  },
  {
    enWord: 'Help',
    ruWord: 'Помощь',
  },
]

const words_3 = [
  {
    enWord: 'Need',
    ruWord: 'Нуждаться',
  },
  {
    enWord: 'Some',
    ruWord: 'Немного',
  },
  {
    enWord: 'Water',
    ruWord: 'Вода',
  },
]

const wordsToAsk_3 = [
  {
    enWord: 'Need',
    ruWord: 'Нуждаться',
  },
  {
    enWord: 'Water',
    ruWord: 'Вода',
  },
  {
    enWord: 'Some',
    ruWord: 'Немного',
  },
]

   return (
   <>
   <BeginnerLessonLayout 
   lessonNumber={10} 
   isVocabulary={true} 
   words_1={words_1} 
   words_2={words_2} 
   words_3={words_3} 
   wordsToAsk_1={wordsToAsk_1} 
   wordsToAsk_2={wordsToAsk_2} 
   wordsToAsk_3={wordsToAsk_3}
   nextUrl='/lessons/beginner/lesson11'
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
