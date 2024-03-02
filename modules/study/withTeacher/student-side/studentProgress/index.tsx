import { Pagination } from '@/ui-kit/Pagination';
import WithTeachersLayout from '../shared/withTeachersLayout';
import { ProgressLessonCard } from './ProgressLessonCard';
import styles from './Student.module.scss';
import { useState } from 'react';

const STUDENT_PROGRESS = [
    {
        teacherId: 1,
        studntProgress: 1,
        lessonDate: '1 января 2024',
        teacherName: 'Tomas James'
    },
    {
        teacherId: 2,
        studntProgress: 2,
        lessonDate: '2 января 2024',
        teacherName: 'Jackie Chan'
    },
    {
        teacherId: 3,
        studntProgress: 3,
        lessonDate: '3 января 2024',
        teacherName: 'Arnold Shwarzznegger'
    },
    {
        teacherId: 2,
        studntProgress: 2,
        lessonDate: '2 января 2024',
        teacherName: 'Jackie Chan'
    },
    {
        teacherId: 2,
        studntProgress: 2,
        lessonDate: '2 января 2024',
        teacherName: 'Jackie Chan'
    },
    {
        teacherId: 2,
        studntProgress: 2,
        lessonDate: '2 января 2024',
        teacherName: 'Jackie Chan'
    },
    {
        teacherId: 2,
        studntProgress: 2,
        lessonDate: '2 января 2024',
        teacherName: 'Jackie Chan'
    }
]

export default function StudentProgress() {
    const [currentPage, setCurrentPage] = useState(1)
    console.log(currentPage)

    const onPageChangeHandler = (newCurrentPage) => {
        setCurrentPage(newCurrentPage)
    }

    return (
        <WithTeachersLayout>
            <div className={styles.container}>
                <div className={styles.progressesContainer}>
                    {STUDENT_PROGRESS.map(item => <ProgressLessonCard teacher={item.teacherName} date={item.lessonDate} />)}
                </div>
                <Pagination
                    onPageChange={onPageChangeHandler}
                    totalCount={100}
                    siblingCount={1}
                    currentPage={currentPage}
                    pageSize={5}
                />
            </div>

        </WithTeachersLayout>
    )
}