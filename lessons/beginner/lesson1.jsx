// import BeginnerVideo from "@/components/BeginnerVideo";
import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";


export default function BeginnerLesson1() {
   const words = [
      {
        ru: 'яблоко',
        enRight: 'apple',
        imageUrl: '/images/food/apple.jpg',
        enWrong: ['orange', 'bread'],
        audioSrc: '/audio/lesson1/apple.mp3'
      },
      {
          ru: 'хлеб',
          enRight: 'bread',
          imageUrl: '/images/food/bread.jpg',
          enWrong: ['cheese', 'tomato'],
          audioSrc: '/audio/lesson1/bread.mp3'
        },
        {
          ru: 'сыр',
          enRight: 'cheese',
          imageUrl: '/images/food/cheese.jpg',
          enWrong: ['ice cream', 'fish'],
          audioSrc: '/audio/lesson1/cheese.mp3'
        },
        {
          ru: 'помидор',
          enRight: 'tomato',
          imageUrl: '/images/food/tomato.jpg',
          enWrong: ['potato', 'chicken'],
          audioSrc: '/audio/lesson1/tomato.mp3'
        },
        {
          ru: 'картофель',
          enRight: 'potato',
          imageUrl: '/images/food/potato.jpg',
          enWrong: ['soup', 'chocolate'],
          audioSrc: '/audio/lesson1/potato.mp3'
        },
        {
          ru: 'рыба',
          enRight: 'fish',
          imageUrl: '/images/food/fish.jpg',
          enWrong: ['apple', 'bread'],
          audioSrc: '/audio/lesson1/fish.mp3'
        },
        {
          ru: 'курица',
          enRight: 'chicken',
          imageUrl: '/images/food/chicken.jpg',
          enWrong: ['tomato', 'tea'],
          audioSrc: '/audio/lesson1/chicken.mp3'
        },
        {
          ru: 'суп',
          enRight: 'soup',
          imageUrl: '/images/food/soup.jpg',
          enWrong: ['coffee', 'cheese'],
          audioSrc: '/audio/lesson1/soup.mp3'
        },
        {
          ru: 'шоколад',
          enRight: 'chocolate',
          imageUrl: '/images/food/chocolate.jpg',
          enWrong: ['tomato', 'orange'],
          audioSrc: '/audio/lesson1/chocolate.mp3'
        },
        {
          ru: 'мороженое',
          enRight: 'ice cream',
          imageUrl: '/images/food/ice_cream.jpg',
          enWrong: ['potato', 'fish'],
          audioSrc: '/audio/lesson1/ice_cream.mp3'
        }
    ];
   
   return (
   <>
   <BeginnerLessonLayout 
   lessonNumber={1} 
   isCardLesson={true}
   words={words}
   nextUrl = '/lessons/beginner/lesson2'
   />
   {/* <BeginnerVideo /> */}
   </>
   )
}