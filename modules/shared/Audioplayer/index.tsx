import {
  CSSProperties,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Pause from "../../../public/images/Pause.svg";
import Play from "../../../public/images/Play.svg";
import styles from "./Audioplayer.module.scss";

const Audioplayer = memo(function Audioplayer({
  audioSrc,
}: {
  audioSrc: string;
}) {
  const [hasWindow, setHasWindow] = useState<any>(false);
  const [isPlaying, setIsPlaying] = useState<any>(false);
  const [timeProgress, setTimeProgress] = useState<any>(0);
  const [duration, setDuration] = useState<any>(0);
  const playBackRate = 1;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const audioRef = useRef<any>();
  const progressBarRef = useRef<any>();
  const playAnimationRef = useRef<any>();

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  //Pause correction
  const progressUpdate = useCallback(() => {
    const currentTime = audioRef?.current?.currentTime;
    setTimeProgress(currentTime);
    if (
      progressBarRef !== null &&
      progressBarRef.current !== null &&
      progressBarRef.current
    ) {
      progressBarRef.current["value"] = currentTime;
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
        audioRef.current.playbackRate = playBackRate;
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
    if (progressBarRef !== null && progressBarRef.current !== null) {
      progressBarRef.current.value = currentTime;
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (hasWindow) {
      if (isPlaying) {
        audioRef?.current?.play();
        playAnimationRef.current = requestAnimationFrame(repeat);
        audioRef.current.playbackRate = playBackRate;
      } else {
        audioRef?.current?.pause();
        cancelAnimationFrame(playAnimationRef.current);
      }
    }
  }, [isPlaying, audioRef, repeat]);

  const onLoadedMetadata = () => {
    const seconds = audioRef?.current?.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <>
      {hasWindow && (
        <audio
          src={audioSrc}
          ref={audioRef}
          preload="metadata"
          onLoadedMetadata={onLoadedMetadata}
        />
      )}

      <div className={styles.progress}>
        <div className={styles.time}>
          <span>
            {formatTime(timeProgress)} / {formatTime(duration)}
          </span>
        </div>

        <div className={styles.rangeContainer}>
          {isPlaying ? (
            <Pause className={styles.play} onClick={togglePlayPause} />
          ) : (
            <Play className={styles.play} onClick={togglePlayPause} />
          )}
          <input
            type="range"
            className={styles.rangeSlider}
            ref={progressBarRef}
            onChange={handleProgressChange}
            style={
              {
                "--current-time": timeProgress,
                "--duration": duration,
              } as CSSProperties
            }
          />
        </div>
      </div>
    </>
  );
});

export default Audioplayer;
