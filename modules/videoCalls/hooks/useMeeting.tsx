import { getAuthToken } from "@/modules/study/withTeacher/student-side/shared/api/getAuthToken";
import { useEffect, useState } from "react";
import { createMeeting } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import {
  setMeetingId,
  setAuthToken,
} from "../../../store/videoConference/videoConferenceSlice";
import { useRouter } from "next/router";

export const useMeeting = () => {
  //   const [meetingId, setMeetingId] = useState(null);
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.videoConference.authToken);
  //   const [authToken, setAuthToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAuthToken = async () => {
      const tokenRes = await getAuthToken();
      dispatch(setAuthToken(tokenRes?.data?.token));
    };

    fetchAuthToken();
  }, []);

  const getMeetingAndToken = async (id, lessonId) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    dispatch(setMeetingId(meetingId));
    router.push(`/video-call/${lessonId}`);
  };

  return { getMeetingAndToken };
};
