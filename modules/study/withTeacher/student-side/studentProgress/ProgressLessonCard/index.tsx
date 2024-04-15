import { Button } from "@/ui-kit/Button";
import styles from "./ProgressLessonCard.module.scss";
import { getDateAndTime } from "@/utils/getDateAndTime";

export const ProgressLessonCard = ({ dateStr, teacher }) => {
  const { date, time } = getDateAndTime(dateStr);
  console.log(date);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>{date}</p>
        <p>{time}</p>
        <p>{teacher.name}</p>
        <p>{teacher.surname}</p>
        <p>{teacher.email}</p>
      </div>
      <Button variant="teachersBook" className={styles.opinionBtn}>
        Оставить отзыв
      </Button>
    </div>
  );
};
