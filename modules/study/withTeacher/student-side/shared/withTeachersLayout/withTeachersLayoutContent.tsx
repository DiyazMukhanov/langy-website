import Header from "@/modules/shared/Header";
import ProtectPage from "@/modules/shared/ProtectPage";
import styles from "./WithTeachersLayout.module.scss";
import { Button } from "@/ui-kit/Button";
import { Card } from "@/ui-kit/Card";
import { Paper } from "@/ui-kit/Paper";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getPackage } from "../api/getPackage";
import { useDispatch } from "react-redux";
import { setPackage } from "@/store/student/packageSlice";

export default function WithTeachersLayoutContent({ children }) {
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
      <>
        <Header variant="blue" isEasyEnglish={false} />
        <div className={styles.top}>
          <Button
            variant="bottomOutlined"
            className={styles.tabBtn}
            onClick={() => router.push("/with-teachers/student-progress")}
          >
            Мой прогресс
          </Button>
          <Button
            variant="bottomOutlined"
            className={styles.tabBtn}
            onClick={() => router.push("/with-teachers/teachers")}
          >
            Выбрать учителя
          </Button>
          <Button
            variant="bottomOutlined"
            className={styles.tabBtn}
            onClick={() => router.push("/with-teachers/my-lessons")}
          >
            Запланированные уроки
          </Button>
          <Button
            variant="bottomOutlined"
            className={styles.tabBtn}
            onClick={() => router.push("/with-teachers/buy-lessons")}
          >
            Пополнить уроки
          </Button>
        </div>
        {children}
      </>
    );
  }
}