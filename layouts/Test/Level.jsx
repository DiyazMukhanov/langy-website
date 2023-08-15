import { Typography } from '@/components/Typography'
import styles from './Level.module.scss'
import Header from '@/components/Header'
import { Button } from '@/components/Button'
import Loader from '@/components/Loader'
import { useRouter } from 'next/router'

export default function Level() {
  
  const router = useRouter()
  
      return (
        <>
          <Header variant='blue'></Header>
          <div className={styles.container}>
          <Typography size='small' element='h3' className={styles.text}>Пройдите короткий тест.</Typography>
          <Typography size='small' element='h3' className={styles.text}>Мы определим ваш уровень.</Typography>
          <Button variant='authLargeContained' className={styles.levelBtn} onClick={() => router.push('/test/test')}>Определить мой уровень</Button>
          <Button variant='standardLargeOutlined' className={styles.levelBtnTwo} onClick={() => router.push('/test/choice')}>Я выберу программу самостоятельно</Button>
          </div>
        </>
        )
    }
  

