import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson6() {
   const words = [
      {
         ru: 'мебель',
         enRight: 'furniture',
         imageUrl: 'https://storage.googleapis.com/langy.su/images/room/furniture.jpg',
         enWrong: ['curtains', 'lamp'],
         audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson5/furniture.mp3'
       },
       {
         ru: 'занавески',
         enRight: 'curtains',
         imageUrl: 'https://storage.googleapis.com/langy.su/images/room/curtains.jpg',
         enWrong: ['mirror', 'bed'],
         audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson5/curtains.mp3'
       },
       {
         ru: 'лампа',
         enRight: 'lamp',
         imageUrl: 'https://storage.googleapis.com/langy.su/images/room/lamp.jpg',
         enWrong: ['bookshelf', 'rug'],
         audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson5/lamp.mp3'
       },
       {
         ru: 'кровать',
         enRight: 'bed',
         imageUrl: 'https://storage.googleapis.com/langy.su/images/room/bed.jpg',
         enWrong: ['clock', 'plant'],
         audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson5/bed.mp3'
       },
       {
         ru: 'книжная полка',
         enRight: 'bookshelf',
         imageUrl: 'https://storage.googleapis.com/langy.su/images/room/bookshelf.jpg',
         enWrong: ['painting', 'mirror'],
         audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson5/bookshelf.mp3'
       },
       {
         ru: 'ковер',
         enRight: 'carpet',
         imageUrl: 'https://storage.googleapis.com/langy.su/images/room/carpet.jpg',
         enWrong: ['lamp', 'clock'],
         audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson5/carpet.mp3'
       },
       {
         ru: 'зеркало',
         enRight: 'mirror',
         imageUrl: 'https://storage.googleapis.com/langy.su/images/room/mirror.jpg',
         enWrong: ['bed', 'curtains'],
         audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson5/mirror.mp3'
       },
       {
         ru: 'часы',
         enRight: 'clock',
         imageUrl: 'https://storage.googleapis.com/langy.su/images/room/clock.jpg',
         enWrong: ['rug', 'lamp'],
         audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson5/clock.mp3'
       },
       {
         ru: 'картина',
         enRight: 'painting',
         imageUrl: 'https://storage.googleapis.com/langy.su/images/room/painting.jpg',
         enWrong: ['furniture', 'bookshelf'],
         audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson5/painting.mp3'
       },
       {
         ru: 'растение',
         enRight: 'plant',
         imageUrl: 'https://storage.googleapis.com/langy.su/images/room/plant.jpg',
         enWrong: ['mirror', 'bed'],
         audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson5/plant.mp3'
       }
    ];
   
   return (
   <>
   <BeginnerLessonLayout 
   lessonNumber={6} 
   isCardLesson={true}
   words={words}
   nextUrl = '/lessons/beginner/lesson7'
   />
   </>
   )
}

