import { Button } from "@/ui-kit/Button";
import styles from "./ProgressLessonCard.module.scss";
import { getDateAndTime } from "@/utils/getDateAndTime";
import { useRouter } from "next/router";
import Card from "../../shared/components/Card";
import Image from "next/image";
import Clock from "public/icons/clock.svg";
import Calendar from "public/icons/calendar.svg";

export const ProgressLessonCard = ({
  dateStr,
  teacher,
  setIsFeedbackShowing,
  setTeacherIdForFeedback,
}) => {
  const { date, time } = getDateAndTime(dateStr);
  const router = useRouter();

  const feedbackOpenHandler = () => {
    setTeacherIdForFeedback(teacher._id);
    setIsFeedbackShowing(true);
  };

  return (
    <Card>
      <div className={styles.container}>
        <Image
          alt="teacher"
          priority
          src={teacher.photo}
          height={160}
          width={208}
          className={styles.image}
        />
        <div className={styles.nameContainer}>
          <span>{teacher.name}</span>
          <span>{teacher.surname}</span>
          <span>{teacher.email}</span>
        </div>
        <div className={styles.dateTimeBlock}>
          <div className={styles.withIconBlock}>
            <Image alt="clock" priority src={Clock} />
            <span>{date}</span>
          </div>
          <div className={styles.withIconBlock}>
            <Image alt="clock" priority src={Calendar} />
            <span>{time}</span>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button
            variant="teachersBook"
            className={styles.opinionBtn}
            onClick={feedbackOpenHandler}
          >
            Оставить отзыв
          </Button>
        </div>
      </div>
    </Card>
  );
};
