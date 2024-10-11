import { useRouter } from "next/router";
import { TeacherLayout } from "../shared/components/TeacherLayout";
import styles from "./TeacherMain.module.scss";

export default function TeacherMain() {
  const router = useRouter();

  return (
    <TeacherLayout>
      <div className={styles.mainContainer}>
        <a onClick={() => router.push("/with-teachers/teacher-schedule")}>
          Раписание
        </a>
        <a onClick={() => router.push("/with-teachers/teacher-future-lessons")}>
          Предстоящие уроки
        </a>
        <a onClick={() => router.push("/with-teachers/teacher-money")}>
          Мой кошелек
        </a>
        <a onClick={() => router.push("/with-teachers/teacher-passed-lessons")}>
          Мои проведенные уроки
        </a>
        <a onClick={() => router.push("/with-teachers/teacher-compensations")}>
          Мои полученные компенсации
        </a>
        <a onClick={() => router.push("/with-teachers/teacher-materials")}>
          Скачать учебные материалы
        </a>
      </div>
    </TeacherLayout>
  );
}
