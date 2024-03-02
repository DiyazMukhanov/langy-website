import { Button } from '@/ui-kit/Button';
import styles from './ProgressLessonCard.module.scss';

export const ProgressLessonCard = ({ date, teacher }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>{date}</p>
                <p>{teacher}</p>
            </div>
            <Button variant='teachersBook' className={styles.opinionBtn}>Оставить отзыв</Button>
        </div>
    )
}