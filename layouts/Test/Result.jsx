import Header from '@/components/Header'
import styles from './Result.module.scss'
import ResultImage from '../../public/images/Result.svg'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { assignLevel, setLevelChecked } from '@/api/user'
import Loader from '@/components/Loader'

export default function Result({level}) {
   const router = useRouter()
   const [isLoading, setIsLoading] = useState(true)

   let levelType;
   if(level >= 3) {
    levelType = 'Pre-intermediate'
   } else {
    levelType = 'Elementary'
   }

   useEffect(() => {
      let levelForBody
      if(levelType === 'Pre-intermediate') {
         levelForBody = 'preIntermediate'
      }

      if(levelType === 'Intermediate') {
         levelForBody = 'intermediate'
      }

      const setLevelCheckedHandler = async () => {
         try{
            const result = await assignLevel(levelForBody)
            if(result) {
               setIsLoading(false)
            }
         } catch(error) {
            alert('Что-то пошло не так')
            console.log(error)
            setIsLoading(false)
         } 
      }

      const setLevelCheckedElementary = async () => {
         try{
            const result = await setLevelChecked()
            if(result) {
               setIsLoading(false)
            }
         } catch (err) {
            alert('Что-то пошло не так')
            console.log(error)
            setIsLoading(false)
         }
      }

      if(levelType !== 'Elementary') {
         setLevelCheckedHandler()
      } else {
         console.log('Elementary method!')
         setLevelCheckedElementary()
      }

   }, [])

   const nextHandler = () => {
    if(levelType == 'Elementary') {
      router.push('/lessons/elementary/lesson1/video')
    } 

    if(levelType == 'Pre-intermediate') {
        router.push('/lessons/pre-intermediate/lesson1/video')
      }

   }

   if(isLoading) {
      return <Loader />
   } else {
      return (
         <div>
            <Header variant='blue'/>
            <div className={styles.resultsContainer}>
             <div className={styles.imageBlock}>
                 <Image
                     priority
                     src={ResultImage}
                     />
                  <p>Поздравляем!</p>
                  <p>Ваш уровень <span className={styles.level}>{levelType}!</span></p>
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