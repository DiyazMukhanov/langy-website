import { Pagination } from "@/ui-kit/Pagination";
import WithTeachersLayout from "../shared/withTeachersLayout";
import { ProgressLessonCard } from "./ProgressLessonCard";
import styles from "./Student.module.scss";
import { useState } from "react";
import { getLessonsHistory } from "../shared/api/getLessonsHistory";
import { useQuery } from "@tanstack/react-query";

export default function StudentProgress() {
  const [currentPage, setCurrentPage] = useState(1);

  const { isPending, error, data } = useQuery({
    queryKey: ["lessons-history", currentPage],
    queryFn: () => getLessonsHistory(5, currentPage),
  });

  const onPageChangeHandler = (newCurrentPage) => {
    setCurrentPage(newCurrentPage);
  };

  if (isPending) return "Loading...";

  return (
    <WithTeachersLayout>
      <div className={styles.container}>
        <div className={styles.progressesContainer}>
          {data?.data?.data.map((item) => (
            <ProgressLessonCard
              teacher={item.teacher}
              dateStr={item.lessonDate}
            />
          ))}
        </div>
        <Pagination
          onPageChange={onPageChangeHandler}
          totalCount={data?.data.totalCount}
          siblingCount={1}
          currentPage={currentPage}
          pageSize={5}
        />
      </div>
    </WithTeachersLayout>
  );
}
