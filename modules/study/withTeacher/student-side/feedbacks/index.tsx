import { useRouter } from "next/router";
import { useFeedback } from "../shared/hooks/useFeedback";
import styles from "./Feedbacks.module.scss";
import { Pagination } from "@/ui-kit/Pagination";
import { useState } from "react";
import WithTeachersLayout from "../shared/withTeachersLayout";

export default function Feedbacks() {
  const router = useRouter();
  const teacherId =
    typeof router.query.teacherId === "string"
      ? router.query.teacherId
      : undefined;
  const [currentPage, setCurrentPage] = useState(1);
  const { feedbacks, isFeedbacksLoading, isFeedbacksError } = useFeedback(
    teacherId || "",
    4,
    currentPage
  );

  if (!teacherId) {
    return <p>Loading...</p>;
  }

  if (isFeedbacksLoading) {
    return <p>Loading feedbacks...</p>;
  }

  if (isFeedbacksError) {
    return <p>Error loading feedbacks</p>;
  }

  const data = feedbacks?.data?.data;

  const onPageChangeHandler = (newCurrentPage) => {
    setCurrentPage(newCurrentPage);
  };

  return (
    <WithTeachersLayout>
      <div className={styles.container}>
        <div className={styles.feedbacksContainer}>
          <h1>Отзывы о преподавателе</h1>
          <div className={styles.feedbacks}>
            {data && data.length > 0 ? (
              data.map((feedback) => (
                <div className={styles.feedback}>{feedback.feedback}</div>
              ))
            ) : (
              <p>No feedbacks found</p>
            )}
          </div>
        </div>
        <div className={styles.pagination}>
          <Pagination
            onPageChange={onPageChangeHandler}
            totalCount={feedbacks?.data.totalCount}
            siblingCount={1}
            currentPage={currentPage}
            pageSize={4}
          />
        </div>
      </div>
    </WithTeachersLayout>
  );
}
