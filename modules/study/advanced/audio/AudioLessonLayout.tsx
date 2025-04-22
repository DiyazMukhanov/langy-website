import React, { useState, useRef, useEffect, useCallback } from "react";
import LessonLayout from "../shared/LessonLayout";
import styles from "./AudioLessonLayout.module.scss";
import Play from "../../../../public/images/Play.svg";
import ButtonClose from "../../../../public/images/Button-close.svg";
import Mistake from "../../../../public/images/Mistake.svg";
import Right from "../../../../public/images/Right.svg";
import Image from "next/image";
import NextButton from "../../../../public/images/Next-button.svg";
import { Button } from "@/ui-kit/Button";
import { useRouter } from "next/router";
import classNames from "classnames";
import Loader from "@/modules/shared/Loader";
import { setProgressData } from "../../shared/api/setProgressData";
import Audioplayer from "../../../shared/Audioplayer/index";

const TranslationCard = ({ word, translation, onRemove, innerRef }) => {
  const readWordAloud = useCallback((text) => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  }, []);

  return (
    <div className={styles.translationCard} ref={innerRef}>
      <div className={styles.cardTop}>
        <ButtonClose className={styles.cancel} onClick={onRemove} />
      </div>
      <div className={styles.cardMiddle}>
        <p>
          {word} - {translation}
        </p>
        <Play onClick={() => readWordAloud(word)} className={styles.wordPlay} />
      </div>
    </div>
  );
};

const AudioLessonLayout = ({
  text,
  audioTasks,
  wordsWithTranslations,
  audioSrc,
  lessonNumber,
  nextUrl,
  currentLessonData,
  subscriptionIsNeeded,
  textTitle,
  isBeginner,
}) => {
  const [isShowingEn, setIsShowingEn] = useState(false);
  const [isShowingRu, setIsShowingRu] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [wasClicked, setWasClicked] = useState(null);
  const [hoveredWord, setHoveredWord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const innerRef = useRef(null);
  const router = useRouter();
  const totalQuestions = audioTasks?.length;

  useEffect(() => {
    return () => {
      if (innerRef.current) {
        innerRef.current = null;
      }
    };
  }, []);

  const showEnglishHandler = () => {
    setIsShowingEn(true);
  };

  const showTranslationHandler = () => {
    setIsShowingRu(true);
  };

  const cancelShowEnHandler = () => {
    setIsShowingEn(false);
  };

  const cancelShowRuHandler = () => {
    setIsShowingRu(false);
  };

  const setProgressHandler = async () => {
    setIsLoading(true);
    try {
      const data = await setProgressData({
        lessonNumber: lessonNumber,
        chapterCode: "au",
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

  const clickHandler = (id) => {
    setWasClicked(id);
  };

  const handleWordClick = (e) => {
    const wordWithPunctuation = e.target.textContent;
    const wordWithoutPunctuation = wordWithPunctuation
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .trim();
    setHoveredWord(wordWithoutPunctuation);
  };

  const handleTranslationClose = () => {
    setHoveredWord(null);
  };

  const nextLessonHandler = () => {
    setProgressHandler(lessonNumber, nextUrl);
  };

  const textByWords = text?.en.split(" ");

  const findTranslation = (englishWord) => {
    const searchedWord = wordsWithTranslations.filter(
      (word) => word.en === englishWord
    );

    if (searchedWord.length > 0) {
      return searchedWord[0].ru;
    } else {
      return "перевод не найден";
    }
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <LessonLayout
          chapter="audio"
          currentLessonData={currentLessonData}
          subscriptionIsNeeded={subscriptionIsNeeded}
          isBeginner={isBeginner}
        >
          <Audioplayer audioSrc={audioSrc} />
          <div className={styles.textButtons}>
            <p className={styles.bold}>
              Нажмите на любое слово, чтобы увидеть перевод
            </p>
            {isShowingEn ? (
              <div className={styles.textShowEn}>
                {/* <Image
                  priority
                  src={ButtonClose}
                  width={30}
                  onClick={cancelShowEnHandler}
                  className={styles.cancel}
                /> */}
                <ButtonClose
                  onClick={cancelShowEnHandler}
                  className={styles.cancel}
                />
                {hoveredWord && (
                  <div className={styles.cardContainer}>
                    <TranslationCard
                      word={hoveredWord}
                      translation={findTranslation(hoveredWord)}
                      onRemove={handleTranslationClose}
                      innerRef={innerRef}
                    />
                  </div>
                )}
                <p className={styles.textCommonSize}>
                  <p className={styles.textTitle}>{textTitle}</p>
                  <div className={styles.textBody}>
                    {textByWords.map((word, index) => (
                      <span
                        key={index}
                        onClick={handleWordClick}
                        className={styles.span}
                      >
                        {/* {hoveredWord === word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim() && index === hoveredWordIndex && <TranslationCard word={word}/>} */}
                        {word}{" "}
                      </span>
                    ))}
                  </div>
                </p>
              </div>
            ) : (
              <Button
                variant="standardMiddleOutlined"
                onClick={showEnglishHandler}
              >
                Показать текст
              </Button>
            )}

            {isShowingRu ? (
              <div className={styles.textShowRu}>
                {/* <Image
                  priority
                  src={ButtonClose}
                  width={30}
                  onClick={cancelShowRuHandler}
                  className={styles.cancel}
                /> */}
                <ButtonClose
                  onClick={cancelShowRuHandler}
                  className={styles.cancel}
                />
                <p className={styles.textCommonSize}>{text.ru}</p>
              </div>
            ) : (
              <Button
                variant="standardMiddleOutlined"
                onClick={showTranslationHandler}
              >
                Показать перевод
              </Button>
            )}
          </div>

          <div className={styles.bottom}>
            <p>Выполните тест:</p>
            <div className={styles.questions}>
              <div className={styles.questionContainer}>
                <p className={styles.questionText}>
                  {audioTasks[currentQuestion - 1].title}
                </p>
                <p>
                  {currentQuestion}/{totalQuestions}
                </p>
              </div>
              {audioTasks[currentQuestion - 1].answers.map((answer) => (
                <div className={styles.answerContainer} key={answer.id}>
                  <div
                    className={classNames(styles.rectangle, {
                      [styles.disabled]: wasClicked,
                    })}
                    onClick={() => clickHandler(answer.id)}
                  >
                    {wasClicked === answer.id && answer.isCorrect === true && (
                      // <Image
                      //   priority
                      //   src={Right}
                      //   width={20}
                      //   className={styles.tick}
                      // />
                      <Right className={styles.tick} />
                    )}
                    {wasClicked === answer.id && answer.isCorrect === false && (
                      // <Image
                      //   priority
                      //   src={Mistake}
                      //   width={20}
                      //   className={styles.tick}
                      // />
                      <Mistake className={styles.tick} />
                    )}
                    {wasClicked && answer.isCorrect === true && (
                      // <Image
                      //   priority
                      //   src={Right}
                      //   width={20}
                      //   className={styles.tick}
                      // />
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
        </LessonLayout>
      </>
    );
  }
};

export default AudioLessonLayout;
