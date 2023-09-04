import React, { useState, useRef, useEffect, useCallback } from "react";
import LessonLayout from "./LessonLayout";
import styles from "./AudioLessonLayout.module.scss";
import Pause from "../../public/images/Pause.svg";
import Play from "../../public/images/Play.svg";
import ButtonClose from "../../public/images/Button-close.svg";
import Mistake from "../../public/images/Mistake.svg";
import Right from "../../public/images/Right.svg";
import Image from "next/image";
import { Button } from "@/components/Button";
import {useRouter} from "next/router"
import classNames from "classnames";
import Loader from "@/components/Loader";
import { setProgressData } from "@/api/user";

const TranslationCard = ({ word, translation, onRemove, innerRef }) => {
    const readWordAloud = (text) => {
      const speechSynthesis = window.speechSynthesis
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      speechSynthesis.speak(utterance)
    }

    return (
    <div className={styles.translationCard} ref={innerRef}>
        <div className={styles.cardTop}>
        <Image
            priority
            src={ButtonClose}
            width={20}
            className={styles.cancel}
            onClick={onRemove}
        />
        </div>
        <div className={styles.cardMiddle}>
       <p>{word} - {translation}</p>
       <Image
                priority
                src={Play}
                width={30}
                onClick={() => readWordAloud(word)}
                className={styles.wordPlay}
                />
       </div>
       
    </div>
    )
}

const AudioLessonLayout = ({text, audioTasks, wordsWithTranslations, audioSrc, lessonNumber, nextUrl, currentLessonData, subscriptionIsNeeded, textTitle}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasWindow, setHasWindow] = useState(false)
  const [isShowingEn, setIsShowingEn] = useState(false)
  const [isShowingRu, setIsShowingRu] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [wasClicked, setWasClicked] = useState(null)
  const [hoveredWord, setHoveredWord] = useState(null)
  // const [hoveredWordIndex, setHoveredWordIndex] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const innerRef = useRef(null)
  const router = useRouter()

  const totalQuestions = audioTasks?.length
  
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
    const currentTime = audioRef?.current?.currentTime;
    setTimeProgress(currentTime);
    if(progressBarRef !== null && progressBarRef.current !== null) {
      progressBarRef.current.value = currentTime;
    }
  
    if (isPlaying || currentTime < duration) {
      // Continue updating progress during the pause state if audio hasn't ended
      playAnimationRef.current = requestAnimationFrame(progressUpdate);
    }
  }, [audioRef, duration, isPlaying, progressBarRef]);

  useEffect(() => {
    if (hasWindow) {
      if (isPlaying) {
        audioRef?.current?.play();
        playAnimationRef.current = requestAnimationFrame(progressUpdate);
        audioRef.current.playbackRate = 0.5
      } else {
        audioRef?.current?.pause();
        cancelAnimationFrame(playAnimationRef.current);
      }
    }
  }, [isPlaying, audioRef, progressUpdate, hasWindow]);
  //End Pause correction

  const repeat = useCallback(() => {
    const currentTime = audioRef?.current?.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if(hasWindow) {
        if (isPlaying) {
            audioRef?.current?.play();
            playAnimationRef.current = requestAnimationFrame(repeat);
            audioRef.current.playbackRate = 0.8
          } else {
            audioRef?.current?.pause();
            cancelAnimationFrame(playAnimationRef.current);
          }
    }
   
  }, [isPlaying, audioRef, repeat])

  const onLoadedMetadata = () => {
    const seconds = audioRef?.current?.duration;
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

  const setProgressHandler = async () => {
    setIsLoading(true)
    try{
    const data = await setProgressData({lessonNumber: lessonNumber, chapterCode: 'au'})
    router.push(nextUrl)
    
    } catch (err) {
       
        setIsLoading(false)
        router.push(nextUrl)
    }
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
      setProgressHandler(lessonNumber, nextUrl)
    }
}

const clickHandler = (id) => {
    setWasClicked(id)
 }

 const handleWordClick= (e) => {
    const wordWithPunctuation = e.target.textContent
    const wordWithoutPunctuation = wordWithPunctuation.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim()
    setHoveredWord(wordWithoutPunctuation)

 }

 const handleTranslationClose = () => {
    setHoveredWord(null);
  }

 const textByWords = text.en.split(" ")

 const findTranslation = (englishWord) => {
    const searchedWord = wordsWithTranslations.filter(word => word.en === englishWord)

    if(searchedWord.length > 0) {
        return searchedWord[0].ru
    } else {
        return 'перевод не найден'
    }
 }

 if(isLoading) {
  return <Loader />
 } else {
  return (
    <>
      <LessonLayout chapter="audio" currentLessonData={currentLessonData} subscriptionIsNeeded={subscriptionIsNeeded}>
        
         {hasWindow && <audio src={audioSrc} ref={audioRef} preload="metadata" onLoadedMetadata={onLoadedMetadata}/>}
         
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
            <p className={styles.bold}>Нажмите на любое слово, чтобы увидеть перевод</p>
            {isShowingEn ? <div className={styles.textShowEn}>
            <Image
                        priority
                        src={ButtonClose}
                        width={30}
                        onClick={cancelShowEnHandler}
                        className={styles.cancel}
                    />
                    {hoveredWord && <div className={styles.cardContainer}>
                        <TranslationCard 
                        word={hoveredWord} 
                        translation={findTranslation(hoveredWord)}
                        onRemove={handleTranslationClose} 
                        innerRef={innerRef}/>
                        </div>
                        }
                       <p className={styles.textCommonSize}>
                        <p className={styles.textTitle}>{textTitle}</p>
                        <div className={styles.textBody}>
                        {textByWords.map((word, index) => (
                                
                                <span 
                                key={index} 
                                // onMouseEnter={handleWordHover}
                                // onMouseLeave={handleMouseLeave}
                                onClick={handleWordClick}
                                className={styles.span}
                                >
                                    {/* {hoveredWord === word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim() && index === hoveredWordIndex && <TranslationCard word={word}/>} */}
                                    {word}{" "}
                                </span>
                        ))}
                        </div>
                        
                        </p>
                    
            </div> : <Button variant="standardMiddleOutlined" onClick={showEnglishHandler}>Показать текст</Button>}
            
            {isShowingRu ? <div className={styles.textShowRu}>
            <Image
                        priority
                        src={ButtonClose}
                        width={30}
                        onClick={cancelShowRuHandler}
                        className={styles.cancel}
                    />
                    <p className={styles.textCommonSize}>{text.ru}</p>
                    
            </div> : <Button variant="standardMiddleOutlined" onClick={showTranslationHandler}>Показать перевод</Button>}
         </div>

         <div className={styles.bottom}>
                    <p>Выполните тест:</p>
                    <div className={styles.questions}>
                       <div className={styles.questionContainer}>
                            <p className={styles.questionText}>{audioTasks[currentQuestion - 1].title}</p>
                            <p>{currentQuestion}/{totalQuestions}</p>
                       </div>
                       {audioTasks[currentQuestion - 1].answers.map(answer => (
                        <div className={styles.answerContainer} key={answer.id}>
                            
                                <div className={classNames(
                                  styles.rectangle,
                                  {[styles.disabled]: wasClicked}
                                  )} 
                                  onClick={() => clickHandler(answer.id)}
                                  >
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
                                      {wasClicked && answer.isCorrect === true && (
                                        <Image
                                        priority
                                        src={Right}
                                        
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
 }
  
};

export default AudioLessonLayout
