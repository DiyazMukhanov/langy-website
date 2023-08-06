import styles from './Sidebar.module.scss'
import classNames from 'classnames'

export default function Sidebar({ lessonsSummary }) {
      return (
        <div className={styles.lessonsListContainer}>
        {lessonsSummary.map(lessonBlock => (
         <div className={styles.lessonBlock} key={lessonBlock.chapter}>
            <div key={lessonBlock.chapter} 
            className={classNames(
             styles.title,
             {[styles.current]: lessonBlock.isCurrent}
             )}
             >
             {lessonBlock.title}
             </div>
             {lessonBlock.lessons.map(lesson => (
                 <div key={lesson.title} className={classNames(
                     styles.chapter,
                     {[styles.currentChapter]: lesson.isCurrent}
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