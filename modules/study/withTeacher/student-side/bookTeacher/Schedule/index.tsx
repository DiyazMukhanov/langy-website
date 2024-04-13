import styles from "./Schedule.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { Modal } from "@/ui-kit/ModalCommon";
import Confirm from "../Confirm";
import { Lesson } from "../../shared/types/lesson";
import { Table } from "@/ui-kit/Table/Table";
import { TableHead } from "@/ui-kit/Table/TableHead";
import { TableCell } from "@/ui-kit/Table/TableCell";
import { TableBody } from "@/ui-kit/Table/TableBody";
import { TableRow } from "@/ui-kit/Table/TableRow";
import { getDateInGmtFive } from "@/utils/getDateGmt";
import { getNextWeekDays } from "@/utils/getNextWeekDays";
import { useBookLesson } from "../../shared/hooks/useBookLesson";

const nextWeekDays = getNextWeekDays();
nextWeekDays.unshift({ day: "Время", date: "урока" });

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

export default function Schedule({ data }) {
  const [bookConfirmationShow, setBookConfirmationShow] = useState(false);
  // const [dataRows, setDataRows] = useState(rows)

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

  const { bookNewLesson } = useBookLesson();

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

  return (
    <div className={styles.container}>
      <Modal
        className={styles.confirm}
        isOpened={bookConfirmationShow}
        onClose={() => setBookConfirmationShow(false)}
      >
        <Confirm />
      </Modal>

      <Table>
        <TableHead>
          {nextWeekDays.map((day) => (
            <TableCell>
              <div>{day.day}</div>
              <div>{day.date}</div>
            </TableCell>
          ))}
        </TableHead>
        <TableBody style={{ width: "100%" }}>
          {rows.map((row) => (
            <TableRow>
              <TableCell>{row.time}</TableCell>
              {days.map((weekDay) => (
                <TableCell>
                  {row[weekDay] && row[weekDay].bookedBy === null && (
                    <span onClick={() => bookNewLesson(row[weekDay]._id)}>
                      Забронировать
                    </span>
                  )}
                  {row[weekDay] &&
                    row[weekDay].bookedBy === "64f9d97a45bb8347919f18fc" && (
                      <span>Ваш урок</span>
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
