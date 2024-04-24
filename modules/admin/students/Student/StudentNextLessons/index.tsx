import { AdminLayout } from "@/modules/admin/AdminLayout";
import { useStudentLessons } from "../../shared/hooks/useStudentLessons";
import styles from "./StudentNextLessons.module.scss";
import { StudentLessons } from "../../shared/components/StudentLessons";

export default function StudentNextLessons() {
  const { nextLessonsIsPending, nextLessonsError, nextLessons, cancelLesson } =
    useStudentLessons(1);

  return (
    <AdminLayout>
      <h2 className={styles.heading}>Предстоящие уроки студента</h2>
      <StudentLessons
        lessons={nextLessons}
        cancelLesson={cancelLesson}
        isPending={nextLessonsIsPending}
        isError={nextLessonsError}
      />
    </AdminLayout>
  );
}
