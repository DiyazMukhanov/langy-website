/* eslint-disable react/react-in-jsx-scope */
import styles from './Landing.module.scss'
import Image from 'next/image'
import Logo from '../../public/images/Logo.svg'
import Listening from '../../public/images/listening-2.jpg'
import Grammar from '../../public/images/grammar-1.jpg'
import Reading from '../../public/images/reading.png'
import Writing from '../../public/images/writing.jpg'
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
import { Typography } from '@/ui-kit/Typography'
import { Button } from '@/ui-kit/Button'
import Advantage from './shared/Advantage'
import AdvantageCard from './shared/AdvantageCard'
import HowCard from './shared/HowCard'
import { useState, useContext, useEffect } from 'react'
import Modal from '../shared/Modal/Modal'
import classNames from 'classnames'
import { useRouter } from "next/router"
import { getBeginnerProgress } from '../shared/api/getBeginnerProgress'
import { getMe } from '../shared/api/getMe'
import { userLogout } from '../shared/api/userLogout'
import { UserContext } from '@/store/userContext'
import Loader from '@/modules/shared/Loader'
import ChapterCard from './shared/ChapterCard'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Landing() {
  const [frequentOpenedId, setFrequentOpenedId] = useState(null)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const router = useRouter()
  const userCtx = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)
  const [currentBeginnerLesson, setCurrentBeginnerLesson] = useState(undefined)

  useEffect(() => {

    const getUser = async () => {
      try {
        const userData = await getMe()
        console.log(userData.data.data)
        userCtx.setUserData(userData.data.data)
        setIsLoading(false)
      } catch (err) {

        setIsLoading(false)
      }
    }

    const getBeginnerProgressHandler = async () => {
      try {
        const beginnerProgress = await getBeginnerProgress()
        if (beginnerProgress.data.data !== null) {
          setCurrentBeginnerLesson(beginnerProgress.data.data.currentLesson)
        }
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
      }
    }

    // Add for everyday english: getEverydayEnglishProgress

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
    if (frequentOpenedId === id) {
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
    if (!userCtx.userData) {
      router.push('authorization/registration')
    } else {
      //Check if currentLearningField is beginner
      if (userCtx?.userData?.currentLearningField === 'starter') {
        router.push(`/lessons/beginner/lesson${currentBeginnerLesson}`)
      }

      //Check if currentLearningField is higher
      if (userCtx?.userData?.currentLearningField === 'higher') {
        router.push(`/lessons/${userCtx?.userData?.currentLesson}/${userCtx?.userData?.currentChapter}`)
      }

      //Check if user reloaded his progress
      if (!userCtx?.userData?.currentLearningField) {
        router.push('/menu')
      }
    }
  };

  const logOutHandler = async () => {
    try {
      const response = await userLogout()
      router.reload()

    } catch (err) {

      alert('Произошла ошибка выхода')
    }
  }

  if (isLoading) {
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
            </div>) : (
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

        <div className={styles.getSection}>
          <h2>УЖЕ ЧЕРЕЗ 3 МЕСЯЦА ВЫ</h2>
          <div className={styles.advantages}>
            <div data-aos='fade-up'><Advantage text='НАУЧИТЕСЬ ПОНИМАТЬ РАЗГОВОРНУЮ РЕЧЬ' color='#7F5DC1' /></div>
            <div data-aos='fade-up'><Advantage text='ПРИОБРЕТЕТЕ НАВЫКИ ОБЩЕНИЯ' color='#FF69B4' /></div>
            <div data-aos='fade-up'><Advantage text='БЫСТРО ПОПОЛНИТЕ СВОЙ СЛОВАРНЫЙ ЗАПАС' color='#1676D8' /></div>
            <div data-aos='fade-up'><Advantage text='ПРИОБРЕТЕТЕ НАВЫКИ ПИСЬМА' color='#E28731' /></div>
          </div>
        </div>

        <section className={styles.middleSection}>
          <ChapterCard chapterTitle='Аудио' imageSrc={Listening} color='green' />
          <ChapterCard chapterTitle='Грамматика' imageSrc={Grammar} color='blue' />
          <ChapterCard chapterTitle='Чтение' imageSrc={Reading} color='orange' />
          <ChapterCard chapterTitle='Письмо' imageSrc={Writing} color='purple' />
          {/* <div className={styles.leftSideOfMiddleSection}>
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
          )}> */}
          {/* <Image
             priority
             src={Laptop}
             width={300}
             className={styles.laptop}
             /> */}
          {/* <Image
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
        </div> */}
        </section>
        <section className={styles.advantagesSection}>
          <div className={styles.advantagesHeadingContainer}>
            <Typography size='small' element='h2'>НАШИ ПРЕИМУЩЕСТВА</Typography>
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
                  textLineOne='Экономия'
                //  textLineTwo='4 основных'
                //  textLineThree='языковых навыка!'
                />
              </div>
              <div data-aos='fade-right'>
                <AdvantageCard
                  iconType='pc'
                  textLineOne='Легко и весело'
                //  textLineTwo='удобное для вас'
                //  textLineThree='время!'
                />
              </div>
            </div>
            {!userCtx.userData ?
              (<Button variant='contained' className={styles.tryButton} onClick={continueHandler}>Пробуй!</Button>) :
              (<Button variant='contained' className={styles.tryButton} onClick={continueHandler}>Продолжить обучение</Button>)
            }

          </div>
        </section>

        <section className={styles.howWorks}>
          <div className={styles.howHeading}>
            <h2>ОБУЧАЯСЬ У НАС, ВЫ ПОЛУЧИТЕ</h2>
          </div>

          {/* <div className={styles.manSection}> */}
          <div className={styles.whatGetContainer}>
            <HowCard
              number='1'
              text='МЕНТАЛЬНЫЙ РОСТ'
              color='blue'
            />
            {/* <Image
                priority
                src={Man}
                className={styles.man}
                /> */}
            {/* </div> */}
            {/* <div className={styles.twoThreeSection}> */}

            {/* <div className={styles.howcardTwo}> */}
            <HowCard
              number='2'
              text='СВОБОДУ КОММУНИКАЦИИ ПО МИРУ'
              color='orange'
            />
            {/* </div> */}

            <HowCard
              number='3'
              text='САМОУТВЕРЖДЕНИЕ'
              color='purple'
            />

            <HowCard
              number='4'
              text='НЕЗАВИСИМОСТЬ'
              color='blue'
            />

            <HowCard
              number='5'
              text='УСПЕХ В БИЗНЕСЕ И ИНВЕСТИЦИЯХ'
              color='orange'
            />

            <HowCard
              number='6'
              text='САМОРАЗВИТИЕ'
              color='purple'
            />

            <HowCard
              number='7'
              text='ВОЗМОЖНОСТЬ ИММИГРАЦИИ'
              color='blue'
            />

            <HowCard
              number='8'
              text='ЦЕННОСТЬ НА РЫНКЕ ТРУДА'
              color='orange'
            />
          </div>
          {/* </div> */}
        </section>

        <section className={styles.cases}>
          <h2>Наши кейсы</h2>
          <div className={styles.caseContainer}>
            <p className={classNames(styles.caseName, styles.orangeCase)}>Данияр</p>
            <p className={styles.myCase}>"Благодаря английскому языку, я успешно прошел собеседование и устроился на работу в иностранную компанию за рубежом, где я отработал 4 года, получил международный опыт, завел много друзей. Сейчас работаю в ТШО старшим инженером электриком."</p>
          </div>

          <div className={styles.caseContainer}>
            <p className={classNames(styles.caseName, styles.blueCase)}>Аслан</p>
            <p className={styles.myCase}>"Английский мне помог изучить язык программирования и возможность работать онлайн по всему миру. На данный момент работаю в одном американском стартапе удаленно."</p>
          </div>

          <div className={styles.caseContainer}>
            <p className={classNames(styles.caseName, styles.purpleCase)}>Альбина</p>
            <p className={styles.myCase}>"Я выучила английский и теперь сама обучаю этому языку других людей, получаю от этого удовольствие и еще на этом зарабатываю. А мои студенты получают высокие баллы и учатся в зарубежных вузах."</p>
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
                    src={frequentOpenedId === item.id ? X : Plus}
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
          <h2>СОВЕТЫ ПО ИЗУЧЕНИЮ АНГЛИЙСКОГО</h2>
          <p>Добавьте английский в свою повседневную жизнь. Установите английский язык на свой телефон, компьютер и магнитолу в автомобиле. </p>
          <p>Через некоторое время ваше подсознание начнет свободно воспринимать английский язык на ваших гаджетах. </p>
          <p>Также старайтесь читать много коротких и легких текстов, так как это очень помогает запоминать новые слова и правила грамматики автоматически.</p>
        </section>

        <section className={classNames(styles.whyContainer, styles.forgetContainer)}>
          <p className={styles.forget}>Забудьте о старых учебниках и занудных уроках. Мы создали уникальную систему обучения, которая адаптируется под ваши потребности и уровень владения языком.</p>
        </section>

        <div className={styles.doBtn}>
          {!userCtx.userData ?
            (<Button variant='contained' className={styles.tryButton} onClick={continueHandler}>Действуй!</Button>) :
            (<Button variant='contained' className={styles.tryButton} onClick={continueHandler}>Продолжить</Button>)
          }
        </div>

        <div className={styles.contactsNav}>
          <a
            href='https://instagram.com/langy.su?igshid=MzRlODBiNWFlZA=='
            target="_blank"
          >
            <div className={styles.instIcon}>
              <FaInstagram />
            </div>
          </a>

          <a
            href={`https://api.whatsapp.com/send?phone=+77078805125`}
            target="_blank"
          >
            <div className={styles.whatsIcon}>
              <FaWhatsapp />
            </div>
          </a>
        </div>

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
