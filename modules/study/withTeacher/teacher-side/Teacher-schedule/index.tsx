import { Button } from "@/ui-kit/Button";
import { TeacherLayout } from "../shared/components/TeacherLayout";
import styles from "./TeacherSchedule.module.scss";
import TeacherScheduleComponent from "../shared/components/TeacherScheduleComponent";
import { useState } from "react";
import { useTeacherLessons } from "../shared/hooks/useTeacherLessons";

export default function TeacherSchedule() {
  const [week, setWeek] = useState("current");
  const {
    isPending,
    error,
    data,
    publishLesson,
    unpublishLesson,
    createScheduleHandler,
  } = useTeacherLessons(week);

  if (isPending) return "Loading...";

  if (error) return "ooops, попробуйте перезагрузить страницу";

  return (
    <TeacherLayout>
      <div className={styles.container}>
        <div className={styles.top}>
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
        {data?.data?.data.length > 0 ? (
          <TeacherScheduleComponent
            week={week}
            data={data?.data?.data}
            publishLesson={publishLesson}
            unpublishLesson={unpublishLesson}
          />
        ) : (
          <p>
            У вас нет уроков на {week === "current" ? "этой" : "следующей"}{" "}
            неделе
          </p>
        )}
        {week === "next" && data?.data?.data.length < 1 && (
          <Button
            variant="newStandardNextContained"
            onClick={createScheduleHandler}
          >
            Создать расписание на следующую неделю
          </Button>
        )}
      </div>
    </TeacherLayout>
  );
}
