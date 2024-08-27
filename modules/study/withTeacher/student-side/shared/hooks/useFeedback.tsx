import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFeedback } from "../api/createFeedback";
import { useRouter } from "next/router";
import { getTeacherFeedbacks } from "../api/getTeacherFeedbacks";

export const useFeedback = (teacherId: string, limit: number, page: number) => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const {
    data: feedbacks,
    isLoading: isFeedbacksLoading,
    isError: isFeedbacksError,
  } = useQuery({
    queryKey: ["getAllFeedbacks", teacherId, limit, page],
    queryFn: () => getTeacherFeedbacks(teacherId, limit, page),
    enabled: !!teacherId,
  });

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["student_feedback"],
      });
    },
  });

  const createNewFeedback = ({ teacherId, feedback, rating }) => {
    if (teacherId) {
      mutate({ teacherId, feedback, rating });
    }
  };

  return {
    createNewFeedback,
    teacherId,
    isPending,
    isSuccess,
    isError,
    feedbacks,
    isFeedbacksLoading,
    isFeedbacksError,
  };
};
