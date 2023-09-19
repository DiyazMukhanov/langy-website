import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson5() {
   const style = { color: 'blue', paddingLeft: 5, paddingRight:5, fontWeight:600 }
   const styleWord = { color: 'green', paddingLeft: 5, paddingRight:5, fontWeight:600 }
   const text = <>
   <p>1. <span style={style}>ee</span>/ i: / И <span style={styleWord}>bee</span> — пчела</p>
   <p>2. <span style={style}>ea</span> / ı :/ И <span style={styleWord}>tea</span> — чай</p>
   <p>3. <span style={style}>oo</span> / u / У <span style={styleWord}>cook</span> — готовить</p>
   <p>4. <span style={style}>th</span> / ð /  / Ѳ / З, С (межзубной) <span style={styleWord}>thumb</span> — палец</p>
   <p>5. <span style={style}>sh</span> / ʃ / Ш <span style={styleWord}>shout</span> — кричать</p>
   <p>6. <span style={style}>ch</span> / t ʃ  / Ч <span style={styleWord}>chair</span> — стул</p>
   <p>7. <span style={style}>ph</span> / f / Ф <span style={styleWord}>phone</span> — телефон</p>
   <p>8. <span style={style}>ck</span> / k / К <span style={styleWord}>snack</span> — перекус</p>
   <p>9. <span style={style}>ng</span> / Ƞ  / Нг <span style={styleWord}>song</span> — песня</p>
   <p>10. <span style={style}>wh</span> / w / Уa <span style={styleWord}>why</span> — почему</p>
   <p>11. <span style={style}>wr</span> / r / Р <span style={styleWord}>write</span> — писать</p>
   </>

   return (
   <>
     <BeginnerLessonLayout lessonNumber={5} isTextLesson={true} text={text} nextUrl='/lessons/beginner/lesson6'/>
   </>
   )
}