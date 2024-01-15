import styles from './ChapterCard.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from "next/router"

export default function ChapterCard({ imageSrc, chapterTitle, color }) {
    const cardColorStyles = {
        green: styles.green,
        blue: styles.blue,
        orange: styles.orange,
        purple: styles.purple
    }

    const router = useRouter()

    return (
        <div
            className={classNames(
                styles.container,
                cardColorStyles[color]
            )}
            onClick={() => router.push('/menu')}
        >
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