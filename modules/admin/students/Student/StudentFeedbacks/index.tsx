import { AdminLayout } from "@/modules/admin/AdminLayout";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getStudentFeedbacks } from "../../shared/api/getStudentFeedbacks";
import styles from "./StudentFeedbacks.module.scss";

export default function StudentFeedbacks() {
  const router = useRouter();
  const studentId = router.query.studentId;

  const { isPending, error, data } = useQuery({
    queryKey: ["studentFeedbacks", studentId],
    queryFn: () => {
      if (studentId && !Array.isArray(studentId)) {
        return getStudentFeedbacks(studentId);
      }
    },
  });

  if (isPending) return "Waiting for feedbacks...";

  if (error) return "Oooops, please reload...";

  return (
    <AdminLayout>
      <div className={styles.feedbacksContainer}>
        {data?.data?.data.map((feedback) => (
          <div className={styles.feedback} key={feedback.feedbackId}>
            <div>ID: {feedback._id}</div>
            <div>Teacher email: {feedback.teacherEmail}</div>
            <div>Teacher name: {feedback.teacherName}</div>
            <div>Feedback: {feedback.feedback}</div>
            <div>Дата отзыва: {feedback.feedbackDate}</div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
