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
        <a>Предстоящие уроки</a>
        <a>Мой кошелек</a>
      </div>
    </TeacherLayout>
  );
}
