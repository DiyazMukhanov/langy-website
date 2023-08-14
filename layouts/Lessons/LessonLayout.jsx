import Header from "@/components/Header";
import styles from './LessonLayout.module.scss';
import SideBarDesktop from "./SideBarDesktop";
import { Typography } from "@/components/Typography";
import { UserContext } from "@/store/userContext";
import { useContext, useEffect, useState } from "react";
import  { getProgressData, setCurrentLessonData }  from "../../api/user";
import Loader from "@/components/Loader";
import ProtectPage from "@/components/ProtectPage";

export default function LessonLayout({ children, chapter, withoutProgress, currentLessonData, subscriptionIsNeeded }) {
    const userCtx = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const lessonsSummary = userCtx.lessonsSummary
    const updatedLessonsSummary = userCtx.getUpdatedLessonsSummary()
    console.log(currentLessonData)

    useEffect(() => {
        const getProgress = async () => {
            const lessonsIndexes = {
                video: 0,
                audio: 1,
                writing: 2,
                test: 3
            }

            const chapterCodes = {
                gr: 'video',
                au: 'audio',
                wr: 'writing',
                ts: 'test'
            }

            let indexOfCurrentLesson

            const updatedLessonsSummary = lessonsSummary.map((lesson, index) => {
                
                if(currentLessonData.currentLesson === index + 1) {
                    lesson.lessons[lessonsIndexes[currentLessonData.currentChapter]].isCurrent = true
                    indexOfCurrentLesson = lessonsIndexes[currentLessonData.currentChapter]
                }

                lesson.lessons.map(item => {
                
                    if(item.isCurrent === true ) {
                        
                        if(chapterCodes[item.chapterCode] !== currentLessonData.currentChapter ) {
                           item.isCurrent = false
                        }
                    }
                })

                return lesson
            })

            userCtx.setLessonsSummary(updatedLessonsSummary)

            try {
                const progressData = await getProgressData()
                if(progressData) {
                    userCtx.setProgressData(progressData?.data?.data)
                    setIsLoading(false)
                }
                
              } catch (err) {
                console.log(err)
                setIsLoading(false)
              }
        }

        getProgress()
      
    }, [])

    const progress = {
        grammar: 25,
        audio: 50,
        writing: 75,
        test: 100
    }

    if(isLoading) {
        return <Loader />
    } else {
        return (
        <ProtectPage currentLesson={currentLessonData.currentLesson} currentChapter={currentLessonData.currentChapter} subscriptionIsNeeded={subscriptionIsNeeded}>
            <Header variant='white' lessonsSummary={updatedLessonsSummary}/>
            <div className={styles.container}>
                <SideBarDesktop lessonsSummary={updatedLessonsSummary}/>
                <div className={styles.rightSide}>
                    <div>
                    <Typography size='small' element='h3' className={styles.text}>Beginner</Typography>
                    <p>подписка действует до 30.07.23</p>
                    </div>
                    {!withoutProgress && (<div className={styles.progressContainer}>
                        <div style={{
                    width: `${progress[chapter]}%`,
                    height: '100%',
                    background: '#48C61C',
                    borderRadius: '25px'
                    }}/>
                    </div>)}
                    
                <div className={styles.links}>
                   {chapter === 'grammar' && <p className={styles.currentLink}>Грамматика</p>}
                   {chapter === 'audio' && <p className={styles.currentLink}>Аудио/Чтение</p>}
                   {chapter === 'writing' && <p className={styles.currentLink}>Письмо</p>}
                   {chapter === 'test' && <p className={styles.currentLink}>Тест</p>}
                </div>
                {children}
                </div>
            </div>
            </ProtectPage>
            
            )
    }
    
}