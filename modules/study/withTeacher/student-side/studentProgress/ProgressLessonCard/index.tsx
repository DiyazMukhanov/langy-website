import { Button } from "@/ui-kit/Button";
import styles from "./ProgressLessonCard.module.scss";
import { getDateAndTime } from "@/utils/getDateAndTime";
import { useRouter } from "next/router";

export const ProgressLessonCard = ({ dateStr, teacher }) => {
  const { date, time } = getDateAndTime(dateStr);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>{date}</p>
        <p>{time}</p>
        <p>{teacher.name}</p>
        <p>{teacher.surname}</p>
        <p>{teacher.email}</p>
      </div>
      <Button
        variant="teachersBook"
        className={styles.opinionBtn}
        onClick={() => router.push(`/with-teachers/feedback/${teacher._id}`)}
      >
        Оставить отзыв
      </Button>
    </div>
  );
};
