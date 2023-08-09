import Header from "@/components/Header";
import styles from './LessonLayout.module.scss';
import { useEffect, useRef } from "react";
import classNames from "classnames";
import SideBarDesktop from "./SideBarDesktop";
import { Typography } from "@/components/Typography";
import { UserContext } from "@/store/userContext";
import { useContext } from "react";

export default function LessonLayout({ children, chapter, withoutProgress }) {
    const userCtx = useContext(UserContext)
    const lessonsSummary = userCtx.lessonsSummary

    const progress = {
        grammar: 25,
        audio: 50,
        writing: 75,
        test: 100
    }

    const currentLesson = lessonsSummary.filter(lesson => lesson.isCurrent === true)
    const currentChapter = currentLesson[0].lessons.filter(chapter => chapter.isCurrent === true)
    
    return (<>
    <Header variant='white' lessonsSummary={lessonsSummary}/>
    <div className={styles.container}>
        <SideBarDesktop lessonsSummary={lessonsSummary}/>
        <div className={styles.rightSide}>
            <div>
            <Typography size='small' element='h3' className={styles.text}>Beginner</Typography>
            <p>подписка действует до 30.07.23</p>
            </div>
            {!withoutProgress && (<div className={styles.progressContainer}>
                <div style={{
            width: `${progress[chapter]}%`,
            height: '100%',
            background: '#48C61C'
            }}/>
            </div>)}
            
         
        <div className={styles.links}>
           {chapter === 'grammar' && <p className={styles.currentLink}>Грамматика</p>}
           {chapter === 'audio' && <p className={styles.currentLink}>Аудио/Чтение</p>}
           {chapter === 'writing' && <p className={styles.currentLink}>Письмо</p>}
           {chapter === 'test' && <p className={styles.currentLink}>Тест</p>}
        </div>
        {children}
        </div>
    </div>
    
    </>
    )
}