import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";

export default function Controls({ isTeacherSide }) {
  const { leave, toggleMic, toggleWebcam, toggleScreenShare } = useMeeting();
  return (
    <div>
      <button onClick={() => leave()}>Leave</button>
      <button onClick={() => toggleMic()}>toggleMic</button>
      <button onClick={() => toggleWebcam()}>toggleWebcam</button>
      {isTeacherSide && (
        <button onClick={() => toggleScreenShare()}>toggleScreenShare</button>
      )}
    </div>
  );
}
