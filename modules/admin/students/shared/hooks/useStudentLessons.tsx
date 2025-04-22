import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getNextStudentLessonsByAdmin } from "../api/getNextStudentsLessonsByAdmin";
import { cancelLessonByAdmin } from "../api/cancelLessonByAdmin";
import { getPastStudentLessonsByAdmin } from "../api/getPastLessonsOfStudentByAdmin";

export const useStudentLessons = (currentPage) => {
  const router = useRouter();
  const studentId = router.query.studentId;
  const queryClient = useQueryClient();

  const {
    isPending: nextLessonsIsPending,
    error: nextLessonsError,
    data: nextLessons,
  } = useQuery({
    queryKey: ["studentNextLessons", studentId],
    queryFn: () => {
      if (studentId && !Array.isArray(studentId)) {
        return getNextStudentLessonsByAdmin(studentId);
      } else {
        return Promise.resolve(null);
      }
    },
  });

  const {
    isPending: pastLessonsIsPending,
    error: pastLessonsError,
    data: pastLessons,
  } = useQuery({
    queryKey: ["studentPastLessons", studentId, currentPage],
    queryFn: () => {
      if (studentId && !Array.isArray(studentId)) {
        return getPastStudentLessonsByAdmin(studentId, currentPage);
      } else {
        return Promise.resolve(null);
      }
    },
  });

  const cancelLessonMutation = useMutation({
    mutationFn: cancelLessonByAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["studentNextLessons"],
      });

      queryClient.invalidateQueries({
        queryKey: ["studentPastLessons"],
      });
    },
  });

  const cancelLesson = (lessonId: string) => {
    const confirmCancel = window.confirm("Вы точно хотите отменить этот урок?");

    if (confirmCancel) {
      cancelLessonMutation.mutate(lessonId);
    }
  };

  return {
    nextLessonsIsPending,
    nextLessonsError,
    nextLessons,
    pastLessonsIsPending,
    pastLessonsError,
    pastLessons,
    cancelLesson,
  };
};
