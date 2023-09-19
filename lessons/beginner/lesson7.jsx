import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson7() {
   
   const text = <>
   <p>1. He is a teacher. - Он учитель.</p>
    <p>2. She likes swimming. - Ей нравится плавать.</p>
    <p>3. I have a book. - У меня есть книга.</p>
    <p>4. She is a teacher. - Она учитель.</p>
    <p>5. He is happy. - Он счастлив.</p>
    <p>6. I am sad. - Я грустный.</p>
    <p>7. The dog is brown. - Собака коричневая.</p>
    <p>8. He is tall. - Он высокий.</p>
    <p>9. I am a student. - Я студент.</p>
    <p>10. The cat is black. - Кошка черная.</p>
   </>

   return (
   <>
     <BeginnerLessonLayout lessonNumber={7} isTextLesson={true} text={text} nextUrl='/lessons/beginner/lesson8'/>
   </>
   )
}