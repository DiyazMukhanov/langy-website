import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson4() {
   const text = <>
   <p>1. I have a red car. - У меня есть красная машина.</p>
   <p>2. She likes blue apples. - Ей нравятся синие яблоки.</p>
   <p>3. He has two white dogs. - У него две белые собаки.</p>
   <p>4. The sky is blue. - Небо синее.</p>
   <p>5. This is a big car. - Это большая машина.</p>
   <p>6. She has a small cat. - У неё есть маленькая кошка.</p>
   <p>7. Three cats are playing. - Три кошки играют.</p>
   <p>8. I see two birds. - Я вижу двух птиц.</p>
   <p>9. My book is on the table. - Моя книга на столе.</p>
   <p>10. The sun is yellow. - Солнце желтое.</p>
   </>

   return (
   <>
   <BeginnerLessonLayout lessonNumber={4} isTextLesson={true} text={text} nextUrl='/lessons/beginner/lesson5'/>
   </>
   )
}