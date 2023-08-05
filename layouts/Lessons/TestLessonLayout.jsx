import LessonLayout from "./LessonLayout";
import { lessonsSummary } from "@/utils/lessonsSummary";
import styles from './TestLessonLayout.module.scss'
import { useEffect, useState } from "react";
import classNames from "classnames";
import NextButton from '../../public/images/Next-button.svg'
import RightTick from '../../public/images/Right-tick.svg'
import WrongTick from '../../public/images/Wrong-tick.svg'
import Image from 'next/image'
import { Typography } from "@/components/Typography"
import { Button } from "@/components/Button";

const questions = [
    {
        id: 1,
        firstPart: 'You shall',
        secondPart: 'this game',
        description: 'Глагол быть имеет разнеы формы. Здесь нужно было поставить эту форму, потому что она больше подходит. Продолжай обучение, у тебя всё получится!',
        answers: [
            {
                id: 1,
                answer: 'play',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'go',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'swim',
                isCorrect: false
            },
            {
                id: 4,
                answer: 'eat',
                isCorrect: false
            }
        ] 
    },
    {
        id: 2,
        firstPart: 'You can',
        secondPart: 'this cake',
        description: 'Глагол быть имеет разнеы формы. Здесь нужно было поставить эту форму, потому что она больше подходит. Продолжай обучение, у тебя всё получится!',
        answers: [
            {
                id: 1,
                answer: 'play',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'go',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'swim',
                isCorrect: false
            },
            {
                id: 4,
                answer: 'eat',
                isCorrect: true
            }
        ] 
    },
    {
        id: 3,
        firstPart: 'You can',
        secondPart: 'this cat',
        description: 'Глагол быть имеет разнеы формы. Здесь нужно было поставить эту форму, потому что она больше подходит. Продолжай обучение, у тебя всё получится!',
        answers: [
            {
                id: 1,
                answer: 'take',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'go',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'swim',
                isCorrect: false
            },
            {
                id: 4,
                answer: 'eat',
                isCorrect: false
            }
        ] 
    }
]

const ResultsShowing = ({rightAnswers, totalQuestions, questionsArr }) => {
    const checkIsRight = (question, chosenAnswer) => {
        const trueAnswer = question.answers.filter(answer => answer.isCorrect === true)
        const trueResult = trueAnswer[0].answer
        return trueResult === chosenAnswer
    }

    const findRightAnswer = (question) => {
        const trueAnswer = question.answers.filter(answer => answer.isCorrect === true)
        return trueAnswer[0].answer
    }

    return (
    <div className={styles.resultsContainer}>
        <Typography size='small' element='h3'>Поздравляем!</Typography>
        <p className={styles.resultText}>Ваш результат: {rightAnswers}/{totalQuestions}</p>
        <div className={styles.resultsShowing}>
           {questionsArr.map(question => (
            <>
            <div className={styles.answerBlockTop}>
            <div className={styles.answersAllContainer}>
                
                <div className={styles.answerResult}>
                {checkIsRight(question, question.chosenAnswer) ? 
                <Image
                        priority
                        src={RightTick}
                    /> : 
                    <Image
                    priority
                    src={WrongTick}
                />}
                <p>{question.id}.</p>
                <p>{question.firstPart}</p>
                <div className={classNames(
                    {[styles.resultWordCardRight] : checkIsRight(question, question.chosenAnswer)},
                    {[styles.resultWordCardWrong] : !checkIsRight(question, question.chosenAnswer)},
                    )}>{question.chosenAnswer}</div>
                <p>{question.secondPart}</p>    
                </div>
                {!checkIsRight(question, question.chosenAnswer) &&  
                // if the answer was wrong we show the right answer to user
                <div className={styles.answerResult}>
                    <p className={styles.secondShow}><span className={styles.board}>|</span><span className={styles.questionNumberMobile}>{question.id}.&nbsp;</span> {question.firstPart}</p>
                    <div className={styles.resultWordCardRight}>{findRightAnswer(question)}</div>
                    <p>{question.secondPart}</p>
                </div>
                }
                </div>
            </div>
            <div className={styles.description}>
                <p>{question.description}</p>
                </div>
                </>
           ))}
        </div>

        <div className={styles.buttonNextBottom}>
           <Button variant="standardNextContained">Следующий урок</Button>
        </div>
        </div>
        )
}

const WordContainer = ({ word, isCorrect, onClick, droppedWord }) => {
    
   return (
   <div 
        className={classNames(
            styles.wordContainer,
            {[styles.invisible]: droppedWord === word},
            {[styles.disabled]: droppedWord}
            )}    
        onClick={onClick}
        >
      {word}
   </div>
   )
}

export default function TestLessonLayout() {
    const [questionsArr, setQuestionsArray] = useState(questions)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const totalQuestions = questions.length
    const [droppedWord, setDroppedWord] = useState(null)
    const [results, setResults] = useState([])
    const [isCompleted, setIsCompleted] = useState(false)

    console.log(questionsArr)

    const rightAnswersFind = (arr) => {
        const onlyTrueArr = arr.filter(item => item === true)
        return onlyTrueArr.length
    }

    const rightAnswers = rightAnswersFind(results)

    const handleChoose = (word, isCorrect) => {
        setDroppedWord(word);
        const updatedResults = [...results, isCorrect]
        setResults(updatedResults)
        const updatedQuestionsArr = questionsArr.map(item => 
            item.id === currentQuestion ? {...item, chosenAnswer: word} : item
            )

         setQuestionsArray(updatedQuestionsArr)   
      };

      useEffect(() => {
         setDroppedWord(null)
      }, [currentQuestion])

      const nextHandler = () => {
        if(currentQuestion < totalQuestions) {
            if(!droppedWord) {
                alert('Выберите вариант ответа')
                return
            }
            setCurrentQuestion(currentQuestion + 1)
        }

        if(currentQuestion === totalQuestions) {
            setIsCompleted(true)
        }
      }
    
     return (
     <>
     
       <LessonLayout lessonsSummary={lessonsSummary} chapter='test'>
        {!isCompleted ? (
            <div className={styles.questionContainer}>
            <div className={styles.top}>
            <p className={styles.questionTitle}>Вопрос {currentQuestion}</p>
            <p>{currentQuestion}/{totalQuestions}</p>
            </div>

            <div className={styles.middle}>
                {questions[currentQuestion - 1].firstPart}
                <div 
                className={classNames(
                styles.dropZone,
                {[styles.blue]: droppedWord},
                )}
                >
                {droppedWord && droppedWord}
                </div>
                {questions[currentQuestion - 1].secondPart}
            </div>

            <div className={styles.bottom}>
                {questions[currentQuestion - 1].answers.map(answer => (
                <WordContainer 
                key={answer.id}
                word={answer.answer}
                isCorrect={answer.isCorrect}
                onClick={() => handleChoose(answer.answer, answer.isCorrect)}
                droppedWord={droppedWord}
                />
                ))}
            </div>

            <div className={styles.buttonsContainer}>
                <Image
                    priority
                    src={NextButton}
                    className={styles.next}
                    onClick={nextHandler}
                />
            </div>
            </div>
        ) : (
            <ResultsShowing rightAnswers={rightAnswers} totalQuestions={totalQuestions} questionsArr={questionsArr} />
        )}
        
       </LessonLayout>
       
     </>
     )
}