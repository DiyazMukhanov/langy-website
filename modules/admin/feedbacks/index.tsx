import { useQuery } from "@tanstack/react-query";
import { getFeedbacks } from "../shared/api/getFeedbacks";
import { useState } from "react";
import { Pagination } from "@/ui-kit/Pagination";
import { AdminLayout } from "../AdminLayout";
import styles from "./Feedbacks.module.scss";

type Feedback = {
  _id: string;
  teacherId: string;
  studentId: string;
  feedback: string;
};

export default function Feedbacks() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChangeHandler = (newCurrentPage: number) => {
    setCurrentPage(newCurrentPage);
  };
  const { isPending, error, data } = useQuery({
    queryKey: ["feedbacks", currentPage],
    queryFn: () => getFeedbacks(currentPage),
  });

  if (isPending) return "Загружаем отзывы...";

  if (error) return "Oooops... reload";

  return (
    <AdminLayout>
      <div className={styles.feedbacksContainer}>
        {data?.data?.data.map((feedback: Feedback) => (
          <div className={styles.feedback}>
            <div>ID отзыва: {feedback._id}</div>
            <div>ID студента: {feedback.studentId}</div>
            <div>ID учителя: {feedback.teacherId}</div>
            <div>Отзыв: {feedback.feedback}</div>
          </div>
        ))}
      </div>
      <Pagination
        onPageChange={onPageChangeHandler}
        totalCount={data?.data.totalCount}
        siblingCount={1}
        currentPage={currentPage}
        pageSize={5}
      />
    </AdminLayout>
  );
}
