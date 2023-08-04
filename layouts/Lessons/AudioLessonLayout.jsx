// AudioPlayer.js
import React, { useState, useRef } from "react";
import LessonLayout from "./LessonLayout";
import {lessonsSummary} from '../../utils/lessonsSummary'
import styles from './AudioLessonLayout.module.scss'
import Pause from '../../public/images/Pause.svg'
import Image from 'next/image'

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const onTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    setCurrentTime(currentTime);
    setProgress((currentTime / duration) * 100);
  };

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const onProgressClick = (event) => {
    const progressBar = event.target;
    const newProgress = (event.nativeEvent.offsetX / progressBar.clientWidth) * 100;
    const newTime = (newProgress / 100) * duration;
    setProgress(newProgress);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const onSpeedChange = (speed) => {
    audioRef.current.playbackRate = speed;
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
    <LessonLayout lessonsSummary={lessonsSummary} chapter='audio'>
    <div className={styles.audioContainer}>
      <audio
        ref={audioRef}
        src="/audio/one.mp3"
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
      />
      <button onClick={toggleAudio}>{isPlaying ? "Pause" : "Play"}</button>
      <div>
        <div>
          <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
        </div>
        <progress
          value={progress}
          max="100"
          onClick={onProgressClick}
          style={{ cursor: "pointer" }}
        />
        <div>
          <button onClick={() => onSpeedChange(0.5)}>0.5x</button>
          <button onClick={() => onSpeedChange(1)}>1x</button>
          <button onClick={() => onSpeedChange(1.5)}>1.5x</button>
          <button onClick={() => onSpeedChange(2)}>2x</button>
        </div>
      </div>
    </div>
      <Image
        priority
        src={Pause}
        />
    </LessonLayout>
    </>
  );
};

export default AudioPlayer;
