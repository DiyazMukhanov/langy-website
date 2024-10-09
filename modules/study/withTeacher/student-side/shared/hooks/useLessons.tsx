import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getScheduleAsStudent } from "../api/getSchedule";
import { getNextWeekScheduleOfTeacherAsStudent } from "../api/getNextWeekSchedule";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { bookLesson } from "../api/bookLesson";
import { studentCancelLesson } from "../api/studentCancelLesson";

export const useLessons = (week: string) => {
  const [teacherId, setTeacherId] = useState<string | undefined | null>(null);

  const queryClient = useQueryClient();

  const bookMutation = useMutation({
    mutationFn: bookLesson,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lessonsSchedule"],
      });

      queryClient.invalidateQueries({
        queryKey: ["package"],
      });
    },
    onError: (error: any) => {
      alert(error?.response?.data?.message);
    },
  });

  const cancelMutation = useMutation({
    mutationFn: studentCancelLesson,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lessonsSchedule"],
      });

      queryClient.invalidateQueries({
        queryKey: ["package"],
      });
    },
  });

  const bookNewLesson = (lessonId: string) => {
    bookMutation.mutate(lessonId);
  };

  const cancelLesson = (lessonId: string) => {
    cancelMutation.mutate(lessonId);
  };

  const router = useRouter();

  useEffect(() => {
    const id = router.query.teacherId;
    if (!Array.isArray(id)) {
      setTeacherId(id);
    }
  }, [router.query.teacherId]);

  const { isPending, error, data } = useQuery({
    queryKey: ["lessonsSchedule", teacherId, week],
    queryFn: () =>
      week === "current"
        ? getScheduleAsStudent(teacherId)
        : getNextWeekScheduleOfTeacherAsStudent(teacherId),
    enabled: !!teacherId,
  });

  return {
    isPending,
    error,
    data,
    bookNewLesson,
    bookPending: bookMutation.isPending,
    cancelLesson,
    cancelPending: cancelMutation.isPending,
  };
};
