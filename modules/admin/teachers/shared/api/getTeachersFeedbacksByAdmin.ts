import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getTeachersFeedbacksByAdmin = async (
  teacherId: string,
  feedbacksCurrentPage: number
) => {
  return await axios.get(
    `${apiUrl}/admin/feedbacks/teacher/${teacherId}?limit=5&page=${feedbacksCurrentPage}`,
    options
  );
};
