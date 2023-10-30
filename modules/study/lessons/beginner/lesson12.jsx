
import BeginnerLessonLayout from "../../beginner/BeginnerLessonLayout";

export default function BeginnerLesson12() {
  const words = [
    {
      ru: 'один',
      enRight: 'one',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/numbers/one.jpg',
      enWrong: ['two', 'three'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson11/one.mp3'
    },
    {
      ru: 'два',
      enRight: 'two',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/numbers/two.jpg',
      enWrong: ['four', 'five'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson11/two.mp3'
    },
    {
      ru: 'три',
      enRight: 'three',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/numbers/three.jpeg',
      enWrong: ['six', 'seven'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson11/three.mp3'
    },
    {
      ru: 'четыре',
      enRight: 'four',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/numbers/four.jpg',
      enWrong: ['eight', 'nine'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson11/four.mp3'
    },
    {
      ru: 'пять',
      enRight: 'five',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/numbers/five.jpeg',
      enWrong: ['ten', 'eleven'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson11/five.mp3'
    },
    {
      ru: 'шесть',
      enRight: 'six',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/numbers/six.jpg',
      enWrong: ['twelve', 'thirteen'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson11/six.mp3'
    },
    {
      ru: 'семь',
      enRight: 'seven',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/numbers/seven.jpeg',
      enWrong: ['fourteen', 'fifteen'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson11/seven.mp3'
    },
    {
      ru: 'восемь',
      enRight: 'eight',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/numbers/eight.jpg',
      enWrong: ['sixteen', 'seventeen'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson11/eight.mp3'
    },
    {
      ru: 'девять',
      enRight: 'nine',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/numbers/nine.jpg',
      enWrong: ['eighteen', 'nineteen'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson11/nine.mp3'
    },
    {
      ru: 'десять',
      enRight: 'ten',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/numbers/ten.jpeg',
      enWrong: ['twenty', 'thirty'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson11/ten.mp3'
    },
    {
      ru: 'одиннадцать',
      enRight: 'eleven',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/numbers/eleven.jpg',
      enWrong: ['twelve', 'thirteen'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson11/eleven.mp3'
    },
    {
      ru: 'двенадцать',
      enRight: 'twelve',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/numbers/twelve.jpg',
      enWrong: ['eleven', 'thirteen'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson11/twelve.mp3'
    }
  ];

  return (
    <>
      <BeginnerLessonLayout
        lessonNumber={12}
        isCardLesson={true}
        words={words}
        nextUrl='/lessons/beginner/lesson13'
      />
    </>
  )
}
