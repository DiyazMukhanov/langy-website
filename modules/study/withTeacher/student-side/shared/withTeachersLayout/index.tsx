import Header from "@/modules/shared/Header";
import ProtectPage from "@/modules/shared/ProtectPage";
import styles from "./WithTeachersLayout.module.scss";
import { Button } from "@/ui-kit/Button";
import { Card } from "@/ui-kit/Card";
import { Paper } from "@/ui-kit/Paper";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getPackage } from "../api/getPackage";
import { useDispatch, useSelector } from "react-redux";
import { setPackage } from "@/store/student/packageSlice";

export default function WithTeachersLayout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isPending, error, data, isSuccess } = useQuery({
    queryKey: ["package"],
    queryFn: getPackage,
  });

  if (isPending) return "Получение пакета уроков";

  if (error) return "Oooops, перезагрузите...";

  if (isSuccess) {
    dispatch(setPackage(data?.data?.data?.lessonsQuantity));

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
            <p>{data?.data?.data?.lessonsQuantity} уроков</p>
          </Card>
        </div>
        {children}
      </ProtectPage>
    );
  }
}
