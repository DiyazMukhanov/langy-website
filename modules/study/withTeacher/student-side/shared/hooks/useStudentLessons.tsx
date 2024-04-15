import { useQuery } from "@tanstack/react-query";

const useStudentLessons = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["studentLessons"],
    queryFn: () => getScheduleAsStudent(teacherId),
  });
};
