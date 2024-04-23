import ProtectPage from '@/modules/shared/ProtectPage'
import styles from './Main.module.scss'
import { useRouter } from 'next/router'
import { AdminLayout } from '../AdminLayout'

export default function Main() {
  const router = useRouter()

  return (
    <AdminLayout>
      <div className={styles.container}>
        <p className={styles.link} onClick={() => router.push('/admin/students')}>Студенты</p>
        <p className={styles.link} onClick={() => router.push('/admin/statistics')}>Статистика</p>
        <p className={styles.link} onClick={() => router.push('/admin/services')}>Служба поддержки</p>
      </div>
    </AdminLayout>
  )
}