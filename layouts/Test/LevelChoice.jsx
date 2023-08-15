import Header from '@/components/Header'
import styles from './LevelChoice.module.scss'
import { Typography } from '@/components/Typography'
import { useRouter } from 'next/router'
import { assignLevel } from '@/api/user'
import { useEffect, useContext, useState } from 'react'
import { UserContext } from '@/store/userContext'
import Loader from '@/components/Loader'
import ProtectPage from '@/components/ProtectPage'

const LevelBlock = ({ children, onClick }) => {
  return (
    <div className={styles.level} onClick={onClick}>
      {children}
    </div>
  )
}

export default function LevelChoice() {
    const router = useRouter()
    const userCtx = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    console.log(userCtx.userData)
    useEffect(() => {
      
      if(userCtx?.userData?.levelChecked === true) {
       if(userCtx?.userData?.currentLesson !== 0 && userCtx?.userData?.currentChapter !== 'no') {
           router.push(`/lessons/lesson${userCtx?.userData?.currentLesson}/${userCtx?.userData?.currentChapter}`)
           setIsLoading(false)
         } else {
           router.push('/lessons/elementary/lesson1/video')
           setIsLoading(false)
         }
      } else {
       setIsLoading(false)
      }
   }, [userCtx.userData])

    const goToHigherLevelHandler = async (level) => {
      setIsLoading(true)
      try {
        const data = await assignLevel(level)

        if(data) {
          if(level === 'preIntermediate') {
            router.push('/lessons/lesson9/video')
            setIsLoading(false)
          }

          if(level === 'intermediate') {
            router.push('/lessons/lesson17/video')
            setIsLoading(false)
          }
        }
      } catch (err) {
        console.log(err)
        alert('Произошла ошибка')
        setIsLoading(false)
      }  
    }

    if(isLoading) {
      return <Loader />
    } else {
      return (
        <ProtectPage>
        <Header variant='blue'/>
        <div className={styles.container}>
            <Typography size='small' element='h3'>Выберите уровень</Typography>
            <div className={styles.levels}>
               <LevelBlock onClick={() => router.push('/lessons/lesson1/video')}>Elementary</LevelBlock>
               <LevelBlock onClick={() => goToHigherLevelHandler('preIntermediate')}>Pre-Intermediate</LevelBlock>
               <LevelBlock onClick={() => goToHigherLevelHandler('intermediate')}>Intermediate</LevelBlock>
            </div>
        </div>
        </ProtectPage>
    )
    }
    
}