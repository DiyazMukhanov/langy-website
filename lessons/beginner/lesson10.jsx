import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson10() {
   
   const text = <>
  <p>1. Can I have a sandwich, please? - Могу ли я получить бутерброд, пожалуйста?</p>
  <p>2. Where is the supermarket? - Где находится супермаркет?</p>
  <p>3. I'd like a coffee, please. - Я бы хотел кофе, пожалуйста.</p>
  <p>4. How much is this? - Сколько это стоит?</p>
  <p>5. What time is it? - Который час?</p>
  <p>6. Excuse me, can you help me? - Извините, можете ли вы мне помочь?</p>
  <p>7. Please pass the salt. - Пожалуйста, передайте соль.</p>
  <p>8. I need some water. - Мне нужна вода.</p>
  <p>9. Is this your book? - Это ваша книга?</p>
  <p>10. Where is the bathroom? - Где находится ванная комната?</p>
   </>

   return (
   <>
     <BeginnerLessonLayout lessonNumber={10} isTextLesson={true} text={text} nextUrl='/lessons/beginner/lesson11'/>
   </>
   )
}