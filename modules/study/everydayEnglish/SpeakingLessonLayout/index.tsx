import { useIterate } from "../../shared/hooks/useIterate";
import EverydayEnglishContainer from "../shared/EverydayEnglishContainer";
import styles from "./SpeakingLessonLayout.module.scss";
import { useEffect, useRef, useState } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";
import classNames from "classnames";
import Image from "next/image";
import Microphone from "./../../../../public/images/microphone.png";
import Play from "./../../../../public/images/Play.svg";
import { Button } from "@/ui-kit/Button";
import { Speaking } from "./types/Speaking";
import Mic from "./../../../../public/icons/mic.svg";

type Props = {
  speakingQuestions: Speaking[];
};

export default function SpeakingLessonLayout({ speakingQuestions }: Props) {
  const { iteration, updateIteration } = useIterate(speakingQuestions);
  const [neededQuestionBlock, setNeededQuestionBlock] = useState([
    speakingQuestions[0],
  ]);
  const [audioUrl, setAudioUrl] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const audioRef = useRef(null);
  const { startRecording, stopRecording, isRecording, recordingBlob } =
    useAudioRecorder();

  const stopRecordingHandler = () => {
    stopRecording();
  };

  const startRecordingHandler = () => {
    startRecording();
  };

  function play() {
    audioRef.current.play();
  }

  const checkHandler = () => {
    setShowAnswer(true);
  };

  useEffect(() => {
    if (recordingBlob) {
      const url = URL.createObjectURL(recordingBlob);
      setAudioUrl(url);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      audioRef.current = new Audio(url);
    }
  }, [recordingBlob]);

  useEffect(() => {
    const neededBlock = speakingQuestions.filter(
      (item) => item.iteration === iteration
    );
    setNeededQuestionBlock(neededBlock);

    setShowAnswer(false);
  }, [iteration]);

  return (
    <EverydayEnglishContainer className={styles.internalLayout}>
      <h1 className={styles.h1}>Произнесите на английском:</h1>
      <div className={styles.questionBlock}>
        <span className={styles.questionText}>
          {neededQuestionBlock[0].question}
        </span>
        {!isRecording ? (
          <button className={styles.recBtn} onClick={startRecordingHandler}>
            <Mic />
            <span className={styles.btnText}>Нажмите, чтобы сказать</span>
          </button>
        ) : (
          <div className={classNames(styles.isRecording, styles.circle)}></div>
        )}
        {isRecording && (
          <button onClick={stopRecordingHandler} className={styles.recBtn}>
            <span className={styles.btnText}>Остановить запись</span>
          </button>
        )}
        {audioUrl ? <Play onClick={play} /> : ""}
      </div>

      <div className={styles.recordingBlock}></div>
      {!showAnswer ? (
        <button className={styles.recBtn} onClick={checkHandler}>
          <span className={styles.btnText}>Проверить себя</span>
        </button>
      ) : (
        <span className={styles.showingAnswer}>
          {neededQuestionBlock[0].en}
        </span>
      )}

      <button onClick={updateIteration} className={styles.moreBtn}>
        Еще
      </button>
    </EverydayEnglishContainer>
  );
}
