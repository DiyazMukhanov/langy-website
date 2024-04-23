import { useQuery } from "@tanstack/react-query";
import { TeacherLayout } from "../shared/components/TeacherLayout";
import styles from "./TeacherMoney.module.scss";
import { getTeacherData } from "../shared/api/getTeacherData";

export default function TeacherMoney() {
  const { isPending, error, data } = useQuery({
    queryKey: ["teacherMoney"],
    queryFn: getTeacherData,
  });

  if (isPending) return "Готовим данные о вас...";

  if (error) return "ooopss... please reload page...";
  return (
    <TeacherLayout>
      <div className={styles.moneyContainer}>
        <div>
          Дата последнего списания:{" "}
          {data?.data?.teacherAccount?.lastCompensated}
        </div>
        <div>
          С момента последнего списания вы провели{" "}
          {data?.data?.lessonsAfterLastCompensation} уроков
        </div>
        <div>
          Ваш доход в этом месяце {data?.data?.teacherAccount?.earned} тенге
        </div>
      </div>
    </TeacherLayout>
  );
}
