import { getDateAndTime } from "@/utils/getDateAndTime";
import styles from "./LessonCard.module.scss";
import { Button } from "@/ui-kit/Button";
import { useRouter } from "next/router";
import classNames from "classnames";
import { useMeeting } from "@/modules/videoCalls/hooks/useMeeting";

export const LessonCard = ({
  dateStr,
  lessonId,
  bookPending,
  isBooked,
  bookNewLesson,
  cancelLesson,
  cancelPending,
  lessonsPackage,
  bookedBy,
  meetingId,
  isToday,
}) => {
  const { date, time } = getDateAndTime(dateStr);
  const router = useRouter();

  const { getMeetingAndToken } = useMeeting();
  const createOrJoinMeetingHandler = async (lessonMeetingId, lessonId) => {
    if (!lessonMeetingId) {
      alert("Учитель еще не вошел в урок, попробуйте войти позже");
      return;
    }
    await getMeetingAndToken(lessonMeetingId, lessonId);
  };

  return (
    <div className={styles.lessonContainer}>
      <div className={styles.dateTimeBlock}>
        <div>
          Дата урока: <span className={styles.dateTime}>{date}</span>
        </div>
        <div>
          Время урока: <span className={styles.dateTime}>{time}</span>
        </div>
      </div>
      {isBooked && (
        <div className={styles.enterCancelBlock}>
          <Button
            variant="teachers"
            className={classNames(styles.bookBtn, styles.enterBtn)}
            disabled={cancelPending}
            onClick={() => createOrJoinMeetingHandler(meetingId, lessonId)}
          >
            Войти в урок
          </Button>
          <Button
            variant="teachers"
            className={classNames(styles.bookBtn, styles.cancelBtn)}
            disabled={cancelPending}
            onClick={() => cancelLesson(lessonId)}
          >
            Отменить урок
          </Button>
        </div>
      )}
      {!isBooked && lessonsPackage > 0 && bookedBy === null && !isToday && (
        <Button
          variant="teachers"
          className={styles.bookBtn}
          onClick={() => bookNewLesson(lessonId)}
          disabled={bookPending}
        >
          Забронировать урок
        </Button>
      )}

      {!isBooked && lessonsPackage < 1 && !isToday && (
        <Button
          variant="teachers"
          className={styles.bookBtn}
          onClick={() => router.push("/with-teachers/buy-lessons")}
          disabled={bookPending}
        >
          Забронировать урок
        </Button>
      )}
    </div>
  );
};
