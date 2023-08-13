import Header from "@/components/Header";
import styles from './LessonLayout.module.scss';
import SideBarDesktop from "./SideBarDesktop";
import { Typography } from "@/components/Typography";
import { UserContext } from "@/store/userContext";
import { useContext, useEffect, useState } from "react";
import  { getProgressData }  from "../../api/user";
import Loader from "@/components/Loader";

export default function LessonLayout({ children, chapter, withoutProgress }) {
    const userCtx = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const lessonsSummary = userCtx.lessonsSummary
    const updatedLessonsSummary = userCtx.getUpdatedLessonsSummary(lessonsSummary)

    useEffect(() => {
        const getProgress = async () => {
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

    const currentLesson = lessonsSummary.filter(lesson => lesson.isCurrent === true)
    const currentChapter = currentLesson[0].lessons.filter(chapter => chapter.isCurrent === true)
    
    if(isLoading) {
        return <Loader />
    } else {
        return (<>
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
                    background: '#48C61C'
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
            
            </>
            )
    }
    
}