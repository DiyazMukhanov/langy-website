// AudioPlayer.js
import React, { useState, useRef, useEffect, useCallback } from "react";
import LessonLayout from "./LessonLayout";
import { lessonsSummary } from "../../utils/lessonsSummary";
import styles from "./AudioLessonLayout.module.scss";
import Pause from "../../public/images/Pause.svg";
import Play from "../../public/images/Play.svg";
import Image from "next/image";

const AudioLessonLayout = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasWindow, setHasWindow] = useState(false)

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

  //Pause
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
  //End Pause

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

  return (
    <>
      <LessonLayout lessonsSummary={lessonsSummary} chapter="audio">
        
         {hasWindow && <audio src="/audio/one.mp3" ref={audioRef} preload="metadata" onLoadedMetadata={onLoadedMetadata}/>}
         <div className={styles.controls}>
         <Image
            priority
            src={isPlaying ? Pause : Play}
            onClick={togglePlayPause}
            />
         </div>
         <div className={styles.progress}>
         <span>{formatTime(timeProgress)}</span>
         <div className={styles.rangeContainer}>
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
         <span>{formatTime(duration)}</span>
         </div>
           
        
      </LessonLayout>
    </>
  );
};

export default AudioLessonLayout
