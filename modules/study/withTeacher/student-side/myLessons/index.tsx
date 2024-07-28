import { getDateAndTime } from "@/utils/getDateAndTime";
import { useStudentLessons } from "../shared/hooks/useStudentLessons";
import WithTeachersLayout from "../shared/withTeachersLayout";
import styles from "./myLessons.module.scss";
import Clock from "public/icons/clock.svg";
import Calendar from "public/icons/calendar.svg";
import Image from "next/image";

export default function MyLessons() {
  const { isPending, error, data } = useStudentLessons();

  if (isPending) return "Loading...";

  return (
    <WithTeachersLayout tabName="plannedLessons">
      <div className={styles.lessonsContainer}>
        {data?.data.data.map((lesson) => (
          <div className={styles.lessonBlock}>
            <div className={styles.dateTimeBlock}>
              <div className={styles.dateTimeContainer}>
                <Image alt="clock" priority src={Clock} />
                <span>{getDateAndTime(lesson.lessonDate).date}</span>
              </div>
              <div className={styles.dateTimeContainer}>
                <Image alt="clock" priority src={Calendar} />
                <span>{getDateAndTime(lesson.lessonDate).time}</span>
              </div>
            </div>
            <button className={styles.enterBtn}>Войти в урок</button>
          </div>
        ))}
      </div>
    </WithTeachersLayout>
  );
}
