import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getNextStudentLessonsByAdmin = async (studentId: string) => {
  return await axios.get(
    `${apiUrl}/admin/lessons-next/student/${studentId}`,
    options
  );
};
