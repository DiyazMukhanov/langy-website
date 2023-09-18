import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import styles from './TextLesson.module.scss'
import Pause from "../../public/images/Pause.svg";
import Play from "../../public/images/Play.svg";
import { Button } from "@/components/Button";
import Image from "next/image";

export default function TextLesson({lessonNumber, text}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasWindow, setHasWindow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const router = useRouter()
  
  const playBackRate = 1

  const audioSrc = {
    2: "/audio/beginner_2.mp3",
    4: "/audio/beginner_4.mp3",
    5: "/audio/beginner_5.mp3"
  }    
  
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
        audioRef.current.playbackRate = playBackRate
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
    if(progressBarRef !== null && progressBarRef.current !== null) {
      progressBarRef.current.value = currentTime;
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if(hasWindow) {
        if (isPlaying) {
            audioRef?.current?.play();
            playAnimationRef.current = requestAnimationFrame(repeat);
            audioRef.current.playbackRate = playBackRate
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

 if(isLoading) {
  return <Loader />
 } else {
  return (
    <>
       
         {hasWindow && <audio src={audioSrc[lessonNumber]} ref={audioRef} preload="metadata" onLoadedMetadata={onLoadedMetadata} />}
         
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
            <p className={styles.bold}>Прослушайте и прочитайте</p>
            <div className={styles.textShowEn}>
                <div className={styles.textBody}>
                {text}
                </div>                                           
            </div> 
         </div>
         
    </>
  );
 }  
}