import Header from "@/components/Header"
import { Button } from "@/components/Button"
import styles from './Test.module.scss'
import { useState, useEffect } from "react"
import classNames from "classnames"

export default function Test() {
    const questions = [
        {
            number: 1,
            question: 'My parrot _______ speak',
            answers: [
                {
                    id: 1,
                    answer: 'can',
                    isRight: true
                },
                {
                    id: 2,
                    answer: 'may',
                    isRight: false
                },
                {
                    id: 3,
                    answer: 'must',
                    isRight: false
                }
            ]
        },
        {
            number: 2,
            question: 'My cat _______ speak',
            answers: [
                {
                    id: 1,
                    answer: 'may',
                    isRight: false
                },
                {
                    id: 2,
                    answer: 'can',
                    isRight: true
                },
                {
                    id: 3,
                    answer: 'must',
                    isRight: false
                }
            ]
        },
        {
            number: 3,
            question: 'My dog _______ speak',
            answers: [
                {
                    id: 1,
                    answer: 'must',
                    isRight: false
                },
                {
                    id: 2,
                    answer: 'may',
                    isRight: false
                },
                {
                    id: 3,
                    answer: 'can',
                    isRight: true
                }
            ]
        },
        {
            number: 4,
            question: 'My kitten _______ speak',
            answers: [
                {
                    id: 1,
                    answer: 'can',
                    isRight: true
                },
                {
                    id: 2,
                    answer: 'may',
                    isRight: false
                },
                {
                    id: 3,
                    answer: 'must',
                    isRight: false
                }
            ]
        },
        {
            number: 5,
            question: 'My squirrel _______ speak',
            answers: [
                {
                    id: 1,
                    answer: 'can',
                    isRight: true
                },
                {
                    id: 2,
                    answer: 'may',
                    isRight: false
                },
                {
                    id: 3,
                    answer: 'must',
                    isRight: false
                }
            ]
        }
    ]

    const questionsTotal = questions.length;
    const initalProgress = 1/questionsTotal*100
    
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [progress, setProgress] = useState(initalProgress)
    const [chosenId, setChosenId] = useState(null)
    const [currentQuestionBlock, setCurrentQuestionBlock] = useState(questions[0])
    const [answerResults, setAnswerResults] = useState([])

    useEffect(() => {
        setCurrentQuestionBlock(questions[currentQuestion - 1]);
        setProgress(currentQuestion/questionsTotal*100)
        setChosenId(null)
      }, [currentQuestion]);

      useEffect(() => {
        console.log(answerResults)
      }, [answerResults])

    const chooseHandler = (id) => {
        setChosenId(id)
    }

    const nextQuestionHandler = () => {
        if(!chosenId) {
            alert('Пожалуйста, сделайте выбор')
            return
        }

        if(currentQuestion < questionsTotal) {
            setCurrentQuestion(currentQuestion + 1)
        }

        if(answerResults.length < questionsTotal) {
            const chosenAnswer = currentQuestionBlock.answers.filter(item => item.id === chosenId)
            const updatedAnswerResults = [...answerResults, chosenAnswer[0].isRight]
            setAnswerResults(updatedAnswerResults)
        }
    }

    return (
        <>
          <Header variant='blue'/>
          <div className={styles.container}>
          <div className={styles.progressContainer}>
             <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#007bff'
        }}/>
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
                        {[styles.chosenCircle]: chosenId === item.id}
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
        </>
    )
}