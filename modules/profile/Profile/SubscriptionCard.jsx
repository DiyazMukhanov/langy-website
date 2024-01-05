import { Button } from '@/ui-kit/Button'
import styles from './SubscriptionCard.module.scss'
import { useRouter } from 'next/router'

export default function SubscriptionCard({ userData }) {
  const router = useRouter()
  const dateObject = new Date(userData?.subscriptionExpirationDate)

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const formattedDate = dateObject.toLocaleDateString('ru-RU', options)

  const continueHandler = () => {
    router.push('/menu')
  };

  return (
    <div className={styles.cardContainer}>
      <h2>Мои подписки</h2>
      {userData?.isSubscribed ?
        (<p>Ваша подписка действительна до {formattedDate}</p>) :
        (<p>У вас нет активных подписок</p>)}
      {!userData?.isSubscribed && (<Button variant='standardNextContained' className={styles.subscribeButton} onClick={() => router.push('/subscription')}>Приобрести</Button>)}
      {userData?.isSubscribed && (<Button variant='standardNextContained' onClick={continueHandler} className={styles.subscribeButton}>Продолжить обучение</Button>)}
    </div>
  )
}