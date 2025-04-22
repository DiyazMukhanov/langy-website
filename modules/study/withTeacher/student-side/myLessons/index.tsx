import { getDateAndTime } from "@/utils/getDateAndTime";
import { useStudentLessons } from "../shared/hooks/useStudentLessons";
import WithTeachersLayout from "../shared/withTeachersLayout";
import styles from "./myLessons.module.scss";
import Clock from "public/icons/clock.svg";
import Calendar from "public/icons/calendar.svg";
import Image from "next/image";
import { useMeeting } from "@/modules/videoCalls/hooks/useMeeting";
import { lessonTimeStatus } from "@/utils/lessonTimeStatus";
import { useLessons } from "../shared/hooks/useLessons";

export default function MyLessons() {
  const { isPending, error, data } = useStudentLessons();
  const { cancelLesson } = useLessons("current");
  const { getMeetingAndToken } = useMeeting();
  const createOrJoinMeetingHandler = async (lessonMeetingId, lessonId) => {
    if (!lessonMeetingId) {
      alert("Учитель еще не вошел в урок, попробуйте войти позже");
      return;
    }
    await getMeetingAndToken(lessonMeetingId, lessonId);
  };

  if (isPending) return "Loading...";

  if (error) {
    return (
      <WithTeachersLayout tabName="plannedLessons">
        <>"Ooops, ошибка загрузки уроков"</>
      </WithTeachersLayout>
    );
  }

  if (data?.data?.data?.length < 1) {
    return (
      <WithTeachersLayout tabName="plannedLessons">
        <div className={styles.noLessons}>У вас нет запланированных уроков</div>
      </WithTeachersLayout>
    );
  }

  const cancelLessonHandler = (lessonId: string) => {
    if (confirm("Вы точно хотите отменить урок?")) {
      cancelLesson(lessonId);
    }
  };

  return (
    <WithTeachersLayout tabName="plannedLessons">
      <div className={styles.lessonsContainer}>
        {data?.data.data.map((lesson) => (
          <div className={styles.lessonBlock}>
            <div className={styles.dateTimeBlock}>
              <div className={styles.dateTimeContainer}>
                {/* <Image alt="clock" priority src={Clock} /> */}
                <Clock />
                <span>{getDateAndTime(lesson.lessonDate).date}</span>
              </div>
              <div className={styles.dateTimeContainer}>
                {/* <Image alt="clock" priority src={Calendar} /> */}
                <Calendar />
                <span>{getDateAndTime(lesson.lessonDate).time}</span>

                {/* <span>{lesson.meetingId}</span> */}
              </div>
              <span>{lesson?.teacherName}</span>
            </div>
            <button
              className={styles.enterBtn}
              onClick={() =>
                createOrJoinMeetingHandler(lesson.meetingId, lesson?._id)
              }
            >
              Войти в урок
            </button>
            {!lessonTimeStatus(lesson?.lessonDate).isToday && (
              <button
                onClick={() => cancelLessonHandler(lesson?._id)}
                className={styles.cancelBtn}
              >
                Отменить урок
              </button>
            )}
          </div>
        ))}
      </div>
    </WithTeachersLayout>
  );
}
