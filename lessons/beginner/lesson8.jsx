import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";
import { useRef } from "react";
import styles from './pronounce.module.scss'
import Play from './../../public/images/Play.svg'
import Image from "next/image"

export default function BeginnerLesson8() {
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
  <div className={styles.container}>1. <span style={style}>qu</span>/ kw /Куа<span className={styles.styleWord} ref={spanRef1} >queen<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef1)} className={styles.wordPlay}/></span> — королева</div>
  <div className={styles.container}>2. <span style={style}>igh</span>/ aı /	Ай<span className={styles.styleWord} ref={spanRef2} >high<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef2)} className={styles.wordPlay}/></span> — высоко</div>
  <div className={styles.container}>3. <span style={style}>all</span>/ Ɔ:l /Ол<span className={styles.styleWord} ref={spanRef3} >tall<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef3)} className={styles.wordPlay}/></span> — высокий</div>
  <div className={styles.container}>4. <span style={style}>ai</span>/ eı /	Эй<span className={styles.styleWord} ref={spanRef4} >Spain<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef4)} className={styles.wordPlay}/></span> — Испания</div>
  <div className={styles.container}>5. <span style={style}>ay</span>/ eı /	Эй<span className={styles.styleWord} ref={spanRef5} >May<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef5)} className={styles.wordPlay}/></span> — Май</div>
  <div className={styles.container}>6. <span style={style}>oi</span>/ oı /	Ой<span className={styles.styleWord} ref={spanRef6} >point<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef6)} className={styles.wordPlay}/></span> — очко</div>
  <div className={styles.container}>7. <span style={style}>oy</span>/ oı /	Ой<span className={styles.styleWord} ref={spanRef7} >toy<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef7)} className={styles.wordPlay}/></span> — игрушка</div>
  <div className={styles.container}>8. <span style={style}>ow</span>/ oƱ /Оу<span className={styles.styleWord} ref={spanRef8} >grow<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef8)} className={styles.wordPlay}/></span> — расти</div>
  <div className={styles.container}>9. <span style={style}>ou</span>/ aƱ /Ау<span className={styles.styleWord} ref={spanRef9} >out<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef9)} className={styles.wordPlay}/></span> — вне</div>
  <div className={styles.container}>10. <span style={style}>ew</span>/ ju: /	Ю<span className={styles.styleWord} ref={spanRef10} >knew<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef10)} className={styles.wordPlay}/></span> — знал</div>
  <div className={styles.container}>11. <span style={style}>aw</span>/ Ɔ:/	Ооо<span className={styles.styleWord} ref={spanRef11} >draw<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef11)} className={styles.wordPlay}/></span> — рисовать</div>
  <div className={styles.container}>11. <span style={style}>ee+r</span>/ ıə/ Иа<span className={styles.styleWord} ref={spanRef12} >engineer<Image priority src={Play} width={30} onClick={() => readWordAloud(spanRef12)} className={styles.wordPlay}/></span> — инженер</div>
  </>
   return (
   <>
     <BeginnerLessonLayout lessonNumber={8} isTextLesson={true} text={text} nextUrl='/lessons/beginner/lesson9'/>
   </>
   )
}