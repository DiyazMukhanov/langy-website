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

const timeSlots: any[] = [];
for (let hour = 9; hour <= 20; hour++) {
  let startTime = hour.toString().padStart(2, "0") + ":00";
  let endTime = hour.toString().padStart(2, "0") + ":45";
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
};

export default function Schedule({
  data,
  bookNewLesson,
  cancelLesson,
  week,
}: Props) {
  const userCtx = useContext(UserContext);
  const router = useRouter();
  const userId = userCtx?.userData?._id;
  const [bookConfirmationShow, setBookConfirmationShow] = useState(false);

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
      if (hour >= 9 && hour <= 20) {
        const timeSlotIndex = hour - 9;
        const dayKey = weekdays[weekday];
        if (!rows[timeSlotIndex][dayKey]) {
          rows[timeSlotIndex][dayKey] = lesson;
        }
      }
    });
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

      <Table style={{ width: "100%" }}>
        <TableHead style={{ width: "100%" }}>
          {weekDays.map((day, index) => (
            <TableCell style={{ width: "auto" }} key={index}>
              <div>{day.day}</div>
              <div>{day.date}</div>
            </TableCell>
          ))}
        </TableHead>
        <TableBody style={{ width: "100%" }}>
          {rows.map((row, index) => (
            <TableRow style={{ width: "auto" }} key={index}>
              <TableCell style={{ width: "auto" }}>{row.time}</TableCell>
              {days.map((weekDay, index) => (
                <TableCell style={{ width: "auto" }} key={index}>
                  {row[weekDay] &&
                    row[weekDay].bookedBy === null &&
                    !lessonTimeStatus(row[weekDay].lessonDate).isToday &&
                    !lessonTimeStatus(row[weekDay].lessonDate)
                      .alreadyFinished &&
                    bookNewLesson &&
                    lessonsPackage > 0 && (
                      <span onClick={() => bookNewLesson(row[weekDay]._id)}>
                        Забронировать
                      </span>
                    )}
                  {row[weekDay] &&
                    row[weekDay].bookedBy === null &&
                    !lessonTimeStatus(row[weekDay].lessonDate).isToday &&
                    !lessonTimeStatus(row[weekDay].lessonDate)
                      .alreadyFinished &&
                    bookNewLesson &&
                    lessonsPackage < 1 && (
                      <span
                        onClick={() =>
                          router.push("/with-teachers/buy-lessons")
                        }
                      >
                        Пополните уроки
                      </span>
                    )}
                  {row[weekDay] && row[weekDay].bookedBy === userId && (
                    <div className={styles.myLessonBlock}>
                      <span>{row[weekDay]._id}</span>
                      {lessonTimeStatus(row[weekDay].lessonDate)
                        .alreadyFinished ? (
                        <span>Прошедший урок</span>
                      ) : (
                        <span>Мой урок</span>
                      )}
                      {!lessonTimeStatus(row[weekDay].lessonDate).isToday &&
                        !lessonTimeStatus(row[weekDay].lessonDate)
                          .alreadyFinished &&
                        cancelLesson && (
                          <span onClick={() => cancelLesson(row[weekDay]._id)}>
                            Отменить урок
                          </span>
                        )}
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
