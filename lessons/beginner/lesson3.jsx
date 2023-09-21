import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson3() {
   const words_1 = [
      {
          enWord: 'Hello',
          ruWord: 'Привет'
      },
      {
          enWord: 'Name',
          ruWord: 'Имя'
      },
      {
          enWord: 'Goodbye',
          ruWord: 'Пока'
      },
  ]

  const wordsToAsk_1 = [  {
      enWord: 'Name',
      ruWord: 'Имя'
  },
  {
      enWord: 'Hello',
      ruWord: 'Привет'
  },
  {
      enWord: 'Goodbye',
      ruWord: 'Пока'
  },]

  const words_2 = [
   {
       enWord: 'Nice',
       ruWord: 'Приятный'
   },
   {
       enWord: 'Day',
       ruWord: 'День'
   },
   {
       enWord: 'She',
       ruWord: 'Она'
   },
]

const wordsToAsk_2 = [  {
   enWord: 'Day',
   ruWord: 'День'
},
{
   enWord: 'She',
   ruWord: 'Она'
},
{
   enWord: 'Nice',
   ruWord: 'Приятный'
},]

const words_3 = [
   {
       enWord: 'Friend',
       ruWord: 'Друг'
   },
   {
       enWord: 'He',
       ruWord: 'Он'
   },
   {
       enWord: 'Dog',
       ruWord: 'Собака'
   },
]

const wordsToAsk_3 = [  {
   enWord: 'Dog',
   ruWord: 'Собака'
},
{
   enWord: 'He',
   ruWord: 'Он'
},
{
   enWord: 'Friend',
   ruWord: 'Друг'
},]

   return (
   <>
   <BeginnerLessonLayout 
   lessonNumber={3} 
   isVocabulary={true} 
   words_1={words_1} 
   words_2={words_2} 
   words_3={words_3} 
   wordsToAsk_1={wordsToAsk_1} 
   wordsToAsk_2={wordsToAsk_2} 
   wordsToAsk_3={wordsToAsk_3}
   nextUrl='/lessons/beginner/lesson4'
   />
   </>
   )
}