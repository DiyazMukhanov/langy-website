import Header from '@/modules/shared/Header'
import styles from './Menu.module.scss'
import { Typography } from '@/ui-kit/Typography'
import { useRouter } from 'next/router'
import { getMe } from '@/modules/shared/api/getMe'
import { getBeginnerProgress } from '@/modules/shared/api/getBeginnerProgress'
import { useEffect, useState } from 'react'
import Loader from '@/modules/shared/Loader'

const LevelBlock = ({ children, onClick }) => {
  return (
    <div className={styles.level} onClick={onClick}>
      {children}
    </div>
  )
}

export default function Menu() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [beginnerProgress, setBeginnerProgress] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchUser = async () => {
      const userData = await getMe()
      setUser(userData.data.data)
      const beginnerProgress = await getBeginnerProgress()
      setBeginnerProgress(beginnerProgress.data.data)
      setIsLoading(false)
    }

    fetchUser()
  }, [])

  const routingObject = {
    starter: beginnerProgress === null ? `/lessons/beginner/lesson1` : `/lessons/beginner/lesson${beginnerProgress?.currentLesson}`,
    higher: user?.currentLesson === 0 ? `/lessons/1/video` : `/lessons/${user?.currentLesson}/${user?.currentChapter}`
  }

  const goToLearningFieldHandler = (learningField) => {
    router.push(routingObject[learningField])
  }

  if (isLoading) {
    return <Loader />
  } else {
    return (
      <>
        <Header variant='blue' />
        <div className={styles.container}>
          <Typography size='small' element='h3'>Выберите раздел</Typography>
          <div className={styles.levels}>
            <LevelBlock onClick={() => goToLearningFieldHandler('starter')}>Для начинающих</LevelBlock>
            <LevelBlock onClick={() => goToLearningFieldHandler('higher')}>Для продолжающих</LevelBlock>
          </div>
        </div>
      </>
    )
  }

}
