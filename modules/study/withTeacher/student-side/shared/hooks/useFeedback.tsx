import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFeedback } from "../api/createFeedback";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useFeedback = () => {
  const [teacherId, setTeacherId] = useState<string | undefined | null>(null);

  const router = useRouter();

  useEffect(() => {
    const id = router.query.teacherId;
    if (!Array.isArray(id)) {
      setTeacherId(id);
    }
  }, [router.query.teacherId]);

  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["student_feedback"],
      });
    },
  });

  const createNewFeedback = ({ teacherId, feedback }) => {
    if (teacherId) {
      mutate({ teacherId, feedback });
    }
  };

  return { createNewFeedback, teacherId, isPending, isSuccess };
};
