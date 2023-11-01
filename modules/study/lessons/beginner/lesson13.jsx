import BeginnerLessonLayout from "../../beginner/BeginnerLessonLayout";
import wordSrc_1 from '../../../../public/audio/lesson14/lesson_14_1.mp3'
import wordSrc_2 from '../../../../public/audio/lesson14/lesson_14_2.mp3'
import wordSrc_3 from '../../../../public/audio/lesson14/lesson_14_3.mp3'
import wordSrc_4 from '../../../../public/audio/lesson14/lesson_14_4.mp3'
import wordSrc_5 from '../../../../public/audio/lesson14/lesson_14_5.mp3'
import wordSrc_6 from '../../../../public/audio/lesson14/lesson_14_6.mp3'
import wordSrc_7 from '../../../../public/audio/lesson14/lesson_14_7.mp3'
import wordSrc_8 from '../../../../public/audio/lesson14/lesson_14_8.mp3'
import wordSrc_9 from '../../../../public/audio/lesson14/lesson_14_9.mp3'

export default function BeginnerLesson13() {
  const words_1 = [
    {
      enWord: 'Years old',
      ruWord: 'Лет (возраст)',
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
      ruWord: 'Лет (возраст)',
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
        lessonNumber={13}
        isVocabulary={true}
        words_1={words_1}
        words_2={words_2}
        words_3={words_3}
        wordsToAsk_1={wordsToAsk_1}
        wordsToAsk_2={wordsToAsk_2}
        wordsToAsk_3={wordsToAsk_3}
        nextUrl='/lessons/beginner/lesson14'
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
