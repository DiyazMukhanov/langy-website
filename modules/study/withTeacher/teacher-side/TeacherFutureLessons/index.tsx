import { useQuery } from "@tanstack/react-query";
import { getTeacherFutureLessons } from "../shared/api/gteTeacherFutureLessons";
import { TeacherLayout } from "../shared/components/TeacherLayout";
import { Lesson } from "../../student-side/shared/types/lesson";
import { getDateAndTime } from "@/utils/getDateAndTime";
import styles from "./TeacherFutureLessons.module.scss";
import { Button } from "@/ui-kit/Button";
import { useTeacherLessons } from "../shared/hooks/useTeacherLessons";
import { useMeeting } from "@/modules/videoCalls/hooks/useMeeting";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setIsTeacherSide } from "@/store/videoConference/videoConferenceSlice";

export default function TeacherFutureLessons() {
  const { isPending, error, data } = useQuery({
    queryKey: ["teacherFutureLessons"],
    queryFn: getTeacherFutureLessons,
    refetchInterval: 10000,
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const [lessonIdToUpdate, setLessonIdToUpdate] = useState(null);

  const { updateLessonHandler, updateMutationLoading, updateMutationError } =
    useTeacherLessons("current");

  const meetingId = useSelector((state) => state.videoConference.meetingId);

  const { getMeetingAndToken } = useMeeting();

  useEffect(() => {
    dispatch(setIsTeacherSide(true));
  }, []);

  // When meetingId is available, update the lesson
  useEffect(() => {
    if (lessonIdToUpdate && meetingId !== null) {
      updateLessonHandler(lessonIdToUpdate, {
        meetingId,
      });
      setLessonIdToUpdate(null); // Reset the state after updating
    }
  }, [meetingId]);

  const createOrJoinMeetingHandler = async (lessonId, lessonMeetingId) => {
    if (!lessonMeetingId) {
      setLessonIdToUpdate(lessonId);
      await getMeetingAndToken(lessonMeetingId, lessonId);
    } else {
      await getMeetingAndToken(lessonMeetingId, lessonId);
    }
  };

  if (isPending) return "Получаем список предстоящих уроков...";

  if (error) return "Oooops перезагрузите...";

  if (updateMutationError)
    return "Ошибка создания митинга. Перезагрузите страницу и попробуйте снова";

  return (
    <TeacherLayout>
      <h3 className={styles.heading}>Мои предстоящие уроки</h3>
      <div className={styles.futureLessonsContainer}>
        {data?.data?.data.map((lesson: Lesson) => (
          <div className={styles.lessonBlock}>
            <div>{getDateAndTime(lesson.lessonDate).date}</div>
            <div>{getDateAndTime(lesson.lessonDate).time}</div>
            <span>Студент: {lesson.studentName}</span>
            <span>Email студента: {lesson.studentEmail}</span>
            <span>Meeting ID: {lesson.meetingId}</span>
            <Button
              variant="newStandardNextOutlined"
              onClick={() =>
                createOrJoinMeetingHandler(lesson._id, lesson.meetingId)
              }
              disabled={updateMutationLoading}
            >
              Войти в урок
            </Button>
          </div>
        ))}
      </div>
    </TeacherLayout>
  );
}
