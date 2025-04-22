import LessonLayout from "../shared/LessonLayout";
import styles from "./TestLessonLayout.module.scss";
import { useEffect, useState, useContext } from "react";
import classNames from "classnames";
import NextButton from "../../../../public/images/Next-button.svg";
import RightTick from "../../../../public/images/Right-tick.svg";
import WrongTick from "../../../../public/images/Wrong-tick.svg";
import Image from "next/image";
import { Typography } from "@/ui-kit/Typography";
import { Button } from "@/ui-kit/Button";
import { UserContext } from "@/store/userContext";
import { useRouter } from "next/router";
import { setProgressData } from "../../shared/api/setProgressData";
import Loader from "@/modules/shared/Loader";

const ResultsShowing = ({
  rightAnswers,
  totalQuestions,
  questionsArr,
  nextUrl,
  lessonNumber,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const checkIsRight = (question, chosenAnswer) => {
    const trueAnswer = question.answers.filter(
      (answer) => answer.isCorrect === true
    );
    const trueResult = trueAnswer[0].answer;
    return trueResult === chosenAnswer;
  };

  const findRightAnswer = (question) => {
    const trueAnswer = question.answers.filter(
      (answer) => answer.isCorrect === true
    );
    return trueAnswer[0].answer;
  };

  const setProgressHandler = async () => {
    setIsLoading(true);
    try {
      const data = await setProgressData({
        lessonNumber: lessonNumber,
        chapterCode: "ts",
      });
      if (data) {
        router.push(nextUrl);
      }
    } catch (err) {
      setIsLoading(false);
      router.push(nextUrl);
    }
  };

  const goNextHndler = () => {
    setProgressHandler();
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className={styles.resultsContainer}>
        <Typography size="small" element="h3">
          Поздравляем!
        </Typography>
        <p className={styles.resultText}>
          Ваш результат: {rightAnswers}/{totalQuestions}
        </p>
        <div className={styles.resultsShowing}>
          {questionsArr.map((question) => (
            <>
              <div className={styles.answerBlockTop}>
                <div className={styles.answersAllContainer}>
                  <div className={styles.answerResult}>
                    {checkIsRight(question, question.chosenAnswer) ? (
                      <RightTick />
                    ) : (
                      <WrongTick />
                    )}
                    <p>{question.id}.</p>
                    <p>{question.firstPart}</p>
                    <div
                      className={classNames(
                        {
                          [styles.resultWordCardRight]: checkIsRight(
                            question,
                            question.chosenAnswer
                          ),
                        },
                        {
                          [styles.resultWordCardWrong]: !checkIsRight(
                            question,
                            question.chosenAnswer
                          ),
                        }
                      )}
                    >
                      {question.chosenAnswer}
                    </div>
                    <p>{question.secondPart}</p>
                  </div>
                  {!checkIsRight(question, question.chosenAnswer) && (
                    // if the answer was wrong we show the right answer to user
                    <div className={styles.answerResult}>
                      <p className={styles.secondShow}>
                        <span className={styles.board}>|</span>
                        <span className={styles.questionNumberMobile}>
                          {question.id}.&nbsp;
                        </span>{" "}
                        {question.firstPart}
                      </p>
                      <div className={styles.resultWordCardRight}>
                        {findRightAnswer(question)}
                      </div>
                      <p>{question.secondPart}</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>

        <div className={styles.buttonNextBottom}>
          <Button variant="standardNextContained" onClick={goNextHndler}>
            Следующий урок
          </Button>
        </div>
      </div>
    );
  }
};

const WordContainer = ({ word, isCorrect, onClick, droppedWord }) => {
  return (
    <div
      className={classNames(
        styles.wordContainer,
        { [styles.invisible]: droppedWord === word },
        { [styles.disabled]: droppedWord }
      )}
      onClick={onClick}
    >
      {word}
    </div>
  );
};

export default function TestLessonLayout({
  questions,
  nextUrl,
  currentLessonData,
  subscriptionIsNeeded,
  lessonNumber,
}) {
  const [questionsArr, setQuestionsArray] = useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = questions?.length;
  const [droppedWord, setDroppedWord] = useState(null);
  const [results, setResults] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(10);
  const router = useRouter();

  const userCtx = useContext(UserContext);

  const rightAnswersFind = (arr) => {
    const onlyTrueArr = arr.filter((item) => item === true);
    return onlyTrueArr.length;
  };

  const rightAnswers = rightAnswersFind(results);

  const handleChoose = (word, isCorrect) => {
    setDroppedWord(word);
    const updatedResults = [...results, isCorrect];
    setResults(updatedResults);
    const updatedQuestionsArr = questionsArr.map((item) =>
      item.id === currentQuestion ? { ...item, chosenAnswer: word } : item
    );

    setQuestionsArray(updatedQuestionsArr);
  };

  useEffect(() => {
    setDroppedWord(null);
    const updatedProgress = (currentQuestion / totalQuestions) * 100;
    setProgress(updatedProgress);
  }, [currentQuestion]);

  const nextHandler = () => {
    if (currentQuestion < totalQuestions) {
      if (!droppedWord) {
        alert("Выберите вариант ответа");
        return;
      }
      setCurrentQuestion(currentQuestion + 1);
    }

    if (currentQuestion === totalQuestions) {
      setIsCompleted(true);
    }
  };

  const setProgressHandler = async () => {
    try {
      const data = await setProgressData({
        lessonNumber: lessonNumber,
        chapterCode: "ts",
      });
      if (data) {
        router.push(nextUrl);
      }
    } catch (err) {
      router.push(nextUrl);
    }
  };

  return (
    <>
      <LessonLayout
        chapter="test"
        withoutProgress={true}
        currentLessonData={currentLessonData}
        subscriptionIsNeeded={subscriptionIsNeeded}
      >
        {!isCompleted ? (
          <>
            <div className={styles.progressContainer}>
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background: "#3b92d1",
                  borderRadius: "25px",
                }}
              />
            </div>
            <div className={styles.questionContainer}>
              <div className={styles.top}>
                <p className={styles.questionTitle}>Вопрос {currentQuestion}</p>
                <p>
                  {currentQuestion}/{totalQuestions}
                </p>
              </div>

              <div className={styles.middle}>
                <div className={styles.firstPartBlock}>
                  {questions[currentQuestion - 1].firstPart}
                </div>

                <div
                  className={classNames(styles.dropZone, {
                    [styles.blue]: droppedWord,
                  })}
                >
                  {droppedWord && droppedWord}
                </div>
                {questions[currentQuestion - 1].secondPart}
              </div>

              <div className={styles.bottom}>
                {questions[currentQuestion - 1].answers.map((answer) => (
                  <WordContainer
                    key={answer.id}
                    word={answer.answer}
                    isCorrect={answer.isCorrect}
                    onClick={() =>
                      handleChoose(answer.answer, answer.isCorrect)
                    }
                    droppedWord={droppedWord}
                  />
                ))}
              </div>

              <div className={styles.buttonsContainer}>
                <NextButton className={styles.next} onClick={nextHandler} />
              </div>
            </div>
            <div className={styles.nextButtonInTest}>
              <Button
                variant="standardNextContained"
                onClick={setProgressHandler}
              >
                Следующий урок
              </Button>
            </div>
          </>
        ) : (
          <ResultsShowing
            rightAnswers={rightAnswers}
            totalQuestions={totalQuestions}
            questionsArr={questionsArr}
            nextUrl={nextUrl}
            lessonNumber={lessonNumber}
          />
        )}
      </LessonLayout>
    </>
  );
}
