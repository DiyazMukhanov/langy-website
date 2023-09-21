import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson14() {
   const words_1 = [
    {
      enWord: 'Years old',
      ruWord: 'Лет',
    },
    {
      enWord: 'Reading',
      ruWord: 'Чтение',
    },
    {
      enWord: 'Doctor',
      ruWord: 'Доктор',
    },
  ]

  const wordsToAsk_1 = [
    {
      enWord: 'Doctor',
      ruWord: 'Доктор',
    },
    {
      enWord: 'Reading',
      ruWord: 'Чтение',
    },
    {
      enWord: 'Years old',
      ruWord: 'Лет',
    },
]

  const words_2 = [
    {
      enWord: 'Flower',
      ruWord: 'Цветок',
    },
    {
      enWord: 'Red',
      ruWord: 'Красный',
    },
    {
      enWord: 'Bag',
      ruWord: 'Сумка',
    },
]

const wordsToAsk_2 = [
  {
    enWord: 'Flower',
    ruWord: 'Цветок',
  },
  {
    enWord: 'Bag',
    ruWord: 'Сумка',
  },
  {
    enWord: 'Red',
    ruWord: 'Красный',
  },
]

const words_3 = [
  {
    enWord: 'Good',
    ruWord: 'Хороший',
  },
  {
    enWord: 'Friend',
    ruWord: 'Друг',
  },
  {
    enWord: 'Soccer',
    ruWord: 'Футбол',
  },
]

const wordsToAsk_3 = [
  {
    enWord: 'Friend',
    ruWord: 'Друг',
  },
  {
    enWord: 'Soccer',
    ruWord: 'Футбол',
  },
  {
    enWord: 'Good',
    ruWord: 'Хороший',
  },
]

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
   nextUrl='/'
   isNextToElementary={true}
   />
   </>
   )
}