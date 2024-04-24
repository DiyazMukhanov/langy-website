import { AdminLayout } from "@/modules/admin/AdminLayout";
import { useStudentLessons } from "../../shared/hooks/useStudentLessons";
import styles from "./StudentPastLessons.module.scss";
import { StudentLessons } from "../../shared/components/StudentLessons";
import { Pagination } from "@/ui-kit/Pagination";
import { useState } from "react";

export default function StudentNextLessons() {
  const [currentPage, setCurrentPage] = useState(1);
  const { pastLessonsIsPending, pastLessonsError, pastLessons, cancelLesson } =
    useStudentLessons(currentPage);

  const onPageChangeHandler = (newCurrentPage) => {
    setCurrentPage(newCurrentPage);
  };

  return (
    <AdminLayout>
      <h2 className={styles.heading}>Завершенные уроки студента</h2>
      <StudentLessons
        lessons={pastLessons}
        cancelLesson={cancelLesson}
        isPending={pastLessonsIsPending}
        isError={pastLessonsError}
      />
      <Pagination
        onPageChange={onPageChangeHandler}
        totalCount={pastLessons?.data.totalCount}
        siblingCount={1}
        currentPage={currentPage}
        pageSize={5}
      />
    </AdminLayout>
  );
}
