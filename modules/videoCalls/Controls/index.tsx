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

export default function Controls({ isTeacherSide }) {
  const { leave, toggleMic, toggleWebcam, toggleScreenShare } = useMeeting();
  const [micActive, setMicActive] = useState(true);
  const [videoActive, setVideoActive] = useState(true);
  const [screenActive, setScreenActive] = useState(true);
  const router = useRouter();

  // Toggle mic and update icon state
  const handleToggleMic = () => {
    toggleMic();
    setMicActive((prev) => !prev);
  };

  const handleToggleVideo = () => {
    toggleWebcam();
    setVideoActive((prev) => !prev);
  };

  const handleScreenSharing = () => {
    toggleScreenShare();
    setScreenActive((prev) => !prev);
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
        {micActive ? <MicOn /> : <MicOff />}
      </button>
      <button onClick={handleToggleVideo} className={styles.controlButton}>
        {videoActive ? <VideoOn /> : <VideoOff />}
      </button>
      {isTeacherSide && (
        <button onClick={handleScreenSharing} className={styles.controlButton}>
          {screenActive ? <ShareScreenOn /> : <ShareScreenOff />}
        </button>
      )}
    </div>
  );
}
