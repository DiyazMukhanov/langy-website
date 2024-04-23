import { useRouter } from "next/router";
import { AdminLayout } from "../../AdminLayout";
import styles from "./Student.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../shared/api/getUser";

export default function Student() {
  const router = useRouter();
  const studentId = router.query.studentId;
  const { isPending, error, data } = useQuery({
    queryKey: ["studentProfile", studentId],
    queryFn: () => {
      if (!Array.isArray(studentId) && studentId) {
        return getUser(studentId);
      }
    },
  });

  if (isPending) return "Loading...";

  if (error) return "Oooops... Reload";

  return (
    <AdminLayout>
      <div className={styles.profileContainer}>
        <div>ID: {data?.data?.data._id}</div>
        <div>Имя: {data?.data?.data.name}</div>
        <div>email: {data?.data?.data.email}</div>
        <div>Пол: {data?.data?.data.gender}</div>
      </div>
      <div className={styles.additionalBlock}>
        <a
          onClick={() =>
            router.push(`/admin/student/student-feedbacks/${studentId}`)
          }
        >
          Отзывы от студента
        </a>
        <a
          onClick={() =>
            router.push(`/admin/student/student-package/${studentId}`)
          }
        >
          Пакет уроков
        </a>
        <a>Предстоящие уроки</a>
        <a>Завершенные уроки</a>
      </div>
    </AdminLayout>
  );
}
