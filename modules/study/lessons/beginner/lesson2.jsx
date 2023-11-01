import BeginnerLessonLayout from "../../beginner/BeginnerLessonLayout";

export default function BeginnerLesson2() {
  const words = [
    {
      ru: 'яблоко',
      enRight: 'apple',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/food/apple.jpg',
      enWrong: ['orange', 'bread'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson1/apple.mp3'
    },
    {
      ru: 'хлеб',
      enRight: 'bread',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/food/bread.jpg',
      enWrong: ['cheese', 'tomato'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson1/bread.mp3'
    },
    {
      ru: 'сыр',
      enRight: 'cheese',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/food/cheese.jpg',
      enWrong: ['ice cream', 'fish'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson1/cheese.mp3'
    },
    {
      ru: 'помидор',
      enRight: 'tomato',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/food/tomato.jpg',
      enWrong: ['potato', 'chicken'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson1/tomato.mp3'
    },
    {
      ru: 'картофель',
      enRight: 'potato',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/food/potato.jpg',
      enWrong: ['soup', 'chocolate'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson1/potato.mp3'
    },
    {
      ru: 'рыба',
      enRight: 'fish',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/food/fish.jpg',
      enWrong: ['apple', 'bread'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson1/fish.mp3'
    },
    {
      ru: 'курица',
      enRight: 'chicken',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/food/chicken.jpg',
      enWrong: ['tomato', 'tea'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson1/chicken.mp3'
    },
    {
      ru: 'суп',
      enRight: 'soup',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/food/soup.jpg',
      enWrong: ['coffee', 'cheese'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson1/soup.mp3'
    },
    {
      ru: 'шоколад',
      enRight: 'chocolate',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/food/chocolate.jpg',
      enWrong: ['tomato', 'orange'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson1/chocolate.mp3'
    },
    {
      ru: 'мороженое',
      enRight: 'ice cream',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/food/ice_cream.jpg',
      enWrong: ['potato', 'fish'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson1/ice_cream.mp3'
    }
  ];

  return (
    <>
      <BeginnerLessonLayout
        lessonNumber={2}
        isCardLesson={true}
        words={words}
        nextUrl='/lessons/beginner/lesson3'
      />
    </>
  )
}