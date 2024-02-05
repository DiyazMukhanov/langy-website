import styles from './Confirm.module.scss'

export default function Confirm() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>Вы точно хотите забронировать этот урок?</div>
            <div className={styles.bottom}>
                <button className={styles.btn}>Да</button>
                <button className={styles.btn}>Нет</button>
            </div>
        </div>
    )
}