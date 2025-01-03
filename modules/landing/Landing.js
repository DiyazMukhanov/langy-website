import styles from "./Landing.module.scss";
import Image from "next/image";
import Logo from "../../public/images/Logo.svg";
import LogoTwo from "../../public/images/Logo-2.svg";
import Cards from "../../public/images/Cards.svg";
import CardsVertical from "../../public/images/Cards-vertical.svg";
import Laptop from "../../public/images/Laptop.svg";
import DropOne from "../../public/images/drop-1.svg";
import DropTwo from "../../public/images/drop-2.svg";
import Man from "../../public/images/Man.svg";
import Plus from "../../public/images/Plus.svg";
import X from "../../public/images/X.svg";
import Service from "../../public/images/Service.svg";
import ServiceBlue from "../../public/images/Service-blue.svg";
import Up from "../../public/images/Up.svg";
import Sandwich from "../../public/images/Sandwich.svg";
import ButtonClose from "../../public/images/Button-close.svg";
import LogoBlue from "../../public/images/Logo-blue.svg";
import LogoBlueBottom from "../../public/images/Logo-blue-bottom.svg";
import { Typography } from "../../ui-kit/Typography/index";
import { Button } from "../../ui-kit/Button";
import Advantage from "./shared/Advantage";
import AdvantageCard from "./shared/AdvantageCard";
import HowCard from "./shared/HowCard";
import { useState, useContext, useEffect } from "react";
import Modal from "./../shared/Modal/Modal";
import classNames from "classnames";
import { useRouter } from "next/router";
import Visa from "../../public/images/visa.png";
import { UserContext } from "@/store/userContext";
import Loader from "@/modules/shared/Loader";
import { getBeginnerProgress } from "../shared/api/getBeginnerProgress";
import { getMe } from "../shared/api/getMe";
import { userLogout } from "../shared/api/userLogout";
import { FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { getEverydayProgress } from "../shared/api/getEverydayProgress";

export default function Landing() {
  const [frequentOpenedId, setFrequentOpenedId] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const router = useRouter();
  const userCtx = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [currentBeginnerLesson, setCurrentBeginnerLesson] = useState(undefined);
  const [everydayProgress, setEverydayProgress] = useState(null);
  const [installPromptEvent, setInstallPromptEvent] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getMe();
        userCtx.setUserData(userData.data.data);

        const beginnerProgress = await getBeginnerProgress();
        if (beginnerProgress.data.data !== null) {
          setCurrentBeginnerLesson(beginnerProgress.data.data.currentLesson);
        }

        const everydayProgress = await getEverydayProgress();
        setEverydayProgress(everydayProgress.data.data);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchUser();

    // const handleBeforeInstallPrompt = (event) => {
    //   event.preventDefault();
    //   setInstallPromptEvent(event);
    // };

    // window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // return () => {
    //   window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    // };
  }, []);

  // const installApp = () => {
  //   if (installPromptEvent) {
  //     installPromptEvent.prompt();
  //     installPromptEvent.userChoice.then((choiceResult) => {
  //       if (choiceResult.outcome === 'accepted') {
  //         console.log('User accepted the install prompt');
  //       } else {
  //         console.log('User dismissed the install prompt');
  //       }
  //       setInstallPromptEvent(null);
  //     });
  //   }
  // };

  const frequentQuestions = [
    {
      id: 1,
      question: "Чему я научусь обучаясь с Langy?",
      answer:
        "C нами вы овладеете необходимой языковой базой, научитесь письменным навыкам и обогатите словарный запас.",
    },
    {
      id: 2,
      question: "Какой график учебы?",
      answer:
        "Вы сами решаете когда, где и сколько времени уделять изучению английского языка. Вы можете подстроить обучение под свой ритм жизни и предпочтения.",
    },
    {
      id: 3,
      question: "Я смогу понимать английскую речь на слух?",
      answer:
        "Платформа предоставляет аудио материалы разного уровня сложности, что поможет улучшить ваши навыки понимания на слух.",
    },
  ];

  const questionHandler = (id) => {
    if (frequentOpenedId === id) {
      setFrequentOpenedId(null);
    } else {
      setFrequentOpenedId(id);
    }
  };

  const modalCloseHandler = () => {
    setIsModalOpened(false);
  };

  const modalOpenHandler = () => {
    setIsModalOpened(true);
  };

  const loginHandler = () => {
    router.push("authorization/login");
  };

  const registrationHandler = () => {
    router.push("authorization/registration");
  };

  const continueHandler = () => {
    if (!userCtx.userData) {
      router.push("authorization/login");
    } else {
      router.push("/menu");
    }
  };

  const logOutHandler = async () => {
    try {
      const response = await userLogout();
      router.reload();
    } catch (err) {
      console.log(err);
      alert("Произошла ошибка выхода");
    }
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className={styles.overlay}>
        <Modal isOpen={isModalOpened} onClose={modalCloseHandler}>
          <div className={styles.modalContainer}>
            <div className={styles.modalLogos}>
              {/* <Image priority src={LogoBlue} height={38} width={80} /> */}
              <LogoBlue />
              <LogoBlueBottom />
              {/* <Image priority src={LogoBlueBottom} /> */}
            </div>
            {/* <Image priority src={ButtonClose} onClick={modalCloseHandler} /> */}
            <ButtonClose onClick={modalCloseHandler} />
          </div>
          <div
            className={styles.serviceModal}
            onClick={() => router.push("/service")}
          >
            {/* <Image priority src={ServiceBlue} /> */}
            <ServiceBlue />
            <p>Служба поддержки</p>
          </div>
          {userCtx.userData && (
            <div className={styles.loggedInNavContainer}>
              <p
                className={styles.profileLink}
                onClick={() => router.push("/profile")}
              >
                Личный кабинет
              </p>
              <p
                className={styles.profileLink}
                onClick={() => router.push("/menu")}
              >
                Меню
              </p>
            </div>
          )}

          {!userCtx.userData ? (
            <div className={styles.modalButtons}>
              <Button
                variant="standardLargeContained"
                onClick={continueHandler}
              >
                Регистрация
              </Button>
              <Button variant="standardLargeOutlined" onClick={loginHandler}>
                Войти
              </Button>
            </div>
          ) : (
            <div className={styles.modalButtons}>
              <Button
                variant="standardLargeContained"
                onClick={continueHandler}
              >
                Продолжить обучение
              </Button>
              <Button variant="standardLargeOutlined" onClick={logOutHandler}>
                Выйти
              </Button>
            </div>
          )}
        </Modal>

        <header className={styles.header} id="top">
          <div>
            {/* <Image
              priority
              src={Logo}
              height={44}
              width={101}
              className={styles.logo}
            /> */}
            <Logo />
          </div>
          {/* <button
            id="install-button"
            className={styles.installBtn}
            style={{ display: installPromptEvent ? 'block' : 'none' }}
            onClick={installApp}
          >
            Установить приложение
          </button> */}

          {!userCtx.userData ? (
            <div className={styles.topButtons}>
              <Typography
                element="p"
                className={styles.enterBtn}
                onClick={loginHandler}
              >
                Войти
              </Typography>
              <Button
                variant="outlined"
                className={styles.registrationBtn}
                onClick={registrationHandler}
              >
                Регистрация
              </Button>
            </div>
          ) : (
            <div className={styles.topButtons}>
              <Typography
                element="p"
                className={styles.enterBtn}
                onClick={() => router.push("/profile")}
              >
                {userCtx?.userData?.email}
              </Typography>
              <Button
                variant="outlined"
                className={styles.registrationBtn}
                onClick={logOutHandler}
              >
                Выйти
              </Button>
            </div>
          )}

          {/* <Image
            priority
            src={Sandwich}
            className={styles.sandwich}
            onClick={modalOpenHandler}
            //  height={44}
            //  width={101}
          /> */}
          <Sandwich onClick={modalOpenHandler} className={styles.sandwich} />
        </header>

        <main className={styles.main}>
          {/* <Image priority src={DropOne} className={styles.dropOneMobile} /> */}
          <DropOne className={styles.dropOneMobile} />
          <Typography element="h1" className={styles.mainHeading}>
            Онлайн - платформа для изучения английского языка
          </Typography>
          <div className={styles.headerBottomBlock}>
            {!userCtx.userData ? (
              <div className={styles.btnBlock}>
                <Button
                  variant="contained"
                  className={styles.startBtn}
                  onClick={continueHandler}
                >
                  Начать обучение
                </Button>
              </div>
            ) : (
              <div className={styles.btnBlock}>
                <Button
                  variant="contained"
                  className={styles.startBtn}
                  onClick={continueHandler}
                >
                  Продолжить обучение
                </Button>
                {!userCtx.userData && (
                  <p
                    className={styles.haveAccountBtn}
                    onClick={() => router.push("/authorization/login")}
                  >
                    У меня уже есть аккаунт
                  </p>
                )}
              </div>
            )}
          </div>
        </main>

        <div className={styles.advantages}>
          <Advantage text="Учитесь в группе или самостоятельно" />
          <Advantage text="Все на одной платформе" />
          <Advantage text="Для тех, кто никогда не учил английский" />
          <Advantage text="Приятные цены" />
        </div>

        <section className={styles.middleSection}>
          <div className={styles.leftSideOfMiddleSection}>
            {/* <Image
              priority
              src={LogoTwo}
              width={200}
              className={styles.logoTwo}
            /> */}
            <LogoTwo className={styles.logoTwo} />
            <div className={styles.leftSideText}>
              - платформа, предоставляющая изучение английского языка через
              интернет. Платформа открыта 24 часа в сутки, 12 месяцев в году. И
              вы можете учиться в любом удобном для вас месте.
            </div>
          </div>
          <div
            className={classNames({
              [styles.imageContainer]: !isModalOpened,
              [styles.noShow]: isModalOpened,
            })}
          >
            {/* <Image
              priority
              src={Laptop}
              width={300}
              className={styles.laptop}
            /> */}
            <Laptop className={styles.laptop} />
            {/* <Image priority src={Cards} width={500} className={styles.cards} /> */}
            <Cards className={styles.cards} />

            {/* <Image
              priority
              src={CardsVertical}
              //  width={500}
              className={styles.cardsMobile}
            /> */}
            <CardsVertical className={styles.cardsMobile} />
          </div>
        </section>
        <section className={styles.advantagesSection}>
          <div className={styles.advantagesHeadingContainer}>
            <Typography size="small" element="h2">
              Наши преимущества
            </Typography>
          </div>
          <div className={styles.advantagesMain}>
            <div className={styles.advantageCards}>
              <AdvantageCard
                iconType="tick"
                textLineOne="Занимайтесь"
                textLineTwo="бесплатно"
                textLineThree="самостоятельно"
              />

              <AdvantageCard
                iconType="pc"
                textLineOne="Вы освоите"
                textLineTwo="4 основных"
                textLineThree="языковых навыка!"
              />

              <AdvantageCard
                iconType="clock"
                textLineOne="Занимайтесь в"
                textLineTwo="удобное для вас"
                textLineThree="время!"
              />
            </div>
            {!userCtx.userData ? (
              <Button
                variant="contained"
                className={styles.tryButton}
                onClick={continueHandler}
              >
                Пробуй!
              </Button>
            ) : (
              <Button
                variant="contained"
                className={styles.tryButton}
                onClick={continueHandler}
              >
                Продолжить обучение
              </Button>
            )}
          </div>
        </section>

        {/* <section className={styles.howWorks}> */}
        {/* <div className={styles.howHeading}>
            <Typography size='small' element='h2'>Как работает платформа</Typography>
          </div> */}

        {/* <div className={styles.manSection}>
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
        </section> */}

        <section className={styles.frequentQuestionsSection}>
          <div className={styles.questionsHeading}>
            <Typography size="small" element="h2">
              Часто задаваемые вопросы{" "}
            </Typography>
          </div>
          <div className={styles.questionsContainer}>
            {frequentQuestions.map((item) => (
              <div className={styles.questionBlock} key={item.id}>
                <div className={styles.questionWithPlus}>
                  <p className={styles.question}>{item.question}</p>

                  {/* <Image
                    priority
                    src={frequentOpenedId === item.id ? X : Plus}
                    className={styles.questionButton}
                    onClick={() => questionHandler(item.id)}
                  /> */}
                  {frequentOpenedId === item.id ? (
                    <X
                      className={styles.questionButton}
                      onClick={() => questionHandler(item.id)}
                    />
                  ) : (
                    <Plus
                      className={styles.questionButton}
                      onClick={() => questionHandler(item.id)}
                    />
                  )}
                </div>
                {frequentOpenedId === item.id && (
                  <p className={styles.answer}>{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className={styles.contactsNav}>
          {/* <a
            href="https://instagram.com/langy.su?igshid=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <div className={styles.instIcon}>
              <FaInstagram />
            </div>
          </a> */}
          <a
            href="https://t.me/diyaz_mukhanov" // Replace with your actual Telegram username
            target="_blank"
          >
            <div className={styles.telegramIcon}>
              <FaTelegram />
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
            {/* <Image priority src={Logo} height={44} width={101} /> */}
            <Logo />

            <div className={styles.service}>
              {/* <Image priority src={Service} /> */}
              <Service />
              <p onClick={() => router.push("/service")}>Служба поддержки</p>
            </div>
            <Button
              variant="contained"
              className={styles.tryButton}
              onClick={continueHandler}
            >
              Действуй!
            </Button>
            <a href="#top">
              {/* <Image priority src={Up} className={styles.up} /> */}
              <Up className={styles.up} />
            </a>
          </div>
          <div className={styles.footerBottom}>
            <p onClick={() => router.push("/agreement")}>
              Публичный договор-оферта
            </p>
            <p onClick={() => router.push("/confindentiality")}>
              Политика конфиденциальности
            </p>
            <p onClick={() => router.push("/procedure")}>
              Описание процедуры оплаты
            </p>
            <p>email: admin@langy.su контактный телефон: +7 707 880 51 25</p>
            <p>ИП Муханов</p>
            <Image priority src={Visa} className={styles.visa} />
            <p onClick={() => router.push("/with-teachers/teacher-main")}>
              Учителям
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
