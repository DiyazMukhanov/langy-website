import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";

export default function BeginnerLesson11() {
const style = { color: 'blue', paddingLeft: 5, paddingRight: 5, fontWeight: 600 };
const styleWord = { color: 'green', paddingLeft: 5, paddingRight: 5, fontWeight: 600 };

const text = (
  <>
    <p>1.
      <span style={style}>ou+r</span> / aƱə / Ауэ <span style={styleWord}>our</span> — наш
    </p>
    <p>2.
      <span style={style}>oo+r</span> / Ɔ: / Ооо <span style={styleWord}>door</span> — дверь
    </p>
    <p>3.
      <span style={style}>wo+r</span> / ɜ: / Ё/О <span style={styleWord}>work</span> — работа
    </p>
    <p>4.
      <span style={style}>ai+r</span> / eə / Эа <span style={styleWord}>chair</span> — стул
    </p>
    <p>5.
      <span style={style}>oa+r</span> / Ɔ: / Оо <span style={styleWord}>roar</span> — крик
    </p>
    <p>6.
      <span style={style}>ould</span> / Ʊd / Уд <span style={styleWord}>could</span> — мог
    </p>
    <p>7.
      <span style={style}>ound</span> / aƱnd / Аунд <span style={styleWord}>round</span> — круглый
    </p>
    <p>8.
      <span style={style}>eigh</span> / eı / Эй <span style={styleWord}>eight</span> — восемь
    </p>
    <p>9.
      <span style={style}>-y</span> / ı / И <span style={styleWord}>tiny</span> — крошечный
    </p>
    <p>10.
      <span style={style}>au</span> / Ɔ: / Оо <span style={styleWord}>Paul</span> — Пол
    </p>
    <p>11.
      <span style={style}>gh</span> / f / Ф <span style={styleWord}>laugh</span> — смеяться
    </p>
    <p>12.
      <span style={style}>aught</span> / Ɔ:t / От <span style={styleWord}>taught</span> — научил
    </p>
  </>
);

   return (
   <>
     <BeginnerLessonLayout lessonNumber={11} isTextLesson={true} text={text} nextUrl='/lessons/beginner/lesson12'/>
   </>
   )
}