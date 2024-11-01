import { useRouter } from "next/router";
import { AdminLayout } from "../../AdminLayout";
import styles from "./Student.module.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser } from "../shared/api/getUser";
import { deactivateStudent } from "../shared/api/deactivateStudent";

export default function Student() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const studentId = router.query.studentId;

  const { isPending, error, data } = useQuery({
    queryKey: ["studentProfile", studentId],
    queryFn: () => {
      if (!Array.isArray(studentId) && studentId) {
        return getUser(studentId);
      }
    },
  });

  const deactivateMutation = useMutation({
    mutationFn: () => deactivateStudent(studentId),
    onSuccess: () => {
      queryClient.invalidateQueries(["studentProfile", studentId]);
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
        <div>Активен: {data?.data?.data.isActive ? "Да" : "Нет"}</div>
        <button
          className={styles.deactivateBtn}
          onClick={() => deactivateMutation.mutate()}
          disabled={deactivateMutation.isPending}
        >
          {deactivateMutation.isPending
            ? "Деактивация..."
            : "Деактивировать потенциального клиента"}
        </button>
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
        <a
          onClick={() =>
            router.push(`/admin/student/student-next-lessons/${studentId}`)
          }
        >
          Предстоящие уроки
        </a>
        <a
          onClick={() =>
            router.push(`/admin/student/student-past-lessons/${studentId}`)
          }
        >
          Завершенные уроки
        </a>
      </div>
    </AdminLayout>
  );
}
