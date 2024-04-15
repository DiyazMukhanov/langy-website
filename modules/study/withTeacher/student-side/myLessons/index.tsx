import { getDateAndTime } from "@/utils/getDateAndTime";
import { useStudentLessons } from "../shared/hooks/useStudentLessons";
import WithTeachersLayout from "../shared/withTeachersLayout";
import styles from "./myLessons.module.scss";
import { Button } from "@/ui-kit/Button";

export default function MyLessons() {
  const { isPending, error, data } = useStudentLessons();

  if (isPending) return "Loading...";

  return (
    <WithTeachersLayout>
      <div className={styles.lessonsContainer}>
        {data?.data.data.map((lesson) => (
          <div className={styles.lessonBlock}>
            <div>{getDateAndTime(lesson.lessonDate).date}</div>
            <div>{getDateAndTime(lesson.lessonDate).time}</div>
            <Button variant="teachers">Войти в урок</Button>
          </div>
        ))}
      </div>
    </WithTeachersLayout>
  );
}
