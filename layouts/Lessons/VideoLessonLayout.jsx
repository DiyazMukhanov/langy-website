import LessonLayout from "./LessonLayout"
import ReactPlayer from 'react-player'
import { useState, useEffect } from "react"
import styles from './VideoLessonLayout.module.scss'
import { IoVolumeHigh, IoVolumeLow, IoVolumeMute, IoPlay, IoPause, IoPlayForwardCircleOutline, IoPlayBackCircleOut } from 'react-icons/io5';

export default function VideoLessonLayout() {
    const [hasWindow, setHasWindow] = useState(false)
    useEffect(() => {
        if(typeof window !== 'undefined') {
            setHasWindow(true);
        }
    }, [])
    
    const lessonsSummary = [
        {
            title: 'Урок 1',
            lessonNumber: 1,
            isCompleted: false,
            isCurrent: true,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    ru: 'Грамматика',
                    isCurrent: true,
                    isCompleted: true
                },
                {
                    chapter: 'Listening/Reading',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    ru: 'Тест',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        },
        {
            title: 'Урок 2',
            lessonNumber: 2,
            isCompleted: false,
            isCurrent: false,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    ru: 'Грамматика',
                    isCurrent: false,
                    isCompleted: true
                },
                {
                    chapter: 'Listening/Reading',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    ru: 'Тест',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        },
        {
            title: 'Урок 3',
            lessonNumber: 3,
            isCompleted: false,
            isCurrent: false,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    ru: 'Грамматика',
                    isCurrent: false,
                    isCompleted: true
                },
                {
                    chapter: 'Listening/Reading',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    ru: 'Тест',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        },
        {
            title: 'Урок 4',
            lessonNumber: 4,
            isCompleted: false,
            isCurrent: false,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    ru: 'Грамматика',
                    isCurrent: false,
                    isCompleted: true
                },
                {
                    chapter: 'Listening/Reading',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    ru: 'Тест',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        },
        {
            title: 'Урок 5',
            lessonNumber: 5,
            isCompleted: false,
            isCurrent: false,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    ru: 'Грамматика',
                    isCurrent: false,
                    isCompleted: true
                },
                {
                    chapter: 'Listening/Reading',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    ru: 'Тест',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        }
    ]

    const [playing, setPlaying] = useState(false)
    const [muted, setMuted] = useState(false)
    const [volume, setVolume] = useState(0.8)

    const handlePlayPause = () => {
        setPlaying(!playing);
      }

    const handleMuteUnmute = () => {
        setMuted(!muted);
      } 
    
    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
      }

    return (
        <LessonLayout lessonsSummary={lessonsSummary}>
            <p>Тема: Present Simple/Настоящее время</p>
            <p>Посмотрите следующее видео:</p>
            <div className={styles.wrapper}>
            {hasWindow && <ReactPlayer
                url='https://youtu.be/d5KjfW8gBpk'
                className={styles.player}
                width="100%"
                height="100%"
                playing={playing}
                volume={volume}
                muted={muted}
                controls={true}
            />}
            </div>
        </LessonLayout>
    )
}