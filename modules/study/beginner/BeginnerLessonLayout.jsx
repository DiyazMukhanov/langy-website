import { useState, useEffect } from 'react';
import styles from '../advanced/shared/LessonLayout.module.scss';
import { beginnerLessonsDefault } from "@/utils/beginnerLessonsDefault";
import ProtectPage from '@/modules/shared/ProtectPage';
import { Button } from '@/ui-kit/Button';
import BeginnerSideBarDesktop from "./shared/BeginnerSideBarDesktop";
import { exitBeginnerProgress } from './shared/api/exitBeginnerProgress';
import { getBeginnerProgress } from '@/modules/shared/api/getBeginnerProgress';
import { updateBeginnerProgress } from './shared/api/updateBeginnerProgress';
import { setCurrentLearningField } from '../shared/api/setCurrentLearningField';
import BeginnerHeader from './shared/BeginnerHeader';
import TextLesson from './TextLesson';
import Loader from '@/modules/shared/Loader';
import { useRouter } from 'next/router';
import VocabularyLesson from './VocabularyLesson';
import CardLesson from './CardsLesson';

export default function BeginnerLessonLayout({
    isNextToElementary,
    lessonNumber,
    isTextLesson,
    isVocabulary,
    text,
    nextUrl,
    words_1,
    words_2,
    words_3,
    wordsToAsk_1,
    wordsToAsk_2,
    wordsToAsk_3,
    wordSrc_1,
    wordSrc_2,
    wordSrc_3,
    wordSrc_4,
    wordSrc_5,
    wordSrc_6,
    wordSrc_7,
    wordSrc_8,
    wordSrc_9,
    isCardLesson,
    words
}) {
    const [isLoading, setIsLoading] = useState(false)
    const [beginnerProgress, setBeginnerProgress] = useState(null)
    const [hasWindow, setHasWindow] = useState(false)
    const router = useRouter()
    const lessonsSummary = beginnerLessonsDefault

    const updateCurrentBeginnerProgressBody = {
        currentLesson: lessonNumber
    }

    const currentLesson = lessonNumber + 1

    const updateNextBeginnerProgressBody = {
        currentLesson: currentLesson,
        completedLesson: lessonNumber
    }

    const updateBeginnerProgressHandler = async (body, isNext) => {
        try {
            setIsLoading(true)
            const response = await updateBeginnerProgress(body)
            if (isNext) router.push(nextUrl)
            //   setIsLoading(false)
        } catch (err) {
            alert('Произошла ошибка. Повторите попытку')
            console.log(err)
            //   setIsLoading(false)
        }
    }

    const exitBeginnerHandler = async () => {
        try {
            const response = await exitBeginnerProgress()
            router.push('/menu')
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const getBeginnerProgressHandler = async () => {
            try {
                const beginnerProgress = await getBeginnerProgress()
                setBeginnerProgress(beginnerProgress.data.data)
                const currentLearningField = await setCurrentLearningField({ currentLearningField: "starter" })
            } catch (err) {
                console.log(err)
            }
        }

        getBeginnerProgressHandler()

    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true)
        }
    }, [])

    useEffect(() => {
        const updateBeginnerProgressHandlerInit = async () => {
            try {
                const response = await updateBeginnerProgress(updateCurrentBeginnerProgressBody)
                setBeginnerProgress(response.data.data)
            } catch (err) {
                console.log(err)
            }
        }

        updateBeginnerProgressHandlerInit()
    }, [])

    const progressValue = lessonNumber / 14 * 100

    if (isLoading) {
        return <Loader />
    } else {
        return (
            <ProtectPage >

                <BeginnerHeader variant='white' lessonsSummary={lessonsSummary} beginnerProgress={beginnerProgress} />
                <div className={styles.container}>
                    <BeginnerSideBarDesktop lessonsSummary={lessonsSummary} beginnerProgress={beginnerProgress} />
                    <div className={styles.rightSide}>

                        <div className={styles.progressContainer}>
                            <div style={{
                                width: `${progressValue}%`,
                                height: '100%',
                                background: '#48C61C',
                                borderRadius: '25px'
                            }} />
                        </div>
                        <h1>Beginner</h1>
                        <h2>Lesson {lessonNumber}</h2>
                        {isTextLesson && (
                            <TextLesson lessonNumber={lessonNumber} text={text} nextUrl={nextUrl} />
                        )}

                        {
                            isVocabulary && (
                                <VocabularyLesson
                                    words_1={words_1}
                                    words_2={words_2}
                                    words_3={words_3}
                                    wordsToAsk_1={wordsToAsk_1}
                                    wordsToAsk_2={wordsToAsk_2}
                                    wordsToAsk_3={wordsToAsk_3}
                                    wordSrc_1={wordSrc_1}
                                    wordSrc_2={wordSrc_2}
                                    wordSrc_3={wordSrc_3}
                                    wordSrc_4={wordSrc_4}
                                    wordSrc_5={wordSrc_5}
                                    wordSrc_6={wordSrc_6}
                                    wordSrc_7={wordSrc_7}
                                    wordSrc_8={wordSrc_8}
                                    wordSrc_9={wordSrc_9}
                                />

                            )
                        }

                        {
                            isCardLesson && (
                                <CardLesson words={words} />
                            )
                        }

                        <div className={styles.btnContainer}>
                            <Button
                                variant="newStandardNextOutlined"

                                onClick={!isNextToElementary ? () => updateBeginnerProgressHandler(updateNextBeginnerProgressBody, true) : exitBeginnerHandler}
                            >
                                Далее
                            </Button>
                        </div>


                        {/* {children} */}
                    </div>
                </div>

            </ProtectPage>

        )
    }

}
