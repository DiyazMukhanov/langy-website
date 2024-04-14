import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getScheduleAsStudent } from "../api/getSchedule";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { bookLesson } from "../api/bookLesson";
import { studentCancelLesson } from "../api/studentCancelLesson";

export const useLessons = () => {
  const [teacherId, setTeacherId] = useState<string | undefined | null>(null);

  const queryClient = useQueryClient();

  const bookMutation = useMutation({
    mutationFn: bookLesson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lessonsSchedule"] });
    },
  });

  const cancelMutation = useMutation({
    mutationFn: studentCancelLesson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lessonsSchedule"] });
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
    queryKey: ["lessonsSchedule", teacherId],
    queryFn: () => getScheduleAsStudent(teacherId),
    enabled: !!teacherId,
  });

  return { isPending, error, data, bookNewLesson, cancelLesson };
};
