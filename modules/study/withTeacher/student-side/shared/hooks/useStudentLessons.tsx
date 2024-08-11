import { useQuery } from "@tanstack/react-query";
import { getFutureLessonsAsStudent } from "../api/getFutureLessons";

export const useStudentLessons = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["studentLessons"],
    queryFn: () => getFutureLessonsAsStudent(),
  });

  return { isPending, error, data };
};
