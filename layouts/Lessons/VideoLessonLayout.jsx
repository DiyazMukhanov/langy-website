import LessonLayout from "./LessonLayout"
import ReactPlayer from 'react-player'
import { useState, useEffect } from "react"
import styles from './VideoLessonLayout.module.scss'
import Right from '../../public/images/Right.svg'
import Mistake from '../../public/images/Mistake.svg'
import { Button } from "@/components/Button"
import Image from 'next/image'
import {useRouter} from "next/router"
import classNames from "classnames"
import { setProgressData } from "@/api/user"
import Loader from "@/components/Loader"

export default function VideoLessonLayout({videoTasks, nextUrl, lessonNumber, currentLessonData}) {
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [wasClicked, setWasClicked] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const [hasWindow, setHasWindow] = useState(false)
    
    useEffect(() => {
        if(typeof window !== 'undefined') {
            setHasWindow(true);
        }
    }, [])

    const totalQuestions = videoTasks?.length

    const clickHandler = (id) => {
       setWasClicked(id)
    }

    const setProgressHandler = async () => {
        setIsLoading(true)
        try{
        const data = await setProgressData({lessonNumber: lessonNumber, chapterCode: 'gr'})
        router.push(nextUrl)
        
        } catch (err) {
            console.log(err)
            setIsLoading(false)
            router.push(nextUrl)
        }
    }

    const nextQuestionHandler = () => {
        if(currentQuestion < totalQuestions) {
            if(wasClicked) {
                setCurrentQuestion(currentQuestion + 1)
                setWasClicked(null)
            } else {
                alert('Пожалуйста выберите ваш вариант')
            }
        }

        if(currentQuestion === totalQuestions) {
            setProgressHandler(lessonNumber, nextUrl)
        }
    }
    
    if(isLoading) {
        return <Loader />
    } else {
        return (
            <LessonLayout lessonsSummary={lessonsSummary} chapter='grammar' currentLessonData={currentLessonData}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <p className={styles.topic}>Тема: Present Simple/Настоящее время</p>
                        {/* <p className={styles.task}>Посмотрите следующее видео:</p> */}
                        <div className={styles.wrapper}>
                        {hasWindow && <ReactPlayer
                            url='https://www.youtube.com/watch?v=TD-WPyKQy9o'
                            className={styles.player}
                            width="100%"
                            height="100%"
                            controls={true}
                        />}
                        </div>   
                    </div>
    
                    <div className={styles.bottom}>
                        <p>Выполните тест:</p>
                        <div className={styles.questions}>
                           <div className={styles.questionContainer}>
                                <p className={styles.questionText}>{videoTasks[currentQuestion - 1].title}</p>
                                <p>{currentQuestion}/{totalQuestions}</p>
                           </div>
                           {videoTasks[currentQuestion - 1].answers.map(answer => (
                            <div className={styles.answerContainer} key={answer.id}>
                                
                                    <div className={classNames(
                                        styles.rectangle, 
                                        {[styles.nonClickable]: wasClicked})} 
                                        onClick={() => clickHandler(answer.id)}
                                        >
                                        {wasClicked === answer.id && answer.isCorrect === true && (
                                            <Image
                                            priority
                                            src={Right}
                                            width={20}
                                            className={styles.tick}
                                            />
                                        )}
                                        {wasClicked === answer.id && answer.isCorrect === false && (
                                            <Image
                                            priority
                                            src={Mistake}
                                            width={20}
                                            className={styles.tick}
                                            />
                                        )}
    
                                        {
                                          wasClicked && answer.isCorrect === true && (
                                            <Image
                                            priority
                                            src={Right}
                                            width={20}
                                            className={styles.tick}
                                            />
                                        )  
                                        }
                                    </div>
                               
                               <p>{answer.answer}</p>
                            </div>    
                           ))}
                    
                        </div>
                        <div className={styles.btnContainer}>
                        <Button onClick={nextQuestionHandler} variant="standardNextOutlined" className={styles.nextButton}>Далее</Button>
                        </div>
                    </div>
                </div>
            </LessonLayout>
        )
    }
   
}