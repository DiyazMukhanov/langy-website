import styles from "./TeacherCard.module.scss";
import Image from "next/image";
import { Teacher } from "../../types/teacher";
import { Button } from "@/ui-kit/Button";
import { useRouter } from "next/router";
import Star from "public/icons/star.svg";
import Card from "../Card";
import { AskUs } from "@/modules/study/shared/AskUs";

type Props = {
  teacher: Teacher;
};

export default function TeacherCard({ teacher }: Props) {
  const router = useRouter();
  return (
    <Card>
      {/* <div className={styles.imageContainer}>
        <Image
          alt="teacher"
          priority
          src={teacher.photo}
          height={160}
          width={208}
          className={styles.image}
          objectFit="contain"
        />
      </div> */}
      <div className={styles.description}>
        <div className={styles.nameContainer}>
          <span>{teacher.name}</span>
          <span>{teacher.surname}</span>
        </div>
        <div className={styles.descriptionContainer}>{teacher.description}</div>
        <div>
          <AskUs />
        </div>

        {/* <div className={styles.opinionContainer}>
          <span
            className={styles.goToOpinionsLink}
            onClick={() =>
              router.push(`/with-teachers/teacher-feedbacks/${teacher._id}`)
            }
          >
            Отрыть отзывы
          </span>
          <div className={styles.scoreContainer}>
            <Star className={styles.star} />
            <span>{Math.floor(teacher.averageRating)}</span>
          </div>
        </div> */}
      </div>
      {/* <Button
        variant="teachersBook"
        className={styles.bookBtn}
        onClick={() =>
          router.push(`/with-teachers/book-teacher/${teacher._id}`)
        }
      >
        Посмотреть расписание
      </Button> */}
    </Card>
  );
}
