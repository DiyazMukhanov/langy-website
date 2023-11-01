import { Typography } from '@/ui-kit/Typography'
import styles from './Level.module.scss'
import Header from '@/modules/shared/Header'
import { Button } from '@/ui-kit/Button'
import Loader from '@/modules/shared/Loader'
import { useRouter } from 'next/router'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '@/store/userContext'
import ProtectPage from '@/modules/shared/ProtectPage'

export default function Level() {

  const router = useRouter()
  const userCtx = useContext(UserContext)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    if (userCtx?.userData?.levelChecked === true) {

      if (userCtx?.userData?.currentLesson !== 0 && userCtx?.userData?.currentChapter !== 'no') {
        router.push(`/lessons/lesson${userCtx?.userData?.currentLesson}/${userCtx?.userData?.currentChapter}`)
        setIsLoading(false)
      } else {
        if (userCtx?.userData?.level === 'preIntermediate') {
          router.push('/lessons/lesson9/video')

          setIsLoading(false)
        }

        if (userCtx?.userData?.level === 'intermediate') {
          router.push('/lessons/lesson17/video')

          setIsLoading(false)
        }

        if (userCtx?.userData?.level === 'elementary') {
          router.push('/lessons/lesson1/video')

          setIsLoading(false)
        }
      }
    } else {
      setIsLoading(false)
    }
  }, [userCtx.userData])


  return (
    <ProtectPage>
      <Header variant='blue'></Header>
      <div className={styles.container}>
        <Typography size='small' element='h3' className={styles.text}>Пройдите короткий тест.</Typography>
        <Typography size='small' element='h3' className={styles.text}>Мы определим ваш уровень.</Typography>
        <Button variant='authLargeContained' className={styles.levelBtn} onClick={() => router.push('/test/test')}>Определить мой уровень</Button>
        <Button variant='standardLargeOutlined' className={styles.levelBtnTwo} onClick={() => router.push('/test/choice')}>Я выберу программу самостоятельно</Button>
      </div>
    </ProtectPage>
  )
}


