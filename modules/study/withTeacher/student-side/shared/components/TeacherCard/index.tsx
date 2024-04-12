import styles from "./TeacherCard.module.scss";
import Image from "next/image";
import { Teacher } from "../../types/teacher";

type Props = {
  teacher: Teacher;
};

export default function TeacherCard({ teacher }: Props) {
  console.log(teacher);
  return (
    <div className={styles.card}>
      <Image
        alt="teacher"
        priority
        src={teacher.photo}
        height={300}
        width={250}
        className={styles.image}
      />
      <div className={styles.description}>
        <p>
          {teacher.name} {teacher.surname}
        </p>
        <p>{teacher.description}</p>
      </div>
    </div>
  );
}
