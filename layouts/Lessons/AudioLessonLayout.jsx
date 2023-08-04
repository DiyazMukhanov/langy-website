// AudioPlayer.js
import React, { useState, useRef, useEffect, useCallback } from "react";
import LessonLayout from "./LessonLayout";
import { lessonsSummary } from "../../utils/lessonsSummary";
import {text} from '../../utils/text'
import styles from "./AudioLessonLayout.module.scss";
import Pause from "../../public/images/Pause.svg";
import Play from "../../public/images/Play.svg";
import ButtonClose from "../../public/images/Button-close.svg";
import Mistake from "../../public/images/Mistake.svg";
import Right from "../../public/images/Right.svg";
import Image from "next/image";
import { Button } from "@/components/Button";
import {videoTasks} from '../../utils/videoTasks'
import {useRouter} from "next/router"

const AudioLessonLayout = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasWindow, setHasWindow] = useState(false)
  const [isShowingEn, setIsShowingEn] = useState(false)
  const [isShowingRu, setIsShowingRu] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [wasClicked, setWasClicked] = useState(null)

  const router = useRouter()

    const totalQuestions = videoTasks.length
  
  useEffect(() => {
    if(typeof window !== 'undefined') {
        setHasWindow(true);
    }
    }, [])
  const audioRef = useRef()
  const progressBarRef = useRef()
  const playAnimationRef = useRef();

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  //Pause correction
  const progressUpdate = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;

    if (isPlaying || currentTime < duration) {
      // Continue updating progress during the pause state if audio hasn't ended
      playAnimationRef.current = requestAnimationFrame(progressUpdate);
    }
  }, [audioRef, duration, isPlaying, progressBarRef]);

  useEffect(() => {
    if (hasWindow) {
      if (isPlaying) {
        audioRef.current.play();
        playAnimationRef.current = requestAnimationFrame(progressUpdate);
      } else {
        audioRef.current.pause();
        cancelAnimationFrame(playAnimationRef.current);
      }
    }
  }, [isPlaying, audioRef, progressUpdate, hasWindow]);
  //End Pause correction

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if(hasWindow) {
        if (isPlaying) {
            audioRef.current.play();
            playAnimationRef.current = requestAnimationFrame(repeat);
          } else {
            audioRef.current.pause();
            cancelAnimationFrame(playAnimationRef.current);
          }
    }
   
  }, [isPlaying, audioRef, repeat])

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  }

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const showEnglishHandler = () => {
    setIsShowingEn(true)
  }

  const showTranslationHandler = () => {
    setIsShowingRu(true)
  }

  const cancelShowEnHandler = () => {
    setIsShowingEn(false)
  }

  const cancelShowRuHandler = () => {
    setIsShowingRu(false)
  }

  const nextQuestionHandler = () => {
    if(currentQuestion < totalQuestions) {
        if(wasClicked) {
            setCurrentQuestion(currentQuestion + 1)
            setWasClicked(null)
        } else {
            alert('Пожалуйста выберите ваш вариант')
        }
    }

    if(currentQuestion === totalQuestions) {
        router.push('lessons/lesson1/writing')
    }
}

const clickHandler = (id) => {
    setWasClicked(id)
 }

  return (
    <>
      <LessonLayout lessonsSummary={lessonsSummary} chapter="audio">
        
         {hasWindow && <audio src="/audio/one.mp3" ref={audioRef} preload="metadata" onLoadedMetadata={onLoadedMetadata}/>}
         
         <div className={styles.progress}>
            <div className={styles.time}>
            <span>{formatTime(timeProgress)} / {formatTime(duration)}</span>
            </div>

            <div className={styles.rangeContainer}>
                <Image
                priority
                src={isPlaying ? Pause : Play}
                width={30}
                onClick={togglePlayPause}
                className={styles.play}
                />
                <input 
                type="range" 
                className={styles.rangeSlider} 
                ref={progressBarRef} 
                onChange={handleProgressChange}
                style = {{
                    '--current-time': timeProgress,
                    '--duration': duration
                }}
                />
            </div>
         </div>

         <div className={styles.textButtons}>
            {isShowingEn ? <div className={styles.textShowEn}>
                    <p>{text.en}</p>
                    <Image
                        priority
                        src={ButtonClose}
                        width={30}
                        onClick={cancelShowEnHandler}
                        className={styles.cancel}
                    />
            </div> : <Button variant="standardMiddleOutlined" onClick={showEnglishHandler}>Показать текст</Button>}
            
            {isShowingRu ? <div className={styles.textShowRu}>
                    <p>{text.ru}</p>
                    <Image
                        priority
                        src={ButtonClose}
                        width={30}
                        onClick={cancelShowRuHandler}
                        className={styles.cancel}
                    />
            </div> : <Button variant="standardMiddleOutlined" onClick={showTranslationHandler}>Показать перевод</Button>}
         </div>

         <div className={styles.bottom}>
                    <p>Выполните тест:</p>
                    <div className={styles.questions}>
                       <div className={styles.questionContainer}>
                            <p className={styles.questionText}>{videoTasks[currentQuestion - 1].title}</p>
                            <p>{currentQuestion}/{totalQuestions}</p>
                       </div>
                       {videoTasks[currentQuestion - 1].answers.map(answer => (
                        <div className={styles.answerContainer} key={answer.id}>
                            
                                <div className={styles.rectangle} onClick={() => clickHandler(answer.id)}>
                                    {wasClicked === answer.id && answer.isCorrect === true && (
                                        <Image
                                        priority
                                        src={Right}
                                        width={20}
                                        className={styles.tick}
                                        />
                                    )}
                                    {wasClicked === answer.id && answer.isCorrect === false && (
                                        <Image
                                        priority
                                        src={Mistake}
                                        
                                        width={20}
                                        className={styles.tick}
                                        />
                                    )}
                                </div>
                           
                           <p>{answer.answer}</p>
                        </div>    
                       ))}
                
                    </div>
                    <div className={styles.btnContainer}>
                    <Button onClick={nextQuestionHandler} variant="standardNextOutlined" className={styles.nextButton}>Далее</Button>
                    </div>
                </div>
           
        
      </LessonLayout>
    </>
  );
};

export default AudioLessonLayout
