import Header from "@/modules/shared/Header"
import { Button } from "@/ui-kit/Button"
import styles from './Test.module.scss'
import { useState, useEffect, useContext } from "react"
import classNames from "classnames"
import Result from "./Result"
import { UserContext } from "@/store/userContext"
import ProtectPage from "@/modules/shared/ProtectPage"
import { useRouter } from "next/router"
import Loader from "@/modules/shared/Loader"

export default function Test() {
    const userCtx = useContext(UserContext)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        if (userCtx?.userData?.levelChecked === true) {
            if (userCtx?.userData?.currentLesson !== 0 && userCtx?.userData?.currentChapter !== 'no') {
                router.push(`/lessons/lesson${userCtx?.userData?.currentLesson}/${userCtx?.userData?.currentChapter}`)
                setIsLoading(false)
            } else {
                router.push('/lessons/lesson1/video')
                setIsLoading(false)
            }
        } else {
            setIsLoading(false)
        }
    }, [userCtx.userData])

    const questions = [
        {
            number: 1,
            question: ' I ____ a student of English.',
            answers: [
                {
                    id: 1,
                    answer: 'are',
                    isRight: false
                },
                {
                    id: 2,
                    answer: 'am',
                    isRight: true
                },
                {
                    id: 3,
                    answer: 'is',
                    isRight: false
                }
            ]
        },
        {
            number: 2,
            question: "This is Carlos. He's ______",
            answers: [
                {
                    id: 1,
                    answer: 'Japan',
                    isRight: false
                },
                {
                    id: 2,
                    answer: 'France',
                    isRight: false
                },
                {
                    id: 3,
                    answer: 'Spainish',
                    isRight: true
                }
            ]
        },
        {
            number: 3,
            question: "She's from Tokyo. She _____ Japanese.",
            answers: [
                {
                    id: 1,
                    answer: 'is',
                    isRight: true
                },
                {
                    id: 2,
                    answer: 'was',
                    isRight: false
                },
                {
                    id: 3,
                    answer: 'are',
                    isRight: false
                }
            ]
        },
        {
            number: 4,
            question: 'They _____ Spanish. They’re from Italy.',
            answers: [
                {
                    id: 1,
                    answer: 'are',
                    isRight: false
                },
                {
                    id: 2,
                    answer: 'is',
                    isRight: false
                },
                {
                    id: 3,
                    answer: "aren’t",
                    isRight: true
                }
            ]
        },
        {
            number: 5,
            question: '___ is your first name?',
            answers: [
                {
                    id: 1,
                    answer: 'What',
                    isRight: true
                },
                {
                    id: 2,
                    answer: 'Who',
                    isRight: false
                },
                {
                    id: 3,
                    answer: 'How',
                    isRight: false
                }
            ]
        },
        {
            number: 6,
            question: 'These are your books and _____ are mine. ',
            answers: [
                {
                    id: 1,
                    answer: 'this',
                    isRight: false
                },
                {
                    id: 2,
                    answer: 'those',
                    isRight: true
                },
                {
                    id: 3,
                    answer: 'that',
                    isRight: false
                }
            ]
        },
        {
            number: 7,
            question: '_____ she like sport? ',
            answers: [
                {
                    id: 1,
                    answer: 'Does',
                    isRight: true
                },
                {
                    id: 2,
                    answer: 'Do',
                    isRight: false
                },
                {
                    id: 3,
                    answer: 'Are',
                    isRight: false
                }
            ]
        },
        {
            number: 8,
            question: 'When _____ have lunch?',
            answers: [
                {
                    id: 1,
                    answer: 'is he',
                    isRight: false
                },
                {
                    id: 2,
                    answer: 'do he',
                    isRight: false
                },
                {
                    id: 3,
                    answer: 'does he',
                    isRight: true
                }
            ]
        },
        {
            number: 9,
            question: 'Do you like ______ films?',
            answers: [
                {
                    id: 1,
                    answer: 'watch',
                    isRight: false
                },
                {
                    id: 2,
                    answer: 'watching',
                    isRight: true
                },
                {
                    id: 3,
                    answer: 'watches',
                    isRight: false
                }
            ]
        },
        {
            number: 10,
            question: `Peter's _____ name is Michael`,
            answers: [
                {
                    id: 1,
                    answer: `brother's`,
                    isRight: true
                },
                {
                    id: 2,
                    answer: `sister's`,
                    isRight: false
                },
                {
                    id: 3,
                    answer: `mother's`,
                    isRight: false
                }
            ]
        },
        {
            number: 11,
            question: ` I love books but I ______ like TV.`,
            answers: [
                {
                    id: 1,
                    answer: `do`,
                    isRight: false
                },
                {
                    id: 2,
                    answer: `doesn't`,
                    isRight: false
                },
                {
                    id: 3,
                    answer: `don't`,
                    isRight: true
                }
            ]
        },
        {
            number: 12,
            question: `He hasn't got ______ brothers and sisters.`,
            answers: [
                {
                    id: 1,
                    answer: `some`,
                    isRight: false
                },
                {
                    id: 2,
                    answer: `the`,
                    isRight: false
                },
                {
                    id: 3,
                    answer: `any`,
                    isRight: true
                }
            ]
        },
        {
            number: 13,
            question: `How many children ______ got?`,
            answers: [
                {
                    id: 1,
                    answer: `they`,
                    isRight: false
                },
                {
                    id: 2,
                    answer: `have they`,
                    isRight: true
                },
                {
                    id: 3,
                    answer: `do they`,
                    isRight: false
                }
            ]
        },
        {
            number: 14,
            question: `There are a lot of CDs on the ______.`,
            answers: [
                {
                    id: 1,
                    answer: `cupboard`,
                    isRight: false
                },
                {
                    id: 2,
                    answer: `sink`,
                    isRight: false
                },
                {
                    id: 3,
                    answer: `shelves`,
                    isRight: true
                }
            ]
        },
        {
            number: 15,
            question: `______ a sofa and two armchairs in the living room.`,
            answers: [
                {
                    id: 1,
                    answer: `There have `,
                    isRight: false
                },
                {
                    id: 2,
                    answer: "It's",
                    isRight: false
                },
                {
                    id: 3,
                    answer: `There's`,
                    isRight: true
                }
            ]
        },
        {
            number: 16,
            question: `Are there _______ wardrobes in the bedroom?`,
            answers: [
                {
                    id: 1,
                    answer: `any`,
                    isRight: true
                },
                {
                    id: 2,
                    answer: "the",
                    isRight: false
                },
                {
                    id: 3,
                    answer: `some`,
                    isRight: false
                }
            ]
        },
        {
            number: 17,
            question: `The cinema is _______ the bank.`,
            answers: [
                {
                    id: 1,
                    answer: `next`,
                    isRight: false
                },
                {
                    id: 2,
                    answer: "in front",
                    isRight: false
                },
                {
                    id: 3,
                    answer: `opposite`,
                    isRight: true
                }
            ]
        },
        {
            number: 18,
            question: `You ______ buy shoes in a post office.`,
            answers: [
                {
                    id: 1,
                    answer: `can to`,
                    isRight: false
                },
                {
                    id: 2,
                    answer: "can't",
                    isRight: false
                },
                {
                    id: 3,
                    answer: `can`,
                    isRight: true
                }
            ]
        },
        {
            number: 19,
            question: `How ______ vegetables do you eat every day?`,
            answers: [
                {
                    id: 1,
                    answer: `many`,
                    isRight: true
                },
                {
                    id: 2,
                    answer: "more",
                    isRight: false
                },
                {
                    id: 3,
                    answer: `long`,
                    isRight: false
                }
            ]
        },
        {
            number: 20,
            question: ` Is there ______ butter in the fridge?`,
            answers: [
                {
                    id: 1,
                    answer: `one`,
                    isRight: false
                },
                {
                    id: 2,
                    answer: "some",
                    isRight: false
                },
                {
                    id: 3,
                    answer: `any`,
                    isRight: true
                }
            ]
        },

    ]

    const questionsTotal = questions.length;
    const initalProgress = 1 / questionsTotal * 100

    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [progress, setProgress] = useState(initalProgress)
    const [chosenId, setChosenId] = useState(null)
    const [currentQuestionBlock, setCurrentQuestionBlock] = useState(questions[0])
    const [answerResults, setAnswerResults] = useState([])
    const [numberOfRightAnswers, setNumberOfRightAnswers] = useState(0)
    const [resultIsShowing, setResultIsShowing] = useState(false)

    useEffect(() => {
        setCurrentQuestionBlock(questions[currentQuestion - 1]);
        setProgress(currentQuestion / questionsTotal * 100)
        setChosenId(null)
    }, [currentQuestion]);

    useEffect(() => {
        const rightsArray = answerResults.filter(item => item === true)
        setNumberOfRightAnswers(rightsArray.length)
        if (answerResults.length === questionsTotal) {
            setResultIsShowing(true)
        }
    }, [answerResults])

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
            setAnswerResults(updatedAnswerResults)
        }
    }

    if (isLoading) {
        return <Loader />
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