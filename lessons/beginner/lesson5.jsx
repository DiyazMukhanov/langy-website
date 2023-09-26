import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";
import wordSrc_1 from '../../public/audio/lesson4/lesson_4_1.mp3'
import wordSrc_2 from '../../public/audio/lesson4/lesson_4_2.mp3'
import wordSrc_3 from '../../public/audio/lesson4/lesson_4_3.mp3'
import wordSrc_4 from '../../public/audio/lesson4/lesson_4_4.mp3'
import wordSrc_5 from '../../public/audio/lesson4/lesson_4_5.mp3'
import wordSrc_6 from '../../public/audio/lesson4/lesson_4_6.mp3'
import wordSrc_7 from '../../public/audio/lesson4/lesson_4_7.mp3'
import wordSrc_8 from '../../public/audio/lesson4/lesson_4_8.mp3'
import wordSrc_9 from '../../public/audio/lesson4/lesson_4_9.mp3'

export default function BeginnerLesson5() {
   const words_1 = [
      {
          enWord: 'I have a red car',
          ruWord: 'У меня есть красная машина'
      },
      {
          enWord: 'She likes blue apples',
          ruWord: 'Ей нравятся синие яблоки'
      },
      {
          enWord: 'He has two white dogs',
          ruWord: 'У него есть две белые собаки'
      },
  ]

  const wordsToAsk_1 = [  {
   enWord: 'She likes blue apples',
   ruWord: 'Ей нравятся синие яблоки'
},
  {
   enWord: 'I have a red car',
   ruWord: 'У меня есть красная машина'
},
{
   enWord: 'He has two white dogs',
   ruWord: 'У него есть две белые собаки'
},]

  const words_2 = [
   {
      enWord: 'The sky is blue',
      ruWord: 'Небо синее'
  },
  {
      enWord: 'This is a big car',
      ruWord: 'Это большая машина'
  },
  {
      enWord: 'She has a small cat',
      ruWord: 'У неё есть маленькая кошка'
  },
]

const wordsToAsk_2 = [ {
   enWord: 'She has a small cat',
   ruWord: 'У неё есть маленькая кошка'
},
{
   enWord: 'The sky is blue',
   ruWord: 'Небо синее'
},
{
   enWord: 'This is a big car',
   ruWord: 'Это большая машина'
},]

const words_3 = [
   {
       enWord: 'Three cats are playing',
       ruWord: 'Три кошки играют'
   },
   {
       enWord: 'I see two birds',
       ruWord: 'Я вижу двух птиц'
   },
   {
       enWord: 'My book is on the table',
       ruWord: 'Моя книга на столе'
   },
]

const wordsToAsk_3 = [{
   enWord: 'Three cats are playing',
   ruWord: 'Три кошки играют'
},
{
   enWord: 'My book is on the table',
   ruWord: 'Моя книга на столе'
},
{
   enWord: 'I see two birds',
   ruWord: 'Я вижу двух птиц'
},]

   return (
   <>
   <BeginnerLessonLayout 
   lessonNumber={5} 
   isVocabulary={true} 
   words_1={words_1} 
   words_2={words_2} 
   words_3={words_3} 
   wordsToAsk_1={wordsToAsk_1} 
   wordsToAsk_2={wordsToAsk_2} 
   wordsToAsk_3={wordsToAsk_3}
   nextUrl='/lessons/beginner/lesson6'
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
