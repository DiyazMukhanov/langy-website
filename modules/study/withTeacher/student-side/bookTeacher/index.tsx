import WithTeachersLayout from "../shared/withTeachersLayout";
import Schedule from "./Schedule";
import { useState } from "react";
import { Button } from "@/ui-kit/Button";
import styles from "./BookTeacher.module.scss";
import { useLessons } from "../shared/hooks/useLessons";
import classNames from "classnames";

export default function BookTeacher() {
  const [week, setWeek] = useState("current");

  const { isPending, error, data, bookNewLesson, cancelLesson } =
    useLessons(week);

  if (isPending) return "Loading...";

  if (error) return "OOOPs, попробуйте еще раз...";

  return (
    <WithTeachersLayout>
      <div className={styles.buttons}>
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
      </div>
      <Schedule
        data={data?.data?.data}
        bookNewLesson={bookNewLesson}
        cancelLesson={cancelLesson}
        week={week}
      />
    </WithTeachersLayout>
  );
}
