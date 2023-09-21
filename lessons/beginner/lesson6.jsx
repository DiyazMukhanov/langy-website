import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson6() {
   const words_1 = [
      {
          enWord: 'Red',
          ruWord: 'Красный'
      },
      {
          enWord: 'Blue',
          ruWord: 'Синий'
      },
      {
          enWord: 'Green',
          ruWord: 'Зеленый'
      },
  ]

  const wordsToAsk_1 = [{
    enWord: 'Blue',
    ruWord: 'Синий'
},
{
    enWord: 'Green',
    ruWord: 'Зеленый'
},
{
    enWord: 'Red',
    ruWord: 'Красный'
},]

  const words_2 = [
   {
       enWord: 'Apple',
       ruWord: 'Яблоко'
   },
   {
       enWord: 'Dog',
       ruWord: 'Собака'
   },
   {
       enWord: 'Sky',
       ruWord: 'Небо'
   },
]

const wordsToAsk_2 = [{
    enWord: 'Apple',
    ruWord: 'Яблоко'
},
{
    enWord: 'Sky',
    ruWord: 'Небо'
},
{
    enWord: 'Dog',
    ruWord: 'Собака'
},
]

const words_3 = [
   {
       enWord: 'Big',
       ruWord: 'Большой'
   },
   {
       enWord: 'Car',
       ruWord: 'Машина'
   },
   {
       enWord: 'Small',
       ruWord: 'Маленький'
   },
]

const wordsToAsk_3 = [{
    enWord: 'Small',
    ruWord: 'Маленький'
},
{
    enWord: 'Car',
    ruWord: 'Машина'
},
{
    enWord: 'Big',
    ruWord: 'Большой'
},]

   return (
   <>
   <BeginnerLessonLayout 
   lessonNumber={6} 
   isVocabulary={true} 
   words_1={words_1} 
   words_2={words_2} 
   words_3={words_3} 
   wordsToAsk_1={wordsToAsk_1} 
   wordsToAsk_2={wordsToAsk_2} 
   wordsToAsk_3={wordsToAsk_3}
   nextUrl='/lessons/beginner/lesson7'
   />
   </>
   )
}