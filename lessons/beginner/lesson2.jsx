import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson1() {
   const text = <><p>1. Hello, my name is John. - Привет, моё имя - Джон. </p>
   <p>2.	I am 25 years old. – Мне 25 лет. </p>
   <p>3. Goodbye, see you later. - До свидания, увидимся позже. </p>
   <p>4. What is your name? - Что это твоё имя? </p>
   <p>5.	It's a nice day. - Это хороший день. </p>
   <p>6. She is my friend. - Она моя подруга. </p>	
   <p>7.	He has a dog. - У него есть собака. </p>
   <p>8.	Bye, see you later. - Пока, увидимся позже. </p>
   <p>9.	Thank you very much. - Спасибо большое. </p> 
   <p>10. Excuse me, please. - Извините, пожалуйста. </p>
   </>

   return (
   <>
   <BeginnerLessonLayout lessonNumber={2} isTextLesson={true} text={text}/>
   </>
   )
}