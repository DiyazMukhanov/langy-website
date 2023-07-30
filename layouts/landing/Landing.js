import styles from './Landing.module.scss'
import Image from 'next/image'
import Logo from '../../public/images/Logo.svg'
import LogoTwo from '../../public/images/Logo-2.svg'
import Cards from '../../public/images/Cards.svg'
import Laptop from '../../public/images/Laptop.svg'
import DropOne from '../../public/images/drop-1.svg'
import DropTwo from '../../public/images/drop-2.svg'
import Man from '../../public/images/Man.svg'
import Plus from '../../public/images/Plus.svg'
import X from '../../public/images/X.svg'
import Service from '../../public/images/Service.svg'
import Up from '../../public/images/Up.svg'
import { Typography } from '@/components/Typography'
import { Button } from '@/components/Button'
import Advantage from './Advantage'
import Container from '@/components/Container'
import AdvantageCard from './AdvantageCard'
import HowCard from './HowCard'
import { useState } from 'react'

export default function Landing() {
  const [frequentOpenedId, setFrequentOpenedId] = useState(null)
  const frequentQuestions = [
    {
      id: 1,
      question: 'Как проходят занятия?',
      answer: 'Все очень легко! Шаг за шагом вы переходите от урока к уроку выполняя упражнения по грамматике, чтению, письму, чтению и переходите к тесту.'
    },
    {
      id: 2,
      question: 'Есть ли у вас рассрочка?',
      answer: 'Рассрочки нет. Но стоимость подписки доступна широкой массе студентов'
    },
    {
      id: 3,
      question: 'Как с вами связаться?',
      answer: 'Перейдите по ссылке "Служба поддержки" внизу или в личном кабинете. Оставьте заявку, администратор обязательно ответит вам'
    }
  ]

  const questionHandler = (id) => {
    if(frequentOpenedId === id) {
      setFrequentOpenedId(null)
    } else {
      setFrequentOpenedId(id)
    }
  }
  
    return (
      <Container>
      
      <header className={styles.header} id='top'>
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
          number='3' 
          text='Доступ открыт!
          Наслаждайтесь обучением!'
          color='purple'
          type='small'
          />
        </div>
          
           <HowCard 
          number='2' 
          text='После успешного пробного урока и определения  своего уровня знания языка. Вам нужно выбрать произвести оплату для дальнейшего обучения'
          color='orange'
          />
          
        </div>
      </section>

      <section className={styles.frequentQuestionsSection}>
        <div className={styles.questionsHeading}>
          <Typography size='small' element='h2'>Часто задаваемые вопросы </Typography>
        </div>
        <div className={styles.questionsContainer}>
          {frequentQuestions.map(item => (
            <div className={styles.questionBlock}>
              <div className={styles.questionWithPlus}>
              <p className={styles.question}>{item.question}</p>
              
              <Image
                priority
                src={frequentOpenedId === item.id ? X: Plus}
                className={styles.questionButton}
                onClick={() => questionHandler(item.id)}
              />
              </div>
              {frequentOpenedId === item.id && (
                <p className={styles.answer}>{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
        <Image
           priority
           src={Logo}
           height={44}
           width={101}
           />
           <div className={styles.service}>
           <Image
           priority
           src={Service}
           />
           <p>Служба поддержки</p>
           </div>
           <Button variant='contained' className={styles.tryButton}>Действуй!</Button>
           <a href='#top'>
           <Image
           priority
           src={Up}
           className={styles.up}
           />
           </a>
        </div>
      </footer>
     
      </Container>
    )
  }
  