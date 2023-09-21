import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson9() {
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
   lessonNumber={9} 
   isVocabulary={true} 
   words_1={words_1} 
   words_2={words_2} 
   words_3={words_3} 
   wordsToAsk_1={wordsToAsk_1} 
   wordsToAsk_2={wordsToAsk_2} 
   wordsToAsk_3={wordsToAsk_3}
   nextUrl='/lessons/beginner/lesson10'
   />
   </>
   )
}