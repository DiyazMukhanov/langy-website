import Header from '@/modules/shared/Header'
import styles from './LevelChoice.module.scss'
import { Typography } from '@/ui-kit/Typography'
import { useRouter } from 'next/router'
import { assignLevel } from './shared/api/assignLevel'
import { createBeginnerProgress } from './shared/api/createBeginnerProgress'
import { useState } from 'react'
import Loader from '@/modules/shared/Loader'
import ProtectPage from '@/modules/shared/ProtectPage'

const LevelBlock = ({ children, onClick }) => {
  return (
    <div className={styles.level} onClick={onClick}>
      {children}
    </div>
  )
}

export default function LevelChoice() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const goToHigherLevelHandler = async (level) => {
    setIsLoading(true)

    try {
      if (level === 'beginner') {
        setIsLoading(true)
        try {
          await createBeginnerProgress()
          router.push('/lessons/beginner/lesson1')
        } catch (err) {
          console.log(err)
          alert('Произошла ошибка. Повторите попытку')
        }
      } else {

        const data = await assignLevel(level)

        if (level === 'elementary') {

          router.push('/lessons/lesson1/video')
          // setIsLoading(false)
        }

        if (level === 'preIntermediate') {
          router.push('/lessons/lesson9/video')
          // setIsLoading(false)
        }

        if (level === 'intermediate') {
          router.push('/lessons/lesson17/video')
          // setIsLoading(false)
        }

      }

    } catch (err) {

      alert('Произошла ошибка')
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <Loader />
  } else {
    return (
      <ProtectPage levelChecked={true}>
        <Header variant='blue' />
        <div className={styles.container}>
          <Typography size='small' element='h3'>Выберите уровень</Typography>
          <div className={styles.levels}>
            <LevelBlock onClick={() => goToHigherLevelHandler('beginner')}>Beginner</LevelBlock>
            <LevelBlock onClick={() => goToHigherLevelHandler('elementary')}>Elementary</LevelBlock>
            <LevelBlock onClick={() => goToHigherLevelHandler('preIntermediate')}>Pre-Intermediate</LevelBlock>
            <LevelBlock onClick={() => goToHigherLevelHandler('intermediate')}>Intermediate</LevelBlock>
          </div>
        </div>
      </ProtectPage>
    )
  }

}
