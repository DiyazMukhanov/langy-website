import Header from "@/modules/shared/Header";
import ProtectPage from "@/modules/shared/ProtectPage";
import styles from "./WithTeachersLayout.module.scss";
import { Button } from "@/ui-kit/Button";
import { Card } from "@/ui-kit/Card";
import { Paper } from "@/ui-kit/Paper";
import { useRouter } from "next/router";

export default function WithTeachersLayout({ children }) {
  const router = useRouter();

  return (
    <ProtectPage subscriptionIsNeeded={false} adminNeeded={false}>
      <Header variant="blue" isEasyEnglish={false} />
      <div className={styles.top}>
        <Button
          variant="standardMiddleOutlined"
          onClick={() => router.push("/with-teachers/student-progress")}
        >
          Мой прогресс
        </Button>
        <Button
          variant="standardMiddleOutlined"
          onClick={() => router.push("/with-teachers/teachers")}
        >
          Выбрать учителя
        </Button>
        <Button
          variant="standardMiddleOutlined"
          onClick={() => router.push("/with-teachers/my-lessons")}
        >
          Мои запланированные уроки
        </Button>
        <Card className={styles.lessonsStatus}>
          <Paper onClick={() => router.push("/with-teachers/buy-lessons")}>
            Пополнить уроки
          </Paper>
          <p>12 уроков</p>
        </Card>
      </div>
      {children}
    </ProtectPage>
  );
}
