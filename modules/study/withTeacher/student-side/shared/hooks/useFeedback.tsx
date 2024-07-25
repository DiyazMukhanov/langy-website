import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFeedback } from "../api/createFeedback";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useFeedback = (teacherId: string) => {
  const router = useRouter();

  const queryClient = useQueryClient();

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

  return { createNewFeedback, teacherId, isPending, isSuccess, isError };
};
