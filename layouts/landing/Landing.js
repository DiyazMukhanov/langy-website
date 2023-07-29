import styles from './Landing.module.scss'
import Image from 'next/image'
import Logo from '../../public/images/Logo.svg'
import LogoTwo from '../../public/images/Logo-2.svg'
import Cards from '../../public/images/Cards.svg'
import Laptop from '../../public/images/Laptop.svg'
import DropOne from '../../public/images/drop-1.svg'
import DropTwo from '../../public/images/drop-2.svg'
import Man from '../../public/images/Man.svg'
import { Typography } from '@/components/Typography'
import { Button } from '@/components/Button'
import Advantage from './Advantage'
import Container from '@/components/Container'
import AdvantageCard from './AdvantageCard'
import HowCard from './HowCard'

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
      <section className={styles.advantagesSection}>
        <div className={styles.advantagesHeadingContainer}>
          <Typography size='small' element='h2'>Наши преимущества</Typography>
        </div>
        <div className={styles.advantagesMain}>
          <div className={styles.advantageCards}>
            <AdvantageCard 
             iconType='tick' 
             textLineOne='Погрузитесь'
             textLineTwo='в интерактивность'
             textLineThree='обучения!'
             />

            <AdvantageCard 
             iconType='tick' 
             textLineOne='Вы освоите'
             textLineTwo='4 основных'
             textLineThree='языковых навыка!'
             />
               
            <AdvantageCard 
             iconType='tick' 
             textLineOne='Занимайтесь в'
             textLineTwo='удобное для вас'
             textLineThree='время!'
             />
          </div>
          <Button variant='contained' className={styles.tryButton}>Попробуйте сейчас</Button>
        </div>
      </section>

      <section className={styles.howWorks}>
        <div className={styles.howHeading}>
        <Typography size='small' element='h2'>Как работает платформа</Typography>
        </div>

        <div className={styles.manSection}>
          <HowCard 
          number='1' 
          text='Для того, чтобы взять бесплатный пробный урок вам не понадобиться ничего, кроме собственного желания. 
          Вам нужно пройти регистрацию и по желанию пройти тест для определения уровня знания языка.'
          color='blue'
          />
          <Image
           priority
           src={Man}
           className={styles.man}
           />
        </div>
        <div className={styles.twoThreeSection}>

        <div className={styles.howcardTwo}>
        <HowCard 
          number='2' 
          text='Доступ открыт!
          Наслаждайтесь обучением!'
          color='purple'
          />
        </div>
          
           <HowCard 
          number='3' 
          text='После успешного пробного урока и определения  своего уровня знания языка. Вам нужно выбрать произвести оплату для дальнейшего обучения'
          color='orange'
          />
          
        </div>
      </section>
      
      </Container>
    )
  }
  