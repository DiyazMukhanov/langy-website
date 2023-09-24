import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";
import { useRef } from "react";
import styles from './pronounce.module.scss'
import Play from './../../public/images/Play.svg'
import Image from "next/image"

export default function BeginnerLesson5() {
   const spanRef1 = useRef(null)
   const spanRef2 = useRef(null)
   const spanRef3 = useRef(null)
   const spanRef4 = useRef(null)
   const spanRef5 = useRef(null)
   const spanRef6 = useRef(null)
   const spanRef7 = useRef(null)
   const spanRef8 = useRef(null)
   const spanRef9 = useRef(null)
   const spanRef10 = useRef(null)
   const spanRef11 = useRef(null)

   const readWordAloud = (spanRef) => {
      
      if(spanRef.current) {
         const spanText = spanRef.current.textContent
         const speechSynthesis = window.speechSynthesis
         const utterance = new SpeechSynthesisUtterance(spanText)
         utterance.lang = 'en-US'
         speechSynthesis.speak(utterance)
      }     
    }

   const style = { color: 'blue', paddingLeft: 5, paddingRight:5, fontWeight:600 }
   
   const text = <>
   <div className={styles.container}>1. <span style={style}>ee</span>/ i: / И <span className={styles.styleWord} ref={spanRef1} >bee <Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef1)} className={styles.wordPlay}/></span> — пчела</div>
   <div className={styles.container}>2. <span style={style}>ea</span> / ı :/ И <span className={styles.styleWord} ref={spanRef2} >tea <Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef2)} className={styles.wordPlay}/></span> — чай</div>
   <div className={styles.container}>3. <span style={style}>oo</span> / u / У <span className={styles.styleWord} ref={spanRef3} >cook <Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef3)} className={styles.wordPlay}/></span> — готовить</div>
   <div className={styles.container}>4. <span style={style}>th</span> / ð /  / Ѳ / З, С (межзубной) <span className={styles.styleWord} ref={spanRef4} >thumb <Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef4)} className={styles.wordPlay}/></span> — палец</div>
   <div className={styles.container}>5. <span style={style}>sh</span> / ʃ / Ш <span className={styles.styleWord} ref={spanRef5} >shout <Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef5)} className={styles.wordPlay}/></span> — кричать</div>
   <div className={styles.container}>6. <span style={style}>ch</span> / t ʃ  / Ч <span className={styles.styleWord} ref={spanRef6} >chair <Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef6)} className={styles.wordPlay}/></span> — стул</div>
   <div className={styles.container}>7. <span style={style}>ph</span> / f / Ф <span className={styles.styleWord} ref={spanRef7} >phone <Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef7)} className={styles.wordPlay}/></span> — телефон</div>
   <div className={styles.container}>8. <span style={style}>ck</span> / k / К <span className={styles.styleWord} ref={spanRef8} >snack <Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef8)} className={styles.wordPlay}/></span> — перекус</div>
   <div className={styles.container}>9. <span style={style}>ng</span> / Ƞ  / Нг <span className={styles.styleWord} ref={spanRef9} >song <Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef9)} className={styles.wordPlay}/></span> — песня</div>
   <div className={styles.container}>10. <span style={style}>wh</span> / w / Уa <span className={styles.styleWord} ref={spanRef10} >why <Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef10)} className={styles.wordPlay}/></span> — почему</div>
   <div className={styles.container}>11. <span style={style}>wr</span> / r / Р <span className={styles.styleWord} ref={spanRef11} >write <Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef11)} className={styles.wordPlay}/></span> — писать</div>
   </>

   return (
   <>
     <BeginnerLessonLayout lessonNumber={5} isTextLesson={true} text={text} nextUrl='/lessons/beginner/lesson6'/>
   </>
   )
}