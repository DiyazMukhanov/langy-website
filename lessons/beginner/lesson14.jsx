import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";
import wordSrc_1 from '../../public/audio/lesson13/lesson_13_1.mp3'
import wordSrc_2 from '../../public/audio/lesson13/lesson_13_2.mp3'
import wordSrc_3 from '../../public/audio/lesson13/lesson_13_3.mp3'
import wordSrc_4 from '../../public/audio/lesson13/lesson_13_4.mp3'
import wordSrc_5 from '../../public/audio/lesson13/lesson_13_5.mp3'
import wordSrc_6 from '../../public/audio/lesson13/lesson_13_6.mp3'
import wordSrc_7 from '../../public/audio/lesson13/lesson_13_7.mp3'
import wordSrc_8 from '../../public/audio/lesson13/lesson_13_8.mp3'
import wordSrc_9 from '../../public/audio/lesson13/lesson_13_9.mp3'

export default function BeginnerLesson13() {
   const words_1 = [
      {
          enWord: 'My name is Emily.',
          ruWord: 'Меня зовут Эмили.'
      },
      {
          enWord: 'I am 30 years old',
          ruWord: 'Мне 30 лет'
      },
      {
          enWord: `I like reading books`,
          ruWord: 'Мне нравится читать книги'
      },
  ]

  const wordsToAsk_1 = [{
    enWord: 'I am 30 years old',
    ruWord: 'Мне 30 лет'
},
{
  enWord: 'My name is Emily.',
  ruWord: 'Меня зовут Эмили.'
},
{
  enWord: `I like reading books`,
  ruWord: 'Мне нравится читать книги'
},]

  const words_2 = [
   {
      enWord: 'He is a doctor',
      ruWord: 'Он врач'
  },
  {
      enWord: 'The flower is red',
      ruWord: 'Цветок красный'
  },
  {
      enWord: 'I have a blue bag',
      ruWord: 'У меня есть синяя сумка'
  },
]

const wordsToAsk_2 = [{
  enWord: 'He is a doctor',
  ruWord: 'Он врач'
},
{
  enWord: 'The flower is red',
  ruWord: 'Цветок красный'
},
{
  enWord: 'I have a blue bag',
  ruWord: 'У меня есть синяя сумка'
},]

const words_3 = [
   {
       enWord: `It's a sunny day`,
       ruWord: 'Это солнечный день'
   },
   {
       enWord: 'She is a good friend',
       ruWord: 'Она хорошая подруга'
   },
   {
       enWord: 'They play soccer',
       ruWord: 'Они играют в футбол'
   },
]

const wordsToAsk_3 = [  {
  enWord: `It's a sunny day`,
  ruWord: 'Это солнечный день'
},
{
  enWord: 'They play soccer',
  ruWord: 'Они играют в футбол'
},
{
  enWord: 'She is a good friend',
  ruWord: 'Она хорошая подруга'
},]

   return (
   <>
   <BeginnerLessonLayout 
   lessonNumber={14} 
   isVocabulary={true} 
   words_1={words_1} 
   words_2={words_2} 
   words_3={words_3} 
   wordsToAsk_1={wordsToAsk_1} 
   wordsToAsk_2={wordsToAsk_2} 
   wordsToAsk_3={wordsToAsk_3}
   isNextToElementary={true}
   nextUrl='/'
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
