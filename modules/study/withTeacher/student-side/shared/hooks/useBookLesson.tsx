import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { bookLesson } from "../api/bookLesson";

export const useBookLesson = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: bookLesson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lessonsSchedule"] });
    },
  });

  const bookNewLesson = (lessonId: string) => {
    mutation.mutate(lessonId);
  };

  return { bookNewLesson };
};
