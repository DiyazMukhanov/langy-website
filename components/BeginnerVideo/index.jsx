import { useState, useEffect, useRef } from "react"
import ReactPlayer from 'react-player'
import styles from './BeginnerVideo.module.scss'
import { Button } from "../Button"
import { updateBeginnerProgress } from "@/api/user"
import { useRouter } from "next/router"
import Loader from "../Loader"

export default function BeginnerVideo({videoUrl, lessonNumber, nextUrl}) {
    const [isLoading, setIsLoading] = useState(false)
    const [showVideo, setShowVideo] = useState(false)
    
    const router= useRouter()
    const currentLesson = lessonNumber + 1

    const updateNextBeginnerProgressBody = {
        currentLesson: currentLesson,
        completedLesson: lessonNumber
    }

    const updateCurrentBeginnerProgressBody = {
        currentLesson: lessonNumber
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

    // useEffect(() => {
    //     if(typeof window !== 'undefined') {
    //         setHasWindow(true)
    //     }
    // }, [])

    useEffect(() => {
        setIsLoading(true)
        updateBeginnerProgressHandler(updateCurrentBeginnerProgressBody, false)
        setIsLoading(false)

    }, [])

    if(isLoading) {
        return <Loader />
    } else {
        return (
            <>
            <p className={styles.task}>Просмотрите видео</p>
            <div className={styles.wrapper}>
             
                <ReactPlayer
                    url={videoUrl}
                    width="100%"
                    height="100%"
                    controls={true}
                />
            </div>
            <div className={styles.btnContainer}>
                    <Button 
                    variant="standardNextOutlined" 
                    className={styles.nextButton} 
                    onClick={() => updateBeginnerProgressHandler(updateNextBeginnerProgressBody, true)}
                    >
                        Далее
                    </Button>
                </div> 
            </>
            )
    }
}