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
import { Typography } from '@/components/Typography'
import { Button } from '@/components/Button'
import Advantage from './Advantage'
import AdvantageCard from './AdvantageCard'
import HowCard from './HowCard'
import { useState, useContext, useEffect } from 'react'
import Modal from './Modal'
import classNames from 'classnames'
import {useRouter} from "next/router"
import ProtectPage from '@/components/ProtectPage'
import { getMe, logoutUser } from '@/api/user'
import { setCurrentLessonData } from '@/api/user'
import { UserContext } from '@/store/userContext'
import Loader from '@/components/Loader'

export default function Landing() {
  const [frequentOpenedId, setFrequentOpenedId] = useState(null)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const router = useRouter()
  const userCtx = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const allCookies = document.cookie;
    console.log(allCookies);
    const getUser = async () => {
      try{
        const userData = await getMe()
        console.log(userData)
        userCtx.setUserData(userData.data.data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
      }
    }
    getUser()

  }, [])

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
      if(userCtx?.userData?.currentLesson !== 0 && userCtx?.userData?.currentChapter !== 'no') {
        router.push(`/lessons/lesson${userCtx?.userData?.currentLesson}/${userCtx?.userData?.currentChapter}`)
      } else {
        router.push('/test/level')
      }
    }
  };

  const logOutHandler = async() => {
    try{
      const response = await logoutUser()
      if(response) {
        router.reload()
      }
      console.log(response)
    } catch(err) {
       console.log(err)
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
              <p className={styles.profileLink} onClick={() => router.push('/profile')}>Личный кабинет</p>
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
            <Image
             priority
             src={DropOne}
             className={styles.dropOneMobile}
             />
           <Typography element='h1' className={styles.mainHeading}>Онлайн - платформа для изучения английского языка</Typography>
           <div className={styles.headerBottomBlock}>
           <Image
             priority
             src={DropOne}
             className={styles.dropOne}
             />
             {!userCtx.userData ? (<div className={styles.btnBlock}>
           <Button variant='contained' className={styles.startBtn} onClick={continueHandler}>Начать обучение</Button>
           <p className={styles.haveAccountBtn}>У меня уже есть аккаунт</p>
           </div>) : <div className={styles.btnBlock}>
           <Button variant='contained' className={styles.startBtn} onClick={continueHandler}>Продолжить обучение</Button>
           {!userCtx.userData && (<p className={styles.haveAccountBtn}>У меня уже есть аккаунт</p>)}
           
           </div>}
           
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
            {!userCtx.userData ? 
            (<Button variant='contained' className={styles.tryButton} onClick={continueHandler}>Попробуйте сейчас</Button>): 
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
        </footer>
       
        </div>
        
      )
    }
    
    
  }
  