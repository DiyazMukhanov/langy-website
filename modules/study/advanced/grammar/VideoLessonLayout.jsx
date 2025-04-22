import LessonLayout from "../shared/LessonLayout";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import styles from "./VideoLessonLayout.module.scss";
import Right from "../../../../public/images/Right.svg";
import Mistake from "../../../../public/images/Mistake.svg";
import { Button } from "@/ui-kit/Button";
import Image from "next/image";
import NextButton from "../../../../public/images/Next-button.svg";
import { useRouter } from "next/router";
import classNames from "classnames";
import { setProgressData } from "../../shared/api/setProgressData";
import Loader from "@/modules/shared/Loader";

export default function VideoLessonLayout({
  videoTasks,
  nextUrl,
  lessonNumber,
  currentLessonData,
  subscriptionIsNeeded,
  videoUrl,
  topic,
  isBeginner,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [wasClicked, setWasClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const totalQuestions = videoTasks?.length;

  const clickHandler = (id) => {
    setWasClicked(id);
  };

  const setProgressHandler = async () => {
    setIsLoading(true);
    try {
      const data = await setProgressData({
        lessonNumber: lessonNumber,
        chapterCode: "gr",
      });
      router.push(nextUrl);
    } catch (err) {
      setIsLoading(false);
      router.push(nextUrl);
    }
  };

  const nextQuestionHandler = () => {
    if (currentQuestion < totalQuestions) {
      if (wasClicked) {
        setCurrentQuestion(currentQuestion + 1);
        setWasClicked(null);
      } else {
        alert("Пожалуйста выберите ваш вариант");
      }
    }

    if (currentQuestion === totalQuestions) {
      setProgressHandler(lessonNumber, nextUrl);
    }
  };

  const nextLessonHandler = () => {
    setProgressHandler(lessonNumber, nextUrl);
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <LessonLayout
        chapter="grammar"
        currentLessonData={currentLessonData}
        subscriptionIsNeeded={subscriptionIsNeeded}
        isBeginner={isBeginner}
      >
        <div className={styles.container}>
          <div className={styles.top}>
            <p className={styles.topic}>Тема: {topic}</p>
            {/* <p className={styles.task}>Посмотрите следующее видео:</p> */}
            <div className={styles.wrapper}>
              {hasWindow && (
                <ReactPlayer
                  url={videoUrl}
                  className={styles.player}
                  width="100%"
                  height="100%"
                  controls={true}
                  config={{
                    youtube: {
                      playerVars: { cc_lang_pref: "ru" }, // Set the language code for subtitles
                    },
                  }}
                />
              )}
            </div>
          </div>

          <div className={styles.bottom}>
            <p>Выполните тест:</p>
            <div className={styles.questions}>
              <div className={styles.questionContainer}>
                <p className={styles.questionText}>
                  {videoTasks[currentQuestion - 1].title}
                </p>
                <p>
                  {currentQuestion}/{totalQuestions}
                </p>
              </div>
              {videoTasks[currentQuestion - 1].answers.map((answer) => (
                <div className={styles.answerContainer} key={answer.id}>
                  <div
                    className={classNames(styles.rectangle, {
                      [styles.nonClickable]: wasClicked,
                    })}
                    onClick={() => clickHandler(answer.id)}
                  >
                    {wasClicked === answer.id && answer.isCorrect === true && (
                      // <Image
                      //     priority
                      //     src={Right}
                      //     width={20}
                      //     className={styles.tick}
                      // />
                      <Right className={styles.tick} />
                    )}
                    {wasClicked === answer.id && answer.isCorrect === false && (
                      //   <Image
                      //     priority
                      //     src={Mistake}
                      //     width={20}
                      //     className={styles.tick}
                      //   />
                      <Mistake className={styles.tick} />
                    )}

                    {wasClicked && answer.isCorrect === true && (
                      //   <Image
                      //     priority
                      //     src={Right}
                      //     width={20}
                      //     className={styles.tick}
                      //   />
                      <Right className={styles.tick} />
                    )}
                  </div>

                  <p>{answer.answer}</p>
                </div>
              ))}

              <div className={styles.buttonsContainer}>
                {/* <Image
                  priority
                  src={NextButton}
                  className={styles.next}
                  onClick={nextQuestionHandler}
                /> */}
                <NextButton
                  className={styles.next}
                  onClick={nextQuestionHandler}
                />
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Button
                onClick={nextLessonHandler}
                variant="standardNextOutlined"
                className={styles.nextButton}
              >
                Далее
              </Button>
            </div>
          </div>
        </div>
      </LessonLayout>
    );
  }
}
