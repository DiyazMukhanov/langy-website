import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentWeekLessonsAsTeacher } from "../api/getCurrentWeekLessonsAsTeacher";
import { getNextWeekLessonsAsTeacher } from "../api/getNextWeekLessonsAsTeacher";
import { publishLessons } from "../api/publishLessons";
import { unpublishLessons } from "../api/unpublishLessons";
import { createSchedule } from "../api/createSchedule";

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

  const unpublishLesson = (lessonIds: string[]) => {
    unpublishMutation.mutate(lessonIds);
  };

  const createScheduleHandler = () => {
    createScheduleMutation.mutate();
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["teacherLessons", week],
    queryFn: () =>
      week === "current"
        ? getCurrentWeekLessonsAsTeacher()
        : getNextWeekLessonsAsTeacher(),
  });

  return {
    isPending,
    error,
    data,
    publishLesson,
    unpublishLesson,
    createScheduleHandler,
  };
};
