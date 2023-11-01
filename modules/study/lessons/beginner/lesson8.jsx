import BeginnerLessonLayout from "../../beginner/BeginnerLessonLayout";
import wordSrc_1 from '../../../../public/audio/lesson7/lesson_7_1.mp3'
import wordSrc_2 from '../../../../public/audio/lesson7/lesson_7_2.mp3'
import wordSrc_3 from '../../../../public/audio/lesson7/lesson_7_3.mp3'
import wordSrc_4 from '../../../../public/audio/lesson7/lesson_7_4.mp3'
import wordSrc_5 from '../../../../public/audio/lesson7/lesson_7_5.mp3'
import wordSrc_6 from '../../../../public/audio/lesson7/lesson_7_6.mp3'
import wordSrc_7 from '../../../../public/audio/lesson7/lesson_7_7.mp3'
import wordSrc_8 from '../../../../public/audio/lesson7/lesson_7_8.mp3'
import wordSrc_9 from '../../../../public/audio/lesson7/lesson_7_9.mp3'

export default function BeginnerLesson8() {

  const words_1 = [
    {
      enWord: 'He is a teacher',
      ruWord: 'Он учитель'
    },
    {
      enWord: 'She likes swimming',
      ruWord: 'Ей нравится плавать'
    },
    {
      enWord: 'I have a book',
      ruWord: 'У меня есть книга'
    },
  ]

  const wordsToAsk_1 = [{
    enWord: 'He is a teacher',
    ruWord: 'Он учитель'
  },
  {
    enWord: 'I have a book',
    ruWord: 'У меня есть книга'
  },
  {
    enWord: 'She likes swimming',
    ruWord: 'Ей нравится плавать'
  },]

  const words_2 = [
    {
      enWord: 'She is a teacher',
      ruWord: 'Она учитель'
    },
    {
      enWord: 'He is happy',
      ruWord: 'Он счастлив'
    },
    {
      enWord: 'I am sad',
      ruWord: 'Я грустный'
    },
  ]

  const wordsToAsk_2 = [{
    enWord: 'She is a teacher',
    ruWord: 'Она учитель'
  },
  {
    enWord: 'He is happy',
    ruWord: 'Он счастлив'
  },
  {
    enWord: 'I am sad',
    ruWord: 'Я грустный'
  },
  ]

  const words_3 = [
    {
      enWord: 'The dog is brown',
      ruWord: 'Собака коричневая'
    },
    {
      enWord: 'He is tall',
      ruWord: 'Он высокий'
    },
    {
      enWord: 'I am a student',
      ruWord: 'Я студент'
    },
  ]

  const wordsToAsk_3 = [{
    enWord: 'He is tall',
    ruWord: 'Он высокий'
  },
  {
    enWord: 'The dog is brown',
    ruWord: 'Собака коричневая'
  },
  {
    enWord: 'I am a student',
    ruWord: 'Я студент'
  },]

  return (
    <>
      <BeginnerLessonLayout
        lessonNumber={8}
        isVocabulary={true}
        words_1={words_1}
        words_2={words_2}
        words_3={words_3}
        wordsToAsk_1={wordsToAsk_1}
        wordsToAsk_2={wordsToAsk_2}
        wordsToAsk_3={wordsToAsk_3}
        nextUrl='/lessons/beginner/lesson9'
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