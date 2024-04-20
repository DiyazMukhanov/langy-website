import { useQuery } from "@tanstack/react-query";
import { getTeacherFutureLessons } from "../shared/api/gteTeacherFutureLessons";
import { TeacherLayout } from "../shared/components/TeacherLayout";
import { Lesson } from "../../student-side/shared/types/lesson";
import { getDateAndTime } from "@/utils/getDateAndTime";
import styles from "./TeacherFutureLessons.module.scss";
import { Button } from "@/ui-kit/Button";

export default function TeacherFutureLessons() {
  const { isPending, error, data } = useQuery({
    queryKey: ["teacherFutureLessons"],
    queryFn: getTeacherFutureLessons,
  });

  if (isPending) return "Получаем список предстоящих уроков...";

  if (error) return "Oooops перезагрузите...";

  return (
    <TeacherLayout>
      <h3 className={styles.heading}>Мои предстоящие уроки</h3>
      <div className={styles.futureLessonsContainer}>
        {data?.data?.data.map((lesson: Lesson) => (
          <div className={styles.lessonBlock}>
            <div>{getDateAndTime(lesson.lessonDate).time}</div>
            <Button variant="newStandardNextOutlined">Войти в урок</Button>
          </div>
        ))}
      </div>
    </TeacherLayout>
  );
}
