import Header from "@/components/Header";
import styles from './LessonLayout.module.scss';
import SideBar from "./SideBar";
import { useEffect, useRef } from "react";
import classNames from "classnames";

export default function LessonLayout({ children, lessonsSummary }) {
    const progress = 10

    const currentLesson = lessonsSummary.filter(lesson => lesson.isCurrent === true)
    const currentChapter = currentLesson[0].lessons.filter(chapter => chapter.isCurrent === true)
    console.log(currentChapter[0].ru)

    return (<>
    <Header variant='white'/>
    <div className={styles.container}>
        <SideBar lessonsSummary={lessonsSummary}/>
        <div className={styles.rightSide}>
            <div className={styles.progressContainer}>
                <div style={{
            width: `${progress}%`,
            height: '100%',
            background: '#48C61C'
            }}/>
            </div>
         
        <div className={styles.links}>
           <p className={classNames({[styles.currentLink]: currentChapter[0].ru === 'Грамматика'})}>Грамматика</p>
           <p className={classNames({[styles.currentLink]: currentChapter[0].ru === 'Аудио/Чтение'})}>Аудио/Чтение</p>
           <p className={classNames({[styles.currentLink]: currentChapter[0].ru === 'Письмо'})}>Письмо</p>
           <p className={classNames({[styles.currentLink]: currentChapter[0].ru === 'Тест'})}>Тест</p>
        </div>
        {children}
        </div>
    </div>
    
    </>
    )
}