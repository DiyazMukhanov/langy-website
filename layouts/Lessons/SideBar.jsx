import { Typography } from '@/components/Typography'
import styles from './SideBar.module.scss'
import classNames from 'classnames'

export default function SideBar({ lessonsSummary }) {
    
    return (
    <div className={styles.sideBar}>
    <Typography size='small' element='h3' className={styles.text}>Beginner</Typography>
    <p>подписка действует до 30.07.23</p>
    <div className={styles.lessonsListContainer}>
       {lessonsSummary.map(lessonBlock => (
        <div className={styles.lessonBlock} key={lessonBlock.chapter}>
           <div className={classNames(
            styles.title,
            {[styles.current]: lessonBlock.isCurrent}
            )}
            >
            {lessonBlock.title}
            </div>
            {lessonBlock.lessons.map(lesson => (
                <div className={classNames(
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
    </div> 
    )
}