import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";
import wordSrc_1 from '../../public/audio/lesson2/lesson_2_1.mp3'
import wordSrc_2 from '../../public/audio/lesson2/lesson_2_2.mp3'
import wordSrc_3 from '../../public/audio/lesson2/lesson_2_3.mp3'
import wordSrc_4 from '../../public/audio/lesson2/lesson_2_4.mp3'
import wordSrc_5 from '../../public/audio/lesson2/lesson_2_5.mp3'
import wordSrc_6 from '../../public/audio/lesson2/lesson_2_6.mp3'
import wordSrc_7 from '../../public/audio/lesson2/lesson_2_7.mp3'
import wordSrc_8 from '../../public/audio/lesson2/lesson_2_8.mp3'
import wordSrc_9 from '../../public/audio/lesson2/lesson_2_9.mp3'

export default function BeginnerLesson2() {
   // const text = <><p>1. Hello, my name is John. - Привет, моё имя - Джон. </p>
   // <p>2.	I am 25 years old. – Мне 25 лет. </p>
   // <p>3. Goodbye, see you later. - До свидания, увидимся позже. </p>
   // <p>4. What is your name? -  Как тебя зовут? </p>
   // <p>5.	It's a nice day. - Это хороший день. </p>
   // <p>6. She is my friend. - Она моя подруга. </p>	
   // <p>7.	He has a dog. - У него есть собака. </p>
   // <p>8.	Bye, see you later. - Пока, увидимся позже. </p>
   // <p>9.	Thank you very much. - Спасибо большое. </p> 
   // <p>10. Excuse me, please. - Извините, пожалуйста. </p>
   // </>

const words_1 = [
   {
       enWord: 'Hello, my name is John',
       ruWord: 'Привет, моё имя - Джон',
   },
   {
       enWord: 'I am 25 years old',
       ruWord: 'Мне 25 лет'
   },
   {
       enWord: 'Goodbye, see you later',
       ruWord: 'До свидания, увидимся позже'
   },
]

const wordsToAsk_1 = [  
   {
      enWord: 'Goodbye, see you later',
      ruWord: 'До свидания, увидимся позже'
  },
{
   enWord: 'Hello, my name is John',
   ruWord: 'Привет, моё имя - Джон'
},
{
   enWord: 'I am 25 years old',
   ruWord: 'Мне 25 лет'
},
]

const words_2 = [
   {
      enWord: 'What is your name?',
      ruWord: 'Как тебя зовут?'
   },
   {
      enWord: `It's a nice day`,
      ruWord: 'Это хороший день'
   },
   {
      enWord: 'She is my friend',
      ruWord: 'Она моя подруга'
   },
]

const wordsToAsk_2 = [{
      enWord: 'What is your name?',
      ruWord: 'Как тебя зовут?'
   },
   {
      enWord: 'She is my friend',
      ruWord: 'Она моя подруга'
   },
   {
      enWord: `It's a nice day`,
      ruWord: 'Это хороший день'
   },
]

const words_3 = [
{
    enWord: 'He has a dog',
    ruWord: 'У него есть собака'
},
{
    enWord: 'Bye, see you later',
    ruWord: 'Пока, увидимся позже'
},
{
    enWord: 'Thank you very much',
    ruWord: 'Спасибо большое'
},
]

const wordsToAsk_3 = [ {
   enWord: 'Bye, see you later',
   ruWord: 'Пока, увидимся позже'
},
{
   enWord: 'He has a dog',
   ruWord: 'У него есть собака'
},
{
   enWord: 'Thank you very much',
   ruWord: 'Спасибо большое'
},]

   return (
   <>
   <BeginnerLessonLayout 
   lessonNumber={2} 
   isVocabulary={true} 
   words_1={words_1} 
   words_2={words_2} 
   words_3={words_3} 
   wordsToAsk_1={wordsToAsk_1} 
   wordsToAsk_2={wordsToAsk_2} 
   wordsToAsk_3={wordsToAsk_3}
   wordSrc_1={wordSrc_1}
   wordSrc_2={wordSrc_2} 
   wordSrc_3={wordSrc_3}
   wordSrc_4={wordSrc_4}
   wordSrc_5={wordSrc_5} 
   wordSrc_6={wordSrc_6}
   wordSrc_7={wordSrc_7}
   wordSrc_8={wordSrc_8} 
   wordSrc_9={wordSrc_9}
   nextUrl='/lessons/beginner/lesson3'/>
   </>
   )
}