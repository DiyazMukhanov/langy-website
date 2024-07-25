import { Pagination } from "@/ui-kit/Pagination";
import WithTeachersLayout from "../shared/withTeachersLayout";
import { ProgressLessonCard } from "./ProgressLessonCard";
import styles from "./StudentProgress.module.scss";
import { useState } from "react";
import { getLessonsHistory } from "../shared/api/getLessonsHistory";
import { useQuery } from "@tanstack/react-query";
import { Feedback } from "./Feedback/index";

export default function StudentProgress() {
  const [currentPage, setCurrentPage] = useState(1);
  const [teacherIdForFeedback, setTeacherIdForFeedback] = useState<
    string | null
  >(null);
  const [isFeedbackShowing, setIsFeedbackShowing] = useState(false);

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
              setIsFeedbackShowing={setIsFeedbackShowing}
              setTeacherIdForFeedback={setTeacherIdForFeedback}
            />
          ))}
        </div>
        {isFeedbackShowing && (
          <Feedback
            isOpen={isFeedbackShowing}
            setIsFeedbackShowing={setIsFeedbackShowing}
            teacherId={teacherIdForFeedback}
          />
        )}
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
