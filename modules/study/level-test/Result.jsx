import Header from '@/modules/shared/Header'
import styles from './Result.module.scss'
import ResultImage from '../../../public/images/Result.svg'
import Image from 'next/image'
import { Button } from '@/ui-kit/Button'
import { useRouter } from 'next/router'

export default function Result({ level }) {
   const router = useRouter()

   let levelType;

   if (level[3] >= 80) {
      levelType = 'Advanced'
   } else if (level[2] >= 80) {
      levelType = 'Intermediate'
   } else if (level[1] >= 80) {
      levelType = 'Pre-intermediate'
   } else if (level[0] >= 80) {
      levelType = 'Elementary'
   } else {
      levelType = 'Beginner'
   }

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
                  <Button
                     variant='standardNextContained'
                     onClick={() => router.push('/menu')}
                  >
                     На главную
                  </Button>
               </div>
            </div>
         </div>
      )
}