import styles from './ChapterCard.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

export default function ChapterCard({ imageSrc, chapterTitle, color }) {
    const cardColorStyles = {
        green: styles.green,
        blue: styles.blue,
        orange: styles.orange,
        purple: styles.purple
    }

    return (
        <div className={classNames(
            styles.container,
            cardColorStyles[color]
        )}>
            <div className={styles.chapterTitle}>{chapterTitle}</div>
            <Image
                priority
                src={imageSrc}
                width={300}
                height={200}
                className={styles.cardsMobile}
            />
        </div>
    )
}