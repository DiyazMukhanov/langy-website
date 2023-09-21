import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";
import { useRef } from "react";
import styles from './pronounce.module.scss'
import Play from './../../public/images/Play.svg'
import Image from "next/image"

export default function BeginnerLesson11() {
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
  const spanRef12 = useRef(null)

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
  <div className={styles.container}>1. <span style={style}>ou+r</span>	/aƱə /	Ауэ<span className={styles.styleWord} ref={spanRef1} >our<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef1)} className={styles.wordPlay}/></span> — наш</div>
  <div className={styles.container}>2. <span style={style}>oo+r	</span>/ Ɔ: /	Ооо<span className={styles.styleWord} ref={spanRef2} >door<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef2)} className={styles.wordPlay}/></span> — дверь</div>
  <div className={styles.container}>3. <span style={style}>wo+r</span>/ ɜ: /	Ё/О<span className={styles.styleWord} ref={spanRef3} >work<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef3)} className={styles.wordPlay}/></span> — работа</div>
  <div className={styles.container}>4. <span style={style}>ai+r</span>/ eə /	Эа<span className={styles.styleWord} ref={spanRef4} >chair<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef4)} className={styles.wordPlay}/></span> — стул</div>
  <div className={styles.container}>5. <span style={style}>oa+r</span>/ Ɔ: / Оо<span className={styles.styleWord} ref={spanRef5} >roar<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef5)} className={styles.wordPlay}/></span> — крик</div>
  <div className={styles.container}>6. <span style={style}>ould</span>/ Ʊd /	Уд<span className={styles.styleWord} ref={spanRef6} >could<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef6)} className={styles.wordPlay}/></span> — мог</div>
  <div className={styles.container}>7. <span style={style}>ound</span>/ aƱnd /	Аунд<span className={styles.styleWord} ref={spanRef7} >round<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef7)} className={styles.wordPlay}/></span> — круглый</div>
  <div className={styles.container}>8. <span style={style}>eigh</span>/ eı /	Эй<span className={styles.styleWord} ref={spanRef8} >eight<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef8)} className={styles.wordPlay}/></span> — восемь</div>
  <div className={styles.container}>9. <span style={style}>-y</span>/ ı /	И<span className={styles.styleWord} ref={spanRef9} >tiny<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef9)} className={styles.wordPlay}/></span> — крошечный</div>
  <div className={styles.container}>10. <span style={style}>au</span>/ Ɔ: /	Оo<span className={styles.styleWord} ref={spanRef10} >Paul<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef10)} className={styles.wordPlay}/></span> — Пол</div>
  <div className={styles.container}>11. <span style={style}>gh</span>/ f /	Ф<span className={styles.styleWord} ref={spanRef11} >laugh<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef11)} className={styles.wordPlay}/></span> — смеяться</div>
  <div className={styles.container}>11. <span style={style}>aught</span>/ Ɔ:t /	От<span className={styles.styleWord} ref={spanRef12} >taught<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef12)} className={styles.wordPlay}/></span> — научил</div>
  </>
;

   return (
   <>
     <BeginnerLessonLayout lessonNumber={11} isTextLesson={true} text={text} nextUrl='/lessons/beginner/lesson12'/>
   </>
   )
}