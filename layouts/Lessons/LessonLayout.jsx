import Header from "@/components/Header";
import styles from './LessonLayout.module.scss';
import SideBarDesktop from "./SideBarDesktop";
import { Typography } from "@/components/Typography";
import { UserContext } from "@/store/userContext";
import { useContext, useEffect, useState } from "react";
import  { getProgressData, setCurrentLessonData }  from "../../api/user";
import Loader from "@/components/Loader";
import ProtectPage from "@/components/ProtectPage";
import { getThisLessonNumber } from "@/utils/getThisLessonNumber";

export default function LessonLayout({ children, chapter, withoutProgress, currentLessonData, subscriptionIsNeeded }) {
    const userCtx = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [progressValue, setProgressValue] = useState(0)
    const lessonsSummary = userCtx.lessonsSummary
    const updatedLessonsSummary = userCtx.getUpdatedLessonsSummary()

    console.log(currentLessonData)
    let thisLessonNumber


    const getProgressValue = () => {
        let currentLessonNumber
        let currentSublessonNumber

        updatedLessonsSummary.forEach(lesson => {
            lesson.lessons.forEach((item, index) => {
                if(item.isCurrent === false) {
                    return
                } else {
                    if(lesson.lessonNumber < 9) {
                        currentLessonNumber = lesson.lessonNumber
                    }

                    if(lesson.lessonNumber > 8 && lesson.lessonNumber < 17 ) {
                        currentLessonNumber = lesson.lessonNumber - 8
                    }

                    if(lesson.lessonNumber > 16 ) {
                        currentLessonNumber = lesson.lessonNumber - 16  
                    }

                    // currentLessonNumber = lesson.lessonNumber
                    currentSublessonNumber = (currentLessonNumber - 1) * 4 + index + 1
                }
            }) 
        })

        return currentSublessonNumber/32*100
    }

    console.log(getProgressValue())
    
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

    let dateObject 
    let options 
    let formattedDate 

    if(userCtx?.userData?.subscriptionExpirationDate !== null) {
        dateObject = new Date(userCtx?.userData?.subscriptionExpirationDate)

        options = {
           year: 'numeric',
           month: 'long',
           day: 'numeric'
         }
   
          formattedDate = dateObject.toLocaleDateString('ru-RU', options)
    }
    

    if(isLoading) {
        return <Loader />
    } else {
        return (
        <ProtectPage currentLesson={currentLessonData.currentLesson} currentChapter={currentLessonData.currentChapter} subscriptionIsNeeded={subscriptionIsNeeded}>
            <Header variant='white' lessonsSummary={updatedLessonsSummary}/>
            <div className={styles.container}>
                <SideBarDesktop lessonsSummary={updatedLessonsSummary} expires={formattedDate}/>
                <div className={styles.rightSide}>
                    <div>
                    <Typography size='small' element='h3' className={styles.text}>{currentLessonData.level}</Typography>
                    {formattedDate && <p className={styles.subscriptionPeriodMobileOnly}>подписка действует до {formattedDate}</p>}
                    {chapter === 'audio' && <p className={styles.mobileViewOnly}>Для более эффективного усвоения, рекомендуем прослушивать и прочитывать текст до полного понимания</p>}
                    </div>
                    {!withoutProgress && (<div className={styles.progressContainer}>
                        <div style={{
                    width: `${getProgressValue()}%`,
                    height: '100%',
                    background: '#48C61C',
                    borderRadius: '25px'
                    }}/>
                    </div>)}
                    
                <div className={styles.links}>
                   {chapter === 'grammar' && <p className={styles.currentLink}>Грамматика - Урок {getThisLessonNumber(currentLessonData.currentLesson)}</p>}
                   {chapter === 'audio' && <p className={styles.currentLink}>Аудио/Чтение - Урок {getThisLessonNumber(currentLessonData.currentLesson)}</p>}
                   {chapter === 'writing' && <p className={styles.currentLink}>Письмо - Урок {getThisLessonNumber(currentLessonData.currentLesson)}</p>}
                   {chapter === 'test' && <p className={styles.currentLink}>Тест - Урок {getThisLessonNumber(currentLessonData.currentLesson)}</p>}
                </div>
                {children}
                </div>
            </div>
            </ProtectPage>
            
            )
    }
    
}