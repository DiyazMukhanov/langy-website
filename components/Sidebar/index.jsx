import styles from './Sidebar.module.scss'
import classNames from 'classnames'

export default function Sidebar({ lessonsSummary }) {
      return (
        <div className={styles.lessonsListContainer}>
        {lessonsSummary.map(lessonBlock => (
         <div className={styles.lessonBlock} key={lessonBlock.title}>
            <div
            className={classNames(
             styles.title,
             {[styles.current]: lessonBlock.isCurrent}
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
                 >
                     {lesson.chapter}
                 </div>
             ))}
         </div>
        ))}
     </div>
      )
}