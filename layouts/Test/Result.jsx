import Header from '@/components/Header'
import styles from './Result.module.scss'
import ResultImage from '../../public/images/Result.svg'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'

export default function Result({level}) {
    const router = useRouter()
   let levelType;
   if(level >= 3) {
    levelType = 'Pre-intermediate'
   } else {
    levelType = 'Elementary'
   }

   const nextHandler = () => {
    if(levelType == 'Elementary') {
      router.push('/lessons/elementary/lesson1/video')
    } 

    if(levelType == 'Pre-intermediate') {
        router.push('/lessons/pre-intermediate/lesson1/video')
      }

   }

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