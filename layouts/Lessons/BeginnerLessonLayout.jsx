import { useState, useEffect } from 'react';
import styles from './LessonLayout.module.scss';
import { beginnerLessonsDefault } from "@/utils/beginnerLessonsDefault";
import ProtectPage from '@/components/ProtectPage';
import { Button } from '@/components/Button';
import BeginnerSideBarDesktop from "./BeginnerSideBarDesktop";
import { exitBeginnerProgress, getBeginnerProgress, updateBeginnerProgress } from "@/api/user";
import BeginnerVideo from "@/components/BeginnerVideo";
import BeginnerHeader from "@/components/BeginnerHeader";
import TextLesson from "@/components/TextLesson";
import Loader from '@/components/Loader';
import { useRouter } from 'next/router';
import VocabularyLesson from '@/components/VocabularyLesson';

export default function BeginnerLessonLayout({ isNextToElementary, videoUrl, lessonNumber, isVideoLesson, isTextLesson, isVocabulary, text, nextUrl, words_1, words_2, words_3, wordsToAsk_1, wordsToAsk_2, wordsToAsk_3 }) {
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

          if(isNext) router.push(nextUrl)
          setIsLoading(false)
        } catch (err) {
          alert('Произошла ошибка. Повторите попытку')
          console.log(err)
          setIsLoading(false)
        }
    }

   const exitBeginnerHandler = async () => {
    try {
       const response = await exitBeginnerProgress()
       router.push('/lessons/lesson1/video')
    } catch(err) {
       console.log(err)
    }
   }
    
    useEffect(() => {
        const getBeginnerProgressHandler = async () => {
            try {
                const beginnerProgress = await getBeginnerProgress()
                setBeginnerProgress(beginnerProgress.data.data)
            } catch (err) {
                console.log(err)
            }
        }

        getBeginnerProgressHandler()
        
    }, [])

    useEffect(() => {
        if(typeof window !== 'undefined') {
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

    const progressValue = lessonNumber/14*100
   
        if(isLoading) {
            return <Loader />
        } else {
            return (
                <ProtectPage >
                
                    <BeginnerHeader variant='white' lessonsSummary={lessonsSummary} beginnerProgress={beginnerProgress}/>
                    <div className={styles.container}>
                        <BeginnerSideBarDesktop lessonsSummary={lessonsSummary} beginnerProgress={beginnerProgress}/>
                        <div className={styles.rightSide}>
                            
                           <div className={styles.progressContainer}>
                                <div style={{
                            width: `${progressValue}%`,
                            height: '100%',
                            background: '#48C61C',
                            borderRadius: '25px'
                            }}/>
                            </div>
                            <h1>Beginner</h1>
                            <h2>Lesson {lessonNumber}</h2>
                            {(isVideoLesson && hasWindow) && (
                               <BeginnerVideo videoUrl={videoUrl} lessonNumber={lessonNumber} nextUrl={nextUrl} />
                              )
                            }
        
                            {isTextLesson && (
                                <TextLesson lessonNumber={lessonNumber} text={text} nextUrl={nextUrl}/>
                            )}

                            {
                                isVocabulary && (
                                    <VocabularyLesson 
                                    words_1={words_1} 
                                    words_2={words_2} 
                                    words_3={words_3} 
                                    wordsToAsk_1={wordsToAsk_1} 
                                    wordsToAsk_2={wordsToAsk_2} 
                                    wordsToAsk_3={wordsToAsk_3}/>
                                )
                            }

                            <div className={styles.btnContainer}>
                                <Button 
                                variant="standardNextOutlined" 
                                
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
