import { useIterate } from "../../shared/hooks/useIterate";
import EverydayEnglishContainer from "../shared/EverydayEnglishContainer";
import styles from "./SpeakingLessonLayout.module.scss";
import { speakingQuestions } from "@/utils/lessonsMaterials/easyEnglish/lesson1/speaking";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAudioRecorder } from 'react-audio-voice-recorder';
import classNames from "classnames";
import Image from 'next/image'
import Microphone from "./../../../../public/images/microphone.png"
import Play from "./../../../../public/images/Play.svg"
import { Button } from "@/ui-kit/Button";

export default function SpeakingLessonLayout() {
    const { iteration, updateIteration } = useIterate(speakingQuestions)
    const [audioUrl, setAudioUrl] = useState(null)
    const [showAnswer, setShowAnswer] = useState(false)
    const audioRef = useRef(null)
    const {
        startRecording,
        stopRecording,
        isRecording,
        recordingBlob
    } = useAudioRecorder()

    const stopRecordingHandler = () => {
        stopRecording()
    }

    const startRecordingHandler = () => {
        startRecording()
    }

    const getQuestion = useCallback(() => {
        const neededQuestionBlock = speakingQuestions.filter(item => item.iteration === iteration)
        return neededQuestionBlock[0]
    }, [iteration])

    function play() {
        audioRef.current.play();
    }

    const checkHandler = () => {
        setShowAnswer(true)
    }

    useEffect(() => {
        if (recordingBlob) {
            const url = URL.createObjectURL(recordingBlob);
            setAudioUrl(url)
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }

            audioRef.current = new Audio(url);
        }

    }, [recordingBlob])

    useEffect(() => {
        setShowAnswer(false)
    }, [iteration])

    return (
        <EverydayEnglishContainer className={styles.internalLayout}>
            <h2>{getQuestion().question}</h2>
            <div className={styles.recordingBlock}>
                {isRecording && <div onClick={stopRecordingHandler} className={styles.stopRecordingButton}>
                </div>
                }

                {!isRecording ?
                    <Image
                        priority
                        src={Microphone}
                        height={44}
                        className={styles.microphone}
                        alt="microphone"
                        onClick={startRecordingHandler}
                    /> :
                    <div className={classNames(
                        styles.isRecording,
                        styles.circle
                    )}>
                    </div>}
                {audioUrl ? <Image
                    priority
                    src={Play}
                    height={44}
                    className={styles.play}
                    alt="microphone"
                    onClick={play}
                /> : ''}
            </div>
            {!showAnswer ? <Button
                variant="newStandardNextOutlined"
                disabled={false}
                className={styles.check}
                onClick={checkHandler}
            >
                Проверить себя
            </Button> : <span className={styles.showingAnswer}>{getQuestion().en}</span>}

            <button onClick={updateIteration} className={styles.moreBtn}>Еще</button>
        </EverydayEnglishContainer>
    )
}