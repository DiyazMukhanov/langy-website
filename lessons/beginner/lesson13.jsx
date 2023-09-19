import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson13() {
   
   const text = <>
    <p>1. My name is Emily. - Меня зовут Эмили.</p>
    <p>2. I am 30 years old. - Мне 30 лет.</p>
    <p>3. I like reading books. - Мне нравится читать книги.</p>
    <p>4. He is a doctor. - Он врач.</p>
    <p>5. The flower is red. - Цветок красный.</p>
    <p>6. I have a blue bag. - У меня есть синяя сумка.</p>
    <p>7. It's a sunny day. - Это солнечный день.</p>
    <p>8. She is a good friend. - Она хорошая подруга.</p>
    <p>9. They play soccer. - Они играют в футбол.</p>
    <p>10. I love ice cream. - Я люблю мороженое.</p>
   </>

   return (
   <>
     <BeginnerLessonLayout lessonNumber={13} isTextLesson={true} text={text} nextUrl='/lessons/beginner/lesson14'/>
   </>
   )
}