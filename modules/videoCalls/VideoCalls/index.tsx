import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import MeetingView from "../MeetingView/index";
import { createMeeting } from "../API/api";
import JoinScreen from "../JoinScreen";
import { getAuthToken } from "@/modules/study/withTeacher/student-side/shared/api/getAuthToken";
import { useDispatch, useSelector } from "react-redux";
import { setMeetingId } from "../../../store/videoConference/videoConferenceSlice";

const VideoCall = () => {
  const dispatch = useDispatch();
  const meetingId = useSelector((state) => state.videoConference.meetingId);
  const authToken = useSelector((state) => state.videoConference.authToken);
  const isTeacherSide = useSelector(
    (state) => state.videoConference.isTeacherSide
  );
  console.log(meetingId);
  console.log(authToken);
  //   const [authToken, setAuthToken] = useState(null);
  //   const [loading, setLoading] = useState(true); // State to manage loading

  //   useEffect(() => {
  //     const fetchAuthToken = async () => {
  //       const tokenRes = await getAuthToken();
  //       setAuthToken(tokenRes?.data?.token);
  //       setLoading(false);
  //     };

  //     fetchAuthToken();
  //   }, []);

  //   //Getting the meeting id by calling the api we just wrote
  //   const getMeetingAndToken = async (id) => {
  //     const meetingId =
  //       id == null ? await createMeeting({ token: authToken }) : id;
  //     setMeetingId(meetingId);
  //   };

  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    dispatch(setMeetingId(null));
  };

  //   if (loading) {
  //     return <div>Loading...</div>; // Show loading screen while fetching token
  //   }

  return (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
      }}
      token={authToken}
    >
      <MeetingView
        meetingId={meetingId}
        onMeetingLeave={onMeetingLeave}
        isTeacherSide={isTeacherSide}
      />
    </MeetingProvider>
  );
};

// f6lq-gjez-qmu3

export default VideoCall;
