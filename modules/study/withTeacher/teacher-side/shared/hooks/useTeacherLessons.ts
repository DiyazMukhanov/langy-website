import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentWeekLessonsAsTeacher } from "../api/getCurrentWeekLessonsAsTeacher";
import { getNextWeekLessonsAsTeacher } from "../api/getNextWeekLessonsAsTeacher";
import { publishLessons } from "../api/publishLessons";
import { unpublishLessons } from "../api/unpublishLessons";
import { createSchedule } from "../api/createSchedule";
import { updateLesson } from "../api/updateLesson";

export const useTeacherLessons = (week: string) => {
  const queryClient = useQueryClient();

  const publishMutation = useMutation({
    mutationFn: publishLessons,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teacherLessons"],
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateLesson,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teacherFutureLessons"],
      });
    },
  });

  const unpublishMutation = useMutation({
    mutationFn: unpublishLessons,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teacherLessons"],
      });
    },
  });

  const createScheduleMutation = useMutation({
    mutationFn: createSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["teacherLessons"],
      });
    },
  });

  const publishLesson = (lessonIds: string[]) => {
    publishMutation.mutate(lessonIds);
  };

  const updateLessonHandler = (lessonId, data) => {
    updateMutation.mutate({ lessonId, data });
  };

  const unpublishLesson = (lessonIds: string[]) => {
    unpublishMutation.mutate(lessonIds);
  };

  const createScheduleHandler = () => {
    console.log("Creating clicked");
    createScheduleMutation.mutate();
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["teacherLessons", week],
    queryFn: () =>
      week === "current"
        ? getCurrentWeekLessonsAsTeacher()
        : getNextWeekLessonsAsTeacher(),
    refetchInterval: 10000,
  });

  return {
    isPending,
    error,
    data,
    publishLesson,
    unpublishLesson,
    createScheduleHandler,
    updateLessonHandler,
    updateMutationLoading: updateMutation.isPending,
    updateMutationError: updateMutation.isError,
    createScheduleLoading: createScheduleMutation.isPending,
  };
};
