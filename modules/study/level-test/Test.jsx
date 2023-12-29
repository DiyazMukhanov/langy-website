import Header from "@/modules/shared/Header"
import { Button } from "@/ui-kit/Button"
import styles from './Test.module.scss'
import { useState, useEffect } from "react"
import classNames from "classnames"
import Result from "./Result"
import ProtectPage from "@/modules/shared/ProtectPage"
import { levelQuestions as questions} from "../shared/levelQuestions"

export default function Test() {

    const questionsTotal = questions.length;
    const initalProgress = 1 / questionsTotal * 100
    const questionsLength = questions.reduce((total, item) => {
        if (item.level === 'beginner') {
            total[0].push(item)
          }
        if (item.level === 'pre-intermediate') {
            total[1].push(item)
          }
        if (item.level === 'intermediate') {
            total[2].push(item)
          }
        if (item.level === 'advanced') {
            total[3].push(item)
          }
        return total
        }, [[], [], [], []])

    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [progress, setProgress] = useState(initalProgress)
    const [chosenId, setChosenId] = useState(null)
    const [currentQuestionBlock, setCurrentQuestionBlock] = useState(questions[0])
    const [answerResults, setAnswerResults] = useState([])
    const [numberOfRightAnswers, setNumberOfRightAnswers] = useState([])
    const [resultIsShowing, setResultIsShowing] = useState(false)
    const [rightAnswerBlocks, setRightAnswerBlocks] = useState([])

    useEffect(() => {
        setCurrentQuestionBlock(questions[currentQuestion - 1]);
        setProgress(currentQuestion / questionsTotal * 100)
        setChosenId(null)
    }, [currentQuestion]);

    useEffect(() => {
        const rightsLength = rightAnswerBlocks.reduce((result, item) => {
            if (item.level === 'beginner') {
                result[0].push(item)
              }
            if (item.level === 'pre-intermediate') {
                result[1].push(item)
              }
            if (item.level === 'intermediate') {
                result[2].push(item)
              }
            if (item.level === 'advanced') {
                result[3].push(item)
              }
            return result
           }, [[], [], [], []])
    
        setNumberOfRightAnswers([
                  rightsLength[0].length * 100 /questionsLength[0].length,
                  rightsLength[1].length * 100 /questionsLength[1].length,
                  rightsLength[2].length * 100 /questionsLength[2].length,
                  rightsLength[3].length * 100 /questionsLength[3].length
                ])

        if (answerResults.length === questionsTotal) {
            setResultIsShowing(true)
        }
    }, [answerResults, rightAnswerBlocks])


    const chooseHandler = (id) => {
        setChosenId(id)
    }

    const nextQuestionHandler = () => {
        if (!chosenId) {
            alert('Пожалуйста, сделайте выбор')
            return
        }

        if (currentQuestion < questionsTotal) {
            setCurrentQuestion(currentQuestion + 1)
        }

        if (answerResults.length < questionsTotal) {
            const chosenAnswer = currentQuestionBlock.answers.filter(item => item.id === chosenId)
            const updatedAnswerResults = [...answerResults, chosenAnswer[0].isRight]
            const updatedRightAnswerBlocks = [...rightAnswerBlocks, currentQuestionBlock]
            setAnswerResults(updatedAnswerResults)
            if (chosenAnswer[0].isRight) {
                setRightAnswerBlocks(updatedRightAnswerBlocks)
            }
        }
    }
    
    if (!resultIsShowing) {
        return (
            <ProtectPage>
                <Header variant='blue' />
                <div className={styles.container}>
                    <div className={styles.progressContainer}>
                        <div style={{
                            width: `${progress}%`,
                            height: '100%',
                            background: '#007bff',
                            borderRadius: '25px',
                        }} />
                    </div>

                    <div className={styles.questionsContainer}>
                        <div className={styles.top}>
                            <div className={styles.numberBlock}>
                                <div className={styles.number}>
                                    {currentQuestion}
                                </div>
                                <p className={styles.questionsHeading}>Вопрос</p>
                            </div>

                            <div className={styles.numberFrom}>
                                {currentQuestion}/{questionsTotal}
                            </div>
                        </div>
                        <div className={styles.middle}>
                            <div className={styles.question}>
                                {currentQuestionBlock.question}
                            </div>

                            <div className={styles.answers}>
                                {currentQuestionBlock.answers.map(item => (
                                    <div className={styles.answerContainer} key={item.id}>
                                        <div className={classNames(
                                            styles.circle,
                                            { [styles.rightChosenCircle]: chosenId === item.id && item.isRight === true },
                                            { [styles.wrongChosenCircle]: chosenId === item.id && item.isRight === false },
                                            { [styles.rightChosenCircle]: chosenId && item.isRight === true },
                                            { [styles.disabled]: chosenId },
                                        )}
                                            onClick={() => chooseHandler(item.id)}
                                        >
                                        </div>
                                        {item.answer}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.bottom}>
                            <Button variant='standardLargeOutlined' onClick={nextQuestionHandler}>Далее</Button>
                        </div>
                    </div>
                </div>
            </ProtectPage>
        )
    } else {
        return <Result level={numberOfRightAnswers}></Result>
    }
}