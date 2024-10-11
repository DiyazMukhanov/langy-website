import styles from "./Schedule.module.scss";
import { useContext, useState } from "react";
import { Modal } from "@/ui-kit/ModalCommon";
import Confirm from "../Confirm";
import { Table } from "@/ui-kit/Table/Table";
import { TableHead } from "@/ui-kit/Table/TableHead";
import { TableCell } from "@/ui-kit/Table/TableCell";
import { TableBody } from "@/ui-kit/Table/TableBody";
import { TableRow } from "@/ui-kit/Table/TableRow";
import { getDateInGmtFive } from "@/utils/getDateGmt";
import { getNextWeekDays } from "@/utils/getNextWeekDays";
import { getCurrentWeekDays } from "@/utils/getCurrentWeekDays";
import { lessonTimeStatus } from "@/utils/lessonTimeStatus";
import { UserContext } from "@/store/userContext";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useMeeting } from "@/modules/videoCalls/hooks/useMeeting";

const timeSlots: any[] = [];
for (let hour = 9; hour <= 23; hour++) {
  let startTime = hour.toString().padStart(2, "0") + ":00";
  let endTime = hour.toString().padStart(2, "0") + ":25";
  timeSlots.push(`${startTime} - ${endTime}`);
}

const weekdays = [
  "sundayLesson",
  "mondayLesson",
  "tuesdayLesson",
  "wednesdayLesson",
  "thursdayLesson",
  "fridayLesson",
  "saturdayLesson",
];

const days = [
  "mondayLesson",
  "tuesdayLesson",
  "wednesdayLesson",
  "thursdayLesson",
  "fridayLesson",
  "saturdayLesson",
  "sundayLesson",
];

type Lesson = {
  _id: string;
  teacherId: string;
  bookedBy: boolean;
  isCanceled: boolean;
  isPublished: boolean;
  lessonDate: string;
  studentProgress: number;
  timeMilliseconds: number;
  weekStatus: string;
};

type Props = {
  data: Lesson[];
  bookNewLesson?: (id: string) => void;
  cancelLesson?: (id: string) => void;
  week: string;
  isPending: boolean;
  bookPending: boolean;
  cancelPending: boolean;
};

export default function Schedule({
  data,
  bookNewLesson,
  cancelLesson,
  week,
  isPending,
  bookPending,
  cancelPending,
}: Props) {
  const userCtx = useContext(UserContext);
  const router = useRouter();
  const userId = userCtx?.userData?._id;
  const usedTrialLesson = userCtx?.userData?.usedTrialLesson;

  const [bookConfirmationShow, setBookConfirmationShow] = useState(false);

  const { getMeetingAndToken } = useMeeting();
  const createOrJoinMeetingHandler = async (lessonMeetingId, lessonId) => {
    if (!lessonMeetingId) {
      alert("Учитель еще не вошел в урок, попробуйте войти позже");
      return;
    }
    await getMeetingAndToken(lessonMeetingId, lessonId);
  };

  const lessonsPackage = useSelector((state: any) => state.package.package);

  const weekDays =
    week === "current" ? getCurrentWeekDays() : getNextWeekDays();
  weekDays.unshift({ day: "Время", date: "урока" });

  const rows = timeSlots.map((time) => ({
    time: time,
    mondayLesson: null,
    tuesdayLesson: null,
    wednesdayLesson: null,
    thursdayLesson: null,
    fridayLesson: null,
    saturdayLesson: null,
    sundayLesson: null,
  }));

  if (data) {
    data.forEach((lesson: Lesson) => {
      const { weekday, hour } = getDateInGmtFive(lesson.lessonDate);
      if (hour >= 9 && hour <= 23) {
        const timeSlotIndex = hour - 9;
        const dayKey = weekdays[weekday];
        if (!rows[timeSlotIndex][dayKey]) {
          rows[timeSlotIndex][dayKey] = lesson;
        }
      }
    });
  }

  if (bookPending) {
    return (
      <div style={{ margin: "30px" }}>
        Идет бронирование. Подождите немного...
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Modal
        className={styles.confirm}
        isOpened={bookConfirmationShow}
        onClose={() => setBookConfirmationShow(false)}
      >
        <Confirm />
      </Modal>

      <Table style={{ width: "100%", borderCollapse: "collapse" }}>
        <TableHead style={{ width: "100%", border: "none" }}>
          {weekDays.map((day, index) => (
            <TableCell
              style={{
                width: "auto",
                border: "none",
                borderBottom: "solid #EAECF0 1px",
              }}
              key={index}
            >
              <div className={styles.timeHeadContainer}>
                <div className={styles.greyColor}>{day.day}</div>
                <div className={styles.greyColor}>{day.date}</div>
              </div>
            </TableCell>
          ))}
        </TableHead>
        <TableBody style={{ width: "100%" }}>
          {rows.map((row, index) => (
            <TableRow style={{ width: "auto", border: "none" }} key={index}>
              <TableCell
                style={{
                  width: "auto",
                  border: "none",
                  borderBottom: "solid #EAECF0 1px",
                  color: "#101828",
                  fontWeight: 500,
                }}
              >
                {row.time}
              </TableCell>
              {days.map((weekDay, index) => (
                <TableCell
                  style={{
                    width: "auto",
                    border: "none",
                    borderBottom: "solid #EAECF0 1px",
                  }}
                  key={index}
                >
                  {row[weekDay] &&
                    row[weekDay].bookedBy === null &&
                    !lessonTimeStatus(row[weekDay].lessonDate).isToday &&
                    !lessonTimeStatus(row[weekDay].lessonDate)
                      .alreadyFinished &&
                    bookNewLesson &&
                    lessonsPackage > 0 &&
                    !bookPending && (
                      <button
                        onClick={() => bookNewLesson(row[weekDay]._id)}
                        className={styles.bookLessonLink}
                      >
                        Забронировать урок
                      </button>
                    )}
                  {row[weekDay] &&
                    row[weekDay].bookedBy === null &&
                    !lessonTimeStatus(row[weekDay].lessonDate).isToday &&
                    !lessonTimeStatus(row[weekDay].lessonDate)
                      .alreadyFinished &&
                    bookNewLesson &&
                    lessonsPackage < 1 && (
                      <button
                        className={styles.enterLessonLink}
                        onClick={() =>
                          router.push("/with-teachers/buy-lessons")
                        }
                      >
                        {!usedTrialLesson ? "Свободно" : "Свободно"}
                      </button>
                    )}
                  {row[weekDay] && row[weekDay].bookedBy === userId && (
                    <div className={styles.myLessonBlock}>
                      {lessonTimeStatus(row[weekDay].lessonDate)
                        .alreadyFinished ? (
                        <span>Прошедший урок</span>
                      ) : (
                        <button
                          className={styles.enterLessonLink}
                          onClick={() =>
                            createOrJoinMeetingHandler(
                              row[weekDay].meetingId,
                              row[weekDay]._id
                            )
                          }
                        >
                          Войти в урок
                        </button>
                      )}
                      {!lessonTimeStatus(row[weekDay].lessonDate).isToday &&
                        !lessonTimeStatus(row[weekDay].lessonDate)
                          .alreadyFinished &&
                        cancelLesson &&
                        !cancelPending && (
                          <button
                            onClick={() => cancelLesson(row[weekDay]._id)}
                            className={styles.cancelLessonLink}
                          >
                            Отменить урок
                          </button>
                        )}
                      {cancelPending && <span>Подождите...</span>}
                    </div>
                  )}
                  {!row[weekDay] && <span>-</span>}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
