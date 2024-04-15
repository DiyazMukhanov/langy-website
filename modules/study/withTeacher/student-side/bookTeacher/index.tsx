import { useQuery } from "@tanstack/react-query";
import { getScheduleAsStudent } from "../shared/api/getSchedule";
import WithTeachersLayout from "../shared/withTeachersLayout";
import Schedule from "./Schedule";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "@/ui-kit/Button";
import styles from "./BookTeacher.module.scss";
import { useLessons } from "../shared/hooks/useLessons";

export default function BookTeacher() {
  const [week, setWeek] = useState("current");

  const { isPending, error, data, bookNewLesson, cancelLesson } =
    useLessons(week);

  if (isPending) return "Loading...";

  return (
    <WithTeachersLayout>
      <div className={styles.buttons}>
        <Button
          variant="standardMiddleOutlined"
          onClick={() => setWeek("current")}
        >
          Эта неделя
        </Button>
        <Button
          variant="standardMiddleOutlined"
          onClick={() => setWeek("next")}
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
