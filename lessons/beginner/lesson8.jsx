import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson8() {
  const style = { color: 'blue', paddingLeft: 5, paddingRight: 5, fontWeight: 600 };
  const styleWord = { color: 'green', paddingLeft: 5, paddingRight: 5, fontWeight: 600 };

  const text = (
    <>
      <p>1. 
        <span style={style}>qu</span> / kw / Куа <span style={styleWord}>queen</span> — королева
      </p>
      <p>2.
        <span style={style}>igh</span> / aı / Ай <span style={styleWord}>high</span> — высоко
      </p>
      <p>3.
        <span style={style}>all</span> / Ɔ:l / Ол <span style={styleWord}>tall</span> — высокий
      </p>
      <p>4.
        <span style={style}>ai</span> / eı / Эй <span style={styleWord}>Spain</span> — Испания
      </p>
      <p>5.
        <span style={style}>ay</span> / eı / Эй <span style={styleWord}>May</span> — Май
      </p>
      <p>6.
        <span style={style}>oi</span> / oı / Ой <span style={styleWord}>point</span> — очко
      </p>
      <p>7.
        <span style={style}>oy</span> / oı / Ой <span style={styleWord}>toy</span> — игрушка
      </p>
      <p>8.
        <span style={style}>ow</span> / oƱ / Оу <span style={styleWord}>grow</span> — расти
      </p>
      <p>9.
        <span style={style}>ou</span> / aƱ / Ау <span style={styleWord}>out</span> — вне
      </p>
      <p>10.
        <span style={style}>ew</span> / ju: / Ю <span style={styleWord}>knew</span> — знал
      </p>
      <p>11.
        <span style={style}>aw</span> / Ɔ: / Ооо <span style={styleWord}>draw</span> — рисовать
      </p>
      <p>12.
        <span style={style}>ee+r</span> / ıə / Иа <span style={styleWord}>engineer</span> — инженер
      </p>
    </>
  );

   return (
   <>
     <BeginnerLessonLayout lessonNumber={8} isTextLesson={true} text={text} nextUrl='/lessons/beginner/lesson9'/>
   </>
   )
}