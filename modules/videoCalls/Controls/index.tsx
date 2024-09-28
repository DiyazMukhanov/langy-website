import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import styles from "./Controls.module.scss";
import MicOn from "./../../../public/icons/MicOn.svg";
import MicOff from "./../../../public/icons/MicOff.svg";
import VideoOn from "./../../../public/icons/VideoOn.svg";
import VideoOff from "./../../../public/icons/VideoOff.svg";
import ShareScreenOff from "./../../../public/icons/ShareScreenOff.svg";
import ShareScreenOn from "./../../../public/icons/ShareScreenOn.svg";
import { useRouter } from "next/router";

export default function Controls({ isTeacherSide, participantId }) {
  const { leave, toggleMic, toggleWebcam, toggleScreenShare } = useMeeting();
  const { micOn, webcamOn, screenShareOn } = useParticipant(participantId);
  const router = useRouter();

  const handleToggleMic = () => {
    toggleMic();
  };

  const handleToggleVideo = () => {
    toggleWebcam();
  };

  const handleScreenSharing = () => {
    toggleScreenShare();
  };

  const leaveHandler = () => {
    leave();

    if (isTeacherSide) {
      router.push(`/with-teachers/teacher-future-lessons`);
    } else {
      router.push(`/with-teachers/my-lessons`);
    }
  };

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={leaveHandler} className={styles.exitButton}>
        Выйти
      </button>
      <button onClick={handleToggleMic} className={styles.controlButton}>
        {micOn ? <MicOn /> : <MicOff />}
      </button>
      <button onClick={handleToggleVideo} className={styles.controlButton}>
        {webcamOn ? <VideoOn /> : <VideoOff />}
      </button>
      {isTeacherSide && (
        <button onClick={handleScreenSharing} className={styles.controlButton}>
          {screenShareOn ? <ShareScreenOn /> : <ShareScreenOff />}
        </button>
      )}
    </div>
  );
}
