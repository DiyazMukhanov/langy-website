import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentWeekLessonsAsTeacher } from "../api/getCurrentWeekLessonsAsTeacher";
import { getNextWeekLessonsAsTeacher } from "../api/getNExtWeekLessonsAsTeacher";
import { publishLessons } from "../api/publishLessons";
import { unpublishLessons } from "../api/unpublishLessons";

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

  const publishLesson = (lessonIds: string[]) => {
    publishMutation.mutate(lessonIds);
  };

  const unpublishLesson = (lessonIds: string[]) => {
    unpublishMutation.mutate(lessonIds);
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["teacherLessons", week],
    queryFn: () =>
      week === "current"
        ? getCurrentWeekLessonsAsTeacher()
        : getNextWeekLessonsAsTeacher(),
  });

  return { isPending, error, data, publishLesson, unpublishLesson };
};
