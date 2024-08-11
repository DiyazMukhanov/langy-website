import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getTeacher } from "../api/getTeacher";
import { compensateTeacher } from "../api/compensateTeacher";
import { getTeacherCompensations } from "../api/getTeacherCompensations";
import { getTeachersFeedbacksByAdmin } from "../api/getTeachersFeedbacksByAdmin";
import { updateTeacherFee } from "../api/updateTeacherFee";
import { createTeacher } from "../api/createTeacher";

export const useTeacher = (
  currentPage: number,
  feedbacksCurrentPage: number
) => {
  const router = useRouter();
  const teacherId = router.query.teacherId;

  const queryClient = useQueryClient();

  const {
    isPending: teacherIsPending,
    error: teacherError,
    data: teacherData,
  } = useQuery({
    queryKey: ["teacher", teacherId],
    queryFn: () => {
      if (teacherId && !Array.isArray(teacherId)) {
        return getTeacher(teacherId);
      } else {
        return Promise.resolve(null);
      }
    },
  });

  const {
    isPending: compensationsIsPending,
    error: compensationsError,
    data: compensationsData,
  } = useQuery({
    queryKey: ["compensations", teacherId, currentPage],
    queryFn: () => {
      if (teacherId && !Array.isArray(teacherId)) {
        return getTeacherCompensations(teacherId, currentPage);
      } else {
        return Promise.resolve(null);
      }
    },
  });

  const {
    isPending: feedbacksIsPending,
    error: feedbacksError,
    data: feedbacksData,
  } = useQuery({
    queryKey: ["feedbacks", teacherId, feedbacksCurrentPage],
    queryFn: () => {
      if (teacherId && !Array.isArray(teacherId)) {
        return getTeachersFeedbacksByAdmin(teacherId, feedbacksCurrentPage);
      } else {
        return Promise.resolve(null);
      }
    },
  });

  const compensateTeacherMutation = useMutation({
    mutationFn: compensateTeacher,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teacher"],
      });

      queryClient.invalidateQueries({
        queryKey: ["compensations"],
      });
    },
  });

  const compensateTeacherHandler = () => {
    if (teacherId && !Array.isArray(teacherId)) {
      compensateTeacherMutation.mutate(teacherId);
    }
  };

  const updateTeacherFeeMutation = useMutation({
    mutationFn: updateTeacherFee,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teacher"],
      });
    },
  });

  const updateTeacherFeeHandler = (fee: number) => {
    updateTeacherFeeMutation.mutate({ teacherId, fee });
  };

  const createTeacherMutation = useMutation({
    mutationFn: createTeacher,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teachers"],
      });
    },
  });

  const createTeacherHandler = (teacherData) => {
    createTeacherMutation.mutate(teacherData);
  };

  return {
    teacherIsPending,
    teacherError,
    teacherData,
    compensationsIsPending,
    compensationsError,
    compensationsData,
    feedbacksIsPending,
    feedbacksError,
    feedbacksData,
    compensateTeacherHandler,
    updateTeacherFeeHandler,
    createTeacherHandler,
    createTeacherMutation,
  };
};
