import styles from "./TeacherCard.module.scss";
import Image from 'next/image';

export default function TeacherCard() {
    return (
        <div className={styles.card}>
            <Image
                alt="teacher"
                priority
                src='https://storage.googleapis.com/langy.su/with-teachers/teachers-photos/teacher.png'
                height={300}
                width={250}
                className={styles.image}
            />
            <div className={styles.description}>
                <p>Артур Пирожков Львович</p>
                <p>Суперский и опытный учитель</p>
            </div>
        </div>
    )
}

