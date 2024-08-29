import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import MeetingView from "../MeetingView";
import { createMeeting } from "../API/api";
import JoinScreen from "../JoinScreen";
import { getAuthToken } from "@/modules/study/withTeacher/student-side/shared/api/getAuthToken";

const VideoCall = () => {
  const [meetingId, setMeetingId] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchAuthToken = async () => {
      const tokenRes = await getAuthToken();
      setAuthToken(tokenRes?.data?.token);
      setLoading(false);
    };

    fetchAuthToken();
  }, []);

  //Getting the meeting id by calling the api we just wrote
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading screen while fetching token
  }

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
};

// f6lq-gjez-qmu3

export default VideoCall;
