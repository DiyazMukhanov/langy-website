import { useRouter } from 'next/router'
import styles from './Sidebar.module.scss'
import classNames from 'classnames'

export default function Sidebar({ lessonsSummary }) {
    const router = useRouter()
    const navigationHandler = (lessonNumber, lesson, level) => {
        const lessonsIndexes = {
            gr: 'video',
            au: 'audio',
            wr: 'writing',
            ts: 'test'
        }
        const chapterName = lessonsIndexes[lesson.chapterCode]
      
        router.push(`/lessons/${level}/lesson${lessonNumber}/${chapterName}`)
    }

    console.log(lessonsSummary)
      return (
        <div className={styles.lessonsListContainer}>
        {lessonsSummary.map(lessonBlock => (
         <div className={styles.lessonBlock} key={lessonBlock.title}>
            <div
            className={classNames(
             styles.title,
             {[styles.completed]: lessonBlock.isCompleted}
             )}
             >
             {lessonBlock.title}
             </div>
             {lessonBlock.lessons.map(lesson => (
                 <div key={lesson.chapter} className={classNames(
                     styles.chapter,
                     {[styles.currentChapter]: lesson.isCurrent},
                     {[styles.completed]: lesson.isCompleted},
                 )}
                 onClick={() => navigationHandler(lessonBlock.lessonNumber, lesson, lessonBlock.level)}
                 >
                     {lesson.chapter}
                 </div>
             ))}
         </div>
        ))}
     </div>
      )
}