import styles from './Landing.module.scss'
import Image from 'next/image'
import Logo from '../../public/images/Logo.svg'
import { Typography } from '@/components/Typography'
import { Button } from '@/components/Button'

export default function Landing() {
    return (
      <>
      
      <header className={styles.header}>
        <div className={styles.logo}>
           <Image
           priority
           src={Logo}
           height={44}
           width={101}
           />
        </div>
        <div className={styles.topButtons}>
         <Typography element='p' className={styles.enterBtn}>Войти</Typography>
         <Button variant='outlined' className={styles.registrationBtn}>Регистрация</Button>
        </div>
      </header>
      
      <main className={styles.main}>
         <Typography element='h1' className={styles.mainHeading}>Онлайн - платформа для изучения английского языка</Typography>
         <Button variant='contained' className={styles.startBtn}>Начать обучение</Button>
         <p className={styles.haveAccountBtn}>У меня уже есть аккаунт</p>
      </main>
      </>
    )
  }
  