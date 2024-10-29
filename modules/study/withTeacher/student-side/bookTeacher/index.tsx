import WithTeachersLayout from "../shared/withTeachersLayout";
import Schedule from "./Schedule";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/ui-kit/Button";
import styles from "./BookTeacher.module.scss";
import { useLessons } from "../shared/hooks/useLessons";
import classNames from "classnames";
import { ProgressLessonCard } from "../studentProgress/ProgressLessonCard";
import { LessonCard } from "./LessonCard";
import { UserContext } from "@/store/userContext";
import { lessonTimeStatus } from "@/utils/lessonTimeStatus";
import { useSelector } from "react-redux";

export default function BookTeacher() {
  const [week, setWeek] = useState("next");
  const lessonsPackage = useSelector((state: any) => state.package.package);

  const {
    isPending,
    error,
    data,
    bookNewLesson,
    bookPending,
    cancelLesson,
    cancelPending,
  } = useLessons(week);
  const userCtx = useContext(UserContext);
  const userId = userCtx?.userData?._id;

  // Store the current URL when the component is mounted
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("previousUrl", window.location.href); // Store the current URL
    }
  }, []); // Runs only on component mount

  if (bookPending) return "Идет бронирование...";

  if (cancelPending) return "Идет отмена...";

  if (isPending) return "Loading...";

  if (error) return "OOOPs, попробуйте еще раз...";

  return (
    <WithTeachersLayout>
      {/* <div className={styles.buttons}>
        <Button
          variant="standardMiddleOutlined"
          onClick={() => setWeek("current")}
          className={classNames(
            { [styles.notActualWeekBtn]: week === "next" },
            styles.weekBtn
          )}
        >
          Эта неделя
        </Button>
        <Button
          variant="standardMiddleOutlined"
          onClick={() => setWeek("next")}
          className={classNames(
            { [styles.notActualWeekBtn]: week === "current" },
            styles.weekBtn
          )}
        >
          Следующая неделя
        </Button>
      </div> */}
      {/* <Schedule
        data={data?.data?.data}
        bookNewLesson={bookNewLesson}
        cancelLesson={cancelLesson}
        week={week}
        isPending={isPending}
        bookPending={bookPending}
        cancelPending={cancelPending}
      /> */}
      <div className={styles.lessonsContainer}>
        {data?.data?.data.map((lesson) => (
          <LessonCard
            dateStr={lesson?.lessonDate}
            lessonId={lesson?._id}
            bookPending={bookPending}
            isBooked={userId === lesson.bookedBy}
            bookNewLesson={bookNewLesson}
            cancelLesson={cancelLesson}
            cancelPending={cancelPending}
            lessonsPackage={lessonsPackage}
            bookedBy={lesson.bookedBy}
            meetingId={lesson?.meetingId}
            isToday={lesson?.isToday}
          ></LessonCard>
        ))}
      </div>
    </WithTeachersLayout>
  );
}
