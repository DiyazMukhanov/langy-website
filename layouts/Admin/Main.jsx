import styles from './Main.module.scss'
import { useRouter } from 'next/router'

export default function Main() {
    const router = useRouter()

    return (
    <>
      <div className={styles.container}>
        <p className={styles.link} onClick={() => router.push('/admin/students')}>Студенты</p>
        <p className={styles.link}>Статистика</p>
        <p className={styles.link} onClick={() => router.push('/admin/services')}>Служба поддержки</p>
      </div>
    </>
    )
}