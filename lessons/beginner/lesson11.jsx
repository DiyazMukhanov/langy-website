import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";
import wordSrc_1 from '../../public/audio/lesson10/lesson_10_1.mp3'
import wordSrc_2 from '../../public/audio/lesson10/lesson_10_2.mp3'
import wordSrc_3 from '../../public/audio/lesson10/lesson_10_3.mp3'
import wordSrc_4 from '../../public/audio/lesson10/lesson_10_4.mp3'
import wordSrc_5 from '../../public/audio/lesson10/lesson_10_5.mp3'
import wordSrc_6 from '../../public/audio/lesson10/lesson_10_6.mp3'
import wordSrc_7 from '../../public/audio/lesson10/lesson_10_7.mp3'
import wordSrc_8 from '../../public/audio/lesson10/lesson_10_8.mp3'
import wordSrc_9 from '../../public/audio/lesson10/lesson_10_9.mp3'

export default function BeginnerLesson11() {
   const words_1 = [
      {
          enWord: 'Can I have a sandwich, please?',
          ruWord: 'Могу ли я получить бутерброд, пожалуйста?'
      },
      {
          enWord: 'Where is the supermarket?',
          ruWord: 'Где находится супермаркет?'
      },
      {
          enWord: `I'd like a coffee, please.`,
          ruWord: 'Я бы хотел кофе, пожалуйста.'
      },
  ]

  const wordsToAsk_1 = [{
    enWord: 'Can I have a sandwich, please?',
    ruWord: 'Могу ли я получить бутерброд, пожалуйста?'
},
{
  enWord: `I'd like a coffee, please.`,
  ruWord: 'Я бы хотел кофе, пожалуйста.'
},
{
  enWord: 'Where is the supermarket?',
  ruWord: 'Где находится супермаркет?'
},]

  const words_2 = [
   {
      enWord: 'How much is this?',
      ruWord: 'Сколько это стоит?'
  },
  {
      enWord: 'What time is it?',
      ruWord: 'Который час?'
  },
  {
      enWord: 'Excuse me, can you help me?',
      ruWord: 'Извините, можете ли вы мне помочь?'
  },
]

const wordsToAsk_2 = [{
  enWord: 'Excuse me, can you help me?',
  ruWord: 'Извините, можете ли вы мне помочь?'
},
{
  enWord: 'What time is it?',
  ruWord: 'Который час?'
},
{
  enWord: 'How much is this?',
  ruWord: 'Сколько это стоит?'
},]

const words_3 = [
   {
       enWord: 'Please pass the salt.',
       ruWord: 'Пожалуйста, передайте соль.'
   },
   {
       enWord: 'I need some water.',
       ruWord: 'Мне нужна вода.'
   },
   {
       enWord: 'Is this your book?',
       ruWord: ' Это ваша книга?'
   },
]

const wordsToAsk_3 = [{
  enWord: 'Please pass the salt.',
  ruWord: 'Пожалуйста, передайте соль.'
},
{
  enWord: 'Is this your book?',
  ruWord: ' Это ваша книга?'
},
{
  enWord: 'I need some water.',
  ruWord: 'Мне нужна вода.'
},]

   return (
   <>
   <BeginnerLessonLayout 
   lessonNumber={11} 
   isVocabulary={true} 
   words_1={words_1} 
   words_2={words_2} 
   words_3={words_3} 
   wordsToAsk_1={wordsToAsk_1} 
   wordsToAsk_2={wordsToAsk_2} 
   wordsToAsk_3={wordsToAsk_3}
   nextUrl='/lessons/beginner/lesson12'
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


