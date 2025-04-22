import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
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
import { UserContext } from "@/store/userContext";
import { TeacherLayout } from "@/modules/study/withTeacher/teacher-side/shared/components/TeacherLayout";
import WithTeachersLayout from "@/modules/study/withTeacher/student-side/shared/withTeachersLayout";
import styles from "./VideoCalls.module.scss";
import { useRouter } from "next/router";

const VideoCall = () => {
  const dispatch = useDispatch();
  const meetingId = useSelector((state) => state.videoConference.meetingId);
  const authToken = useSelector((state) => state.videoConference.authToken);
  const userCtx = useContext(UserContext);

  const router = useRouter(); // Get the router object
  const { lessonId } = router.query; // Extract lessonId from the URL parameters

  const [loading, setLoading] = useState(true);
  const isTeacherSide = useSelector(
    (state) => state.videoConference.isTeacherSide
  );
  const teacher = useSelector((state: any) => state.teacher.teacherData);

  useEffect(() => {
    if (meetingId && authToken) {
      setLoading(false);
    }
  }, [meetingId, authToken]);

  const onMeetingLeave = () => {
    dispatch(setMeetingId(null));
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading screen while fetching token
  }

  return (
    <div className={styles.container}>
      <span>ID урока: {lessonId}</span>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: true,
          webcamEnabled: true,
          name: !isTeacherSide ? userCtx?.userData?.name : teacher?.name,
        }}
        token={authToken}
      >
        <MeetingView
          meetingId={meetingId}
          onMeetingLeave={onMeetingLeave}
          isTeacherSide={isTeacherSide}
        />
      </MeetingProvider>
    </div>
  );
};

// f6lq-gjez-qmu3

export default VideoCall;
