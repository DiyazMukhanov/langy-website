import { useState, useEffect, useRef } from "react"
import ReactPlayer from 'react-player'
import styles from './BeginnerVideo.module.scss'
import { Button } from "../Button"
import { updateBeginnerProgress } from "@/api/user"
import { useRouter } from "next/router"
import Loader from "../Loader"

export default function BeginnerVideo({ videoUrl, lessonNumber, nextUrl }) {
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    if (isLoading) {
        return <Loader />
    } else {
        return (
            <>
                <p className={styles.task}>Просмотрите видео и выучите алфавит</p>
                <div className={styles.wrapper}>

                    <ReactPlayer
                        url={videoUrl}
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                </div>

            </>
        )
    }
}