import styles from './Landing.module.scss'
import Image from 'next/image'
import Logo from '../../public/images/Logo.svg'
import LogoTwo from '../../public/images/Logo-2.svg'
import Cards from '../../public/images/Cards.svg'
import Laptop from '../../public/images/Laptop.svg'
import DropOne from '../../public/images/drop-1.svg'
import DropTwo from '../../public/images/drop-2.svg'
import { Typography } from '@/components/Typography'
import { Button } from '@/components/Button'
import Advantage from './Advantage'
import Container from '@/components/Container'

export default function Landing() {
    return (
      <Container>
      
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
         <div className={styles.headerBottomBlock}>
         <Image
           priority
           src={DropOne}
           className={styles.dropOne}
           />
         <div className={styles.btnBlock}>
         <Button variant='contained' className={styles.startBtn}>Начать обучение</Button>
         <p className={styles.haveAccountBtn}>У меня уже есть аккаунт</p>
         </div>
         <Image
           priority
           src={DropTwo}
           className={styles.dropTwo}
           />
         </div>
      </main>

      <div className={styles.advantages}>
          <Advantage text='Все на одной платформе'/>
          <Advantage text='Для тех, кто никогда не учил английский'/>
          <Advantage text='Бесплатный пробный урок'/>
          <Advantage text='Для любого возраста'/>
      </div>

      <section className={styles.middleSection}>
      <div className={styles.leftSideOfMiddleSection}>
      <Image
           priority
           src={LogoTwo}
           width={200}
           className={styles.logoTwo}
           />
       <div className={styles.leftSideText}>
       - платформа, предоставляющая изучение английского языка через интернет. Платформа открыта 
        24 часа в сутки, 12 месяцев в году. 
        И вы можете учиться в любом удобном для вас месте.
        </div>    
      </div>
      <div className={styles.imageContainer}>
      <Image
           priority
           src={Laptop}
           width={300}
           className={styles.laptop}
           />
      <Image
           priority
           src={Cards}
           width={500}
           className={styles.cards}
           />
      </div>
      </section>
      
      </Container>
    )
  }
  