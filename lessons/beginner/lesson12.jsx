import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson12() {
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
   lessonNumber={12} 
   isVocabulary={true} 
   words_1={words_1} 
   words_2={words_2} 
   words_3={words_3} 
   wordsToAsk_1={wordsToAsk_1} 
   wordsToAsk_2={wordsToAsk_2} 
   wordsToAsk_3={wordsToAsk_3}
   nextUrl='/lessons/beginner/lesson13'
   />
   </>
   )
}