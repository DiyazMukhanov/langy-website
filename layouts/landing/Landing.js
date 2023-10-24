import styles from './Landing.module.scss'
import Image from 'next/image'
import Logo from '../../public/images/Logo.svg'
import LogoTwo from '../../public/images/Logo-2.svg'
import Cards from '../../public/images/Cards.svg'
import CardsVertical from '../../public/images/Cards-vertical.svg'
import Laptop from '../../public/images/Laptop.svg'
import DropOne from '../../public/images/drop-1.svg'
import DropTwo from '../../public/images/drop-2.svg'
import Man from '../../public/images/Man.svg'
import Plus from '../../public/images/Plus.svg'
import X from '../../public/images/X.svg'
import Service from '../../public/images/Service.svg'
import ServiceBlue from '../../public/images/Service-blue.svg'
import Up from '../../public/images/Up.svg'
import Sandwich from '../../public/images/Sandwich.svg'
import ButtonClose from '../../public/images/Button-close.svg'
import LogoBlue from '../../public/images/Logo-blue.svg'
import LogoBlueBottom from '../../public/images/Logo-blue-bottom.svg'
import Visa from '../../public/images/visa.png'
import { Typography } from '@/components/Typography'
import { Button } from '@/components/Button'
import Advantage from './Advantage'
import AdvantageCard from './AdvantageCard'
import HowCard from './HowCard'
import { useState, useContext, useEffect } from 'react'
import Modal from './Modal'
import classNames from 'classnames'
import {useRouter} from "next/router"
import { getBeginnerProgress, getMe, userLogout } from '@/api/user'
import { UserContext } from '@/store/userContext'
import Loader from '@/components/Loader'

export default function Landing() {
  const [frequentOpenedId, setFrequentOpenedId] = useState(null)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const router = useRouter()
  const userCtx = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)
  const [currentBeginnerLesson, setCurrentBeginnerLesson] = useState(undefined)
  
  useEffect(() => {
    
    const getUser = async () => {
      try{
        const userData = await getMe()
        console.log(userData.data.data)
        userCtx.setUserData(userData.data.data)
        setIsLoading(false)
      } catch (err) {
        
        setIsLoading(false)
      }
    }

    const getBeginnerProgressHandler = async () => {
      try{
        const beginnerProgress = await getBeginnerProgress()
        if(beginnerProgress.data.data !== null) {
          setCurrentBeginnerLesson(beginnerProgress.data.data.currentLesson)
        }
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
      }
    }

    getUser()
    getBeginnerProgressHandler()

  }, [])

  const frequentQuestions = [
    {
      id: 1,
      question: 'Чему я научусь обучаясь с Langy?',
      answer: 'C нами вы овладеете необходимой языковой базой, научитесь письменным навыкам и обогатите словарный запас.'
    },
    {
      id: 2,
      question: 'Какой график учебы?',
      answer: 'Вы сами решаете когда, где и сколько времени уделять изучению английского языка. Вы можете подстроить обучение под свой ритм жизни и предпочтения.'
    },
    {
      id: 3,
      question: 'Я смогу понимать английскую речь на слух?',
      answer: 'Платформа предоставляет аудио материалы разного уровня сложности, что поможет улучшить ваши навыки понимания на слух.'
    }
  ]

  const questionHandler = (id) => {
    if(frequentOpenedId === id) {
      setFrequentOpenedId(null)
    } else {
      setFrequentOpenedId(id)
    }
  }

  const modalCloseHandler = () => {
    setIsModalOpened(false)
  }

  const modalOpenHandler = () => {
    setIsModalOpened(true)
  }

  const loginHandler = () => {
    router.push('authorization/login')
  };

  const registrationHandler = () => {
    router.push('authorization/registration')
  };

  const continueHandler = () => {
    if(!userCtx.userData) {
      router.push('authorization/registration')
    } else {
      //Check if currentLearningField is beginner
      if(userCtx?.userData?.currentLearningField === 'starter') {
        router.push(`/lessons/beginner/lesson${currentBeginnerLesson}`)
      }

      //Check if currentLearningField is higher
      if(userCtx?.userData?.currentLearningField === 'higher') {
        router.push(`/lessons/lesson${userCtx?.userData?.currentLesson}/${userCtx?.userData?.currentChapter}`)
      }

      //Check if user reloaded his progress
      if(!userCtx?.userData?.currentLearningField) {
        router.push('/menu')
      }
    }
  };

  const logOutHandler = async () => {
    try{
      const response = await userLogout()
      router.reload()
     
    } catch (err) {
     
      alert('Произошла ошибка выхода')
    }
  }
  
    if(isLoading) {
      return <Loader />
    } else {
      return (
      
        <div className={styles.overlay}>
          <Modal isOpen={isModalOpened} onClose={modalCloseHandler}>
            <div className={styles.modalContainer}>
            <div className={styles.modalLogos}>
          <Image
             priority
             src={LogoBlue}
             height={38}
             width={80}
             />
             <Image
             priority
             src={LogoBlueBottom}
             />
            </div>
            <Image
             priority
             src={ButtonClose}
             onClick={modalCloseHandler}
             />
             </div>
             <div className={styles.serviceModal} onClick={() => router.push('/service')}>
             <Image
             priority
             src={ServiceBlue}
             />
             <p>Служба поддержки</p>
             </div>
             {userCtx.userData && (
              <div className={styles.loggedInNavContainer}>
                  <p className={styles.profileLink} onClick={() => router.push('/profile')}>Личный кабинет</p>
                  <p className={styles.profileLink} onClick={() => router.push('/menu')}>Меню</p>
              </div>
             )}
             
             
             {!userCtx.userData ? 
             (<div className={styles.modalButtons}>
              <Button variant='standardLargeContained' onClick={continueHandler}>Регистрация</Button>
              <Button variant='standardLargeOutlined' onClick={loginHandler}>Войти</Button>
             </div>): (
              <div className={styles.modalButtons}>
              <Button variant='standardLargeContained' onClick={continueHandler}>Продолжить</Button>
              <Button variant='standardLargeOutlined' onClick={logOutHandler}>Выйти</Button>
             </div>
             )
            }
             
          </Modal>
        
        <header className={styles.header} id='top'>
          <div>
             <Image
             priority
             src={Logo}
             height={44}
             width={101}
             className={styles.logo}
             />
          </div>
  
          {!userCtx.userData ? (<div className={styles.topButtons}>
           <Typography element='p' className={styles.enterBtn} onClick={loginHandler}>Войти</Typography>
           <Button variant='outlined' className={styles.registrationBtn} onClick={registrationHandler}>Регистрация</Button>
          </div>) : (
            <div className={styles.topButtons}>
            <Typography element='p' className={styles.enterBtn} onClick={() => router.push('/profile')}>{userCtx?.userData?.email}</Typography>
            <Button variant='outlined' className={styles.registrationBtn} onClick={logOutHandler}>Выйти</Button>
           </div>
          )}
          
          <Image
             priority
             src={Sandwich}
             className={styles.sandwich}
             onClick={modalOpenHandler}
             />
          
        </header>
        
        <main className={styles.main}>
            {/* <Image
             priority
             src={DropOne}
             className={styles.dropOneMobile}
             /> */}
           <Typography element='h1' className={styles.mainHeading}>Aнглийский язык по современной методике</Typography>
           <div className={styles.headerBottomBlock}>
           {/* <Image
             priority
             src={DropOne}
             className={styles.dropOne}
             /> */}
             {!userCtx.userData ? (<div className={styles.btnBlock}>
           <Button variant='contained' className={styles.startBtn} onClick={continueHandler}>Начать обучение</Button>
           {/* <p className={styles.haveAccountBtn} onClick={() => router.push('/authorization/login')}>У меня уже есть аккаунт</p> */}
           </div>) : <div className={styles.btnBlock}>
           <Button variant='contained' className={styles.startBtn} onClick={continueHandler}>Продолжить обучение</Button>
           {!userCtx.userData && (<p className={styles.haveAccountBtn} onClick={() => router.push('/authorization/login')}>У меня уже есть аккаунт</p>)}
           
           </div>}
           
           {/* <Image
             priority
             src={DropTwo}
             className={styles.dropTwo}
             /> */}
           </div>
        </main>
  
        <div className={styles.advantages}>
        <div data-aos='fade-up'><Advantage text='НАУЧИТЕСЬ ПОНИМАТЬ РАЗГОВОРНУЮ РЕЧЬ' color='#7F5DC1'/></div>
            <div data-aos='fade-up'><Advantage text='ПРИОБРЕТЕТЕ НАВЫКИ ОБЩЕНИЯ' color='#FF69B4'/></div>
            <div data-aos='fade-up'><Advantage text='БЫСТРО ПОПОЛНИТЕ СВОЙ СЛОВАРНЫЙ ЗАПАС' color='#1676D8'/></div>
            <div data-aos='fade-up'><Advantage text='ПРИОБРЕТЕТЕ НАВЫКИ ПИСЬМА' color='#E28731'/></div>
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
         - онлайн-платформа, предоставляющая изучение английского языка. Платформа открыта 
          24 часа в сутки, 12 месяцев в году. 
          И вы можете учиться в любом удобном для вас месте.
          </div>    
        </div>
        <div className={classNames(
           {
            [styles.imageContainer]: !isModalOpened,
            [styles.noShow]: isModalOpened
           }
          )}>
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
  
         <Image
             priority
             src={CardsVertical}
            //  width={500}
             className={styles.cardsMobile}
             />
        </div>
        </section>
        <section className={styles.advantagesSection}>
          <div className={styles.advantagesHeadingContainer}>
            <Typography size='small' element='h2'>Наши преимущества</Typography>
          </div>
          <div className={styles.advantagesMain}>
            <div className={styles.advantageCards}>
            <div data-aos='fade-right'>
              <AdvantageCard 
               iconType='clock' 
               textLineOne='Свободный график'
              //  textLineTwo=''
              //  textLineThree='график!'
               />
             </div>
             <div data-aos='fade-right'>
              <AdvantageCard 
               iconType='tick' 
               textLineOne='Экономия средств'
              //  textLineTwo='4 основных'
              //  textLineThree='языковых навыка!'
               />
               </div>
              <div data-aos='fade-right'> 
              <AdvantageCard 
               iconType='pc' 
               textLineOne='Личностное развитие'
              //  textLineTwo='удобное для вас'
              //  textLineThree='время!'
               />
               </div> 
            </div>
            {!userCtx.userData ? 
            (<Button variant='contained' className={styles.tryButton} onClick={continueHandler}>Пробуй сейчас</Button>): 
            (<Button variant='contained' className={styles.tryButton} onClick={continueHandler}>Продолжить обучение</Button>)
            }
            
          </div>
        </section>
  
        <section className={styles.howWorks}>
          <div className={styles.howHeading}>
          <Typography size='small' element='h2'>Как работает платформа</Typography>
          </div>
  
          <div className={styles.manSection}>
            <HowCard 
            number='1' 
            text='Пройдите регистрацию в пару кликов и приступайте к занятиям!'
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
            text='Внимательно проходите урок за уроком, и переходите к следующему уровню'
            color='orange'
            />
          </div>
  
           <HowCard 
            number='3' 
            text='Удивите ваших друзей!
            Покажите им ваши навыки!'
            color='purple'
            type='small'
            />
            
          </div>
        </section>
  
        <section className={styles.frequentQuestionsSection}>
          <div className={styles.questionsHeading}>
            <Typography size='small' element='h2'>Часто задаваемые вопросы </Typography>
          </div>
          <div className={styles.questionsContainer}>
            {frequentQuestions.map(item => (
              <div className={styles.questionBlock} key={item.id}>
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

        <section className={styles.whyContainer}>
            <h2>5 преимуществ изучения английского языка</h2>
            <h3>Если вы еще не уверены, зачем учить английский, вот вам несколько причин:</h3>
            <p>- Изучение английского повышает уверенность. Начинаешь гордиться собой, когда получается то, над чем давно работал.</p>
            <p>- Повышение карьерных возможностей.</p>
            <p>- Улучшение коммуникативных навыков.</p>
            <p>- Доступ к мировой информации - больше 50% сайтов и топовых изданий написаны на английском. Информация на русском языке занимает только 6% всего интернета.</p>
            <p>- Изучение английского помогает почувствовать себя как дома практически в любой стране. Он сделает ваши путешествия более комфортными, вы сможете легче ориентироваться и общаться в разных уголках мира.</p>
            <p>- Изучение английского языка позволяет стать гражданином мира и найти друзей в разных странах.</p>
        </section>

        <section className={styles.whyContainer}>
            <h2>Советы по изучению английского языка</h2>
            <p>Добавьте английский в свою повседневную жизнь. Установите английский язык на свой телефон, компьютер и магнитолу в автомобиле. </p>
            <p>Через некоторое время ваше подсознание начнет свободно воспринимать английский язык на ваших гаджетах. </p>
            <p>Также старайтесь читать много коротких и легких текстов, так как это очень помогает запоминать новые слова и правила грамматики автоматически.</p>
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
                <p onClick={() => router.push('/service')}>Служба поддержки</p>
             </div>
             {!userCtx.userData ? 
             (<Button variant='contained' className={styles.tryButton} onClick={continueHandler}>Действуй!</Button>): 
             (<Button variant='contained' className={styles.tryButton} onClick={continueHandler}>Продолжить</Button>)
             }
             
             <a href='#top'>
             <Image
             priority
             src={Up}
             className={styles.up}
             />
             </a>
          </div>
          <div className={styles.footerBottom}>
            <p onClick={() => router.push('/agreement')}>Публичный договор-оферта</p>
            <p onClick={() => router.push('/confindentiality')}>Политика конфиденциальности</p>
            <p onClick={() => router.push('/procedure')}>Описание процедуры оплаты</p>
            <p>email: admin@langy.su контактный телефон: +7 707 880 51 25</p>
            <p>ИП Куанышева</p>
            <Image
             priority
             src={Visa}
             className={styles.visa}
             />
          </div>
        </footer>
        </div>        
      )
    }
    
    
  }
