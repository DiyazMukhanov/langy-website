import { getDateAndTime } from "@/utils/getDateAndTime";
import { Lesson } from "../../types/lesson";
import styles from "./StudentLessons.module.scss";
import { Button } from "@/ui-kit/Button";

export const StudentLessons = ({
  lessons,
  cancelLesson,
  isPending,
  isError,
}) => {
  if (isPending) return "Идет загрузка уроков...";

  if (isError) return "Ooops, reload...";

  return (
    <div className={styles.lessonsContainer}>
      {lessons?.data?.data.map((lesson: Lesson) => (
        <div className={styles.lessonBlock} key={lesson._id}>
          <div>ID урока: {lesson._id}</div>
          <div>
            Дата урока: {getDateAndTime(lesson.lessonDate).date}{" "}
            {getDateAndTime(lesson.lessonDate).time}
          </div>
          <div>
            Имя учителя: {lesson.teacherInfo?.name}{" "}
            {lesson.teacherInfo?.surname}
          </div>
          <div>Email учителя: {lesson.teacherInfo?.email}</div>
          <Button variant="teachers" onClick={() => cancelLesson(lesson._id)}>
            Отменить
          </Button>
        </div>
      ))}
    </div>
  );
};
