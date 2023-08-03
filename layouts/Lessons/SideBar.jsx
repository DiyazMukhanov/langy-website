import { Typography } from '@/components/Typography'
import styles from './SideBar.module.scss'
import classNames from 'classnames'

export default function SideBar() {
    const lessonsSummary = [
        {
            title: 'Урок 1',
            lessonNumber: 1,
            isCompleted: false,
            isCurrent: true,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    isCurrent: true,
                    isCompleted: true
                },
                {
                    chapter: 'Listening/Reading',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        },
        {
            title: 'Урок 2',
            lessonNumber: 2,
            isCompleted: false,
            isCurrent: false,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Listening/Reading',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        },
        {
            title: 'Урок 3',
            lessonNumber: 3,
            isCompleted: false,
            isCurrent: false,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Listening/Reading',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        },
        {
            title: 'Урок 4',
            lessonNumber: 4,
            isCompleted: false,
            isCurrent: false,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Listening/Reading',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        },
        {
            title: 'Урок 5',
            lessonNumber: 5,
            isCompleted: false,
            isCurrent: false,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Listening/Reading',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        }
    ]

    return (
    <div className={styles.sideBar}>
    <Typography size='small' element='h3' className={styles.text}>Beginner</Typography>
    <p>подписка действует до 30.07.23</p>
    <div className={styles.lessonsListContainer}>
       {lessonsSummary.map(lessonBlock => (
        <div className={styles.lessonBlock}>
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