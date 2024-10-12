import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import styles from "./ParticipantView.module.scss";

export default function ParticipantView(props) {
  //Callback for when the participant starts a stream
  function onStreamEnabled(stream) {
    if (stream.kind === "share") {
      console.log("Share Stream On: onStreamEnabled", stream);
    }
  }

  //Callback for when the participant stops a stream
  function onStreamDisabled(stream) {
    if (stream.kind === "share") {
      console.log("Share Stream Off: onStreamDisabled", stream);
    }
  }
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(props.participantId, {
      onStreamEnabled,
      onStreamDisabled,
    });

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: !isLocal ? "column" : "row",
        gap: "10px",
      }}
    >
      {isLocal && (
        <div className={styles.controlIndicators}>
          <span>
            Участник: <span className={styles.name}>{displayName}</span>
          </span>
          <span>
            Камера:{" "}
            {webcamOn ? (
              <span className={styles.green}>Включена</span>
            ) : (
              <span className={styles.red}>Выключена</span>
            )}
          </span>
          <span>
            Микрофон:{" "}
            {micOn ? (
              <span className={styles.green}>Включен</span>
            ) : (
              <span className={styles.red}>Выключен</span>
            )}
          </span>
        </div>
      )}

      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn && props.presenterId !== props.participantId && (
        <ReactPlayer
          //
          playsinline // extremely crucial prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          //
          url={videoStream}
          className={`${!isLocal ? styles.otherPlayer : styles.localPlayer} ${
            styles.mirror
          }`}
          //
          height={!isLocal && !props.isTeacherSide ? "70%" : "20%"}
          width={!isLocal && !props.isTeacherSide ? "100%" : "20%"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
}
