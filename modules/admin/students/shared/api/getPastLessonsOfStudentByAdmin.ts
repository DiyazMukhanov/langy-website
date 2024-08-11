import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getPastStudentLessonsByAdmin = async (
  studentId: string,
  currentPage: number
) => {
  return await axios.get(
    `${apiUrl}/admin/lessons-previous/student/${studentId}?limit=7&page=${currentPage}`,
    options
  );
};
