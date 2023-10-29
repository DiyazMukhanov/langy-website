import Header from '@/components/Header'
import styles from './Result.module.scss'
import ResultImage from '../../public/images/Result.svg'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { assignLevel, createBeginnerProgress, setLevelChecked } from '@/api/user'
import Loader from '@/components/Loader'

export default function Result({ level }) {
   const router = useRouter()
   const [isLoading, setIsLoading] = useState(true)

   let levelType;
   if (level < 7) {
      levelType = 'Beginner'
   }

   if (level > 6 && level < 14) {
      levelType = 'Elementary'
   }

   if (level > 13 && level < 17) {
      levelType = 'Pre-intermediate'
   }

   if (level > 16 && level < 21) {
      levelType = 'Intermediate'
   }

   useEffect(() => {
      let levelForBody
      if (levelType === 'Pre-intermediate') {
         levelForBody = 'preIntermediate'
      }

      if (levelType === 'Intermediate') {
         levelForBody = 'intermediate'
      }

      if (levelType === 'Elementary') {
         levelForBody = 'elementary'
      }

      const setLevelCheckedHandler = async () => {
         try {
            const result = await assignLevel(levelForBody)
            if (result) {
               setIsLoading(false)
            }
         } catch (error) {
            alert('Что-то пошло не так')
            setIsLoading(false)
         }
      }

      const enterBeginnerHandler = async () => {
         try {
            const response = await createBeginnerProgress()
            setIsLoading(false)
         } catch (err) {
            console.log(err)
            setIsLoading(false)
         }
      }

      if (levelType !== 'Beginner') {
         setLevelCheckedHandler()
      } else {
         enterBeginnerHandler()
      }


   }, [])

   const nextHandler = () => {
      if (levelType == 'Beginner') {
         router.push('/lessons/beginner/lesson1')
      }

      if (levelType == 'Elementary') {
         router.push('/lessons/lesson1/video')
      }

      if (levelType == 'Pre-intermediate') {
         router.push('/lessons/lesson9/video')
      }

      if (levelType == 'Intermediate') {
         router.push('/lessons/lesson17/video')
      }

   }

   if (isLoading) {
      return <Loader />
   } else {
      return (
         <div>
            <Header variant='blue' />
            <div className={styles.resultsContainer}>
               <div className={styles.imageBlock}>
                  <Image
                     priority
                     src={ResultImage}
                  />
                  <p>Поздравляем!</p>
                  <p>Ваш уровень <span className={styles.level}>{levelType}!</span></p>
                  <p>Вы ответили правильно на {level}/20 вопросов!</p>
                  <Button
                     variant='standardNextContained'
                     onClick={nextHandler}
                  >
                     Начать обучение
                  </Button>
               </div>
            </div>
         </div>
      )
   }

}