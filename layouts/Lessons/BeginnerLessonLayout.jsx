import { useState, useEffect } from 'react';
import styles from './LessonLayout.module.scss';
import { beginnerLessonsDefault } from "@/utils/beginnerLessonsDefault";
import ProtectPage from '@/components/ProtectPage';
import Loader from "@/components/Loader";
import BeginnerSideBarDesktop from "./BeginnerSideBarDesktop";
import { getBeginnerProgress } from "@/api/user";
import BeginnerVideo from "@/components/BeginnerVideo";
import BeginnerHeader from "@/components/BeginnerHeader";
import TextLesson from "@/components/TextLesson";


export default function BeginnerLessonLayout({ children, videoUrl, lessonNumber, isVideoLesson, isTextLesson, text, nextUrl }) {
    const [isLoading, setIsLoading] = useState(false)
    const [beginnerProgress, setBeginnerProgress] = useState(null)
    const [hasWindow, setHasWindow] = useState(false)
    const lessonsSummary = beginnerLessonsDefault
    
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

    const progressValue = lessonNumber/6*100
   

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
                    {(isVideoLesson && hasWindow) && (
                       <BeginnerVideo videoUrl={videoUrl} lessonNumber={lessonNumber} nextUrl={nextUrl} />
                      )
                    }

                    {isTextLesson && (
                        <TextLesson lessonNumber={lessonNumber} text={text} nextUrl={nextUrl}/>
                    )}

                {children}
                </div>
            </div>
            
            </ProtectPage>
            
            )
    }
    
}
