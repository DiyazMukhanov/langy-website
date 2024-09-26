import styles from "./TeacherSchedule.module.scss";
import { useContext, useState } from "react";
import { Table } from "@/ui-kit/Table/Table";
import { TableHead } from "@/ui-kit/Table/TableHead";
import { TableCell } from "@/ui-kit/Table/TableCell";
import { TableBody } from "@/ui-kit/Table/TableBody";
import { TableRow } from "@/ui-kit/Table/TableRow";
import { getDateInGmtFive } from "@/utils/getDateGmt";
import { getNextWeekDays } from "@/utils/getNextWeekDays";
import { getCurrentWeekDays } from "@/utils/getCurrentWeekDays";
import { UserContext } from "@/store/userContext";

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
  publishLesson: (ids: string[]) => void;
  unpublishLesson: (ids: string[]) => void;
  week: string;
};

export default function TeacherScheduleComponent({
  data,
  publishLesson,
  unpublishLesson,
  week,
}: Props) {
  const userCtx = useContext(UserContext);
  const userId = userCtx?.userData?._id;

  const weekDays: any[] =
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
      <Table style={{ width: "100%" }}>
        <TableHead style={{ width: "100%" }}>
          {weekDays.map((day) => (
            <TableCell style={{ width: "auto" }}>
              <div>{day.day}</div>
              <div>{day.date}</div>
            </TableCell>
          ))}
        </TableHead>
        <TableBody style={{ width: "100%" }}>
          {rows.map((row) => (
            <TableRow style={{ width: "auto" }}>
              <TableCell style={{ width: "auto" }}>{row.time}</TableCell>
              {days.map((weekDay) => (
                <TableCell style={{ width: "auto" }}>
                  <div>{row[weekDay]?.bookedBy}</div>
                  <div>
                    {row[weekDay]?.isPublished &&
                      row[weekDay].bookedBy === null && (
                        <div className={styles.openedBlock}>
                          <span className={styles.green}>Урок открыт</span>
                          <span
                            className={styles.blue}
                            onClick={() => unpublishLesson([row[weekDay]?._id])}
                          >
                            Закрыть для брони
                          </span>
                        </div>
                      )}
                    {row[weekDay]?.bookedBy && (
                      <span className={styles.booked}>Урок забронирован</span>
                    )}
                    {!row[weekDay]?.isPublished && (
                      <span
                        className={styles.pointer}
                        onClick={() => publishLesson([row[weekDay]?._id])}
                      >
                        Открыть для брони
                      </span>
                    )}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
