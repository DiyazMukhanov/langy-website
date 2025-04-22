import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getTeacherFeedbacks = async (
  teacherId: string,
  limit: number,
  page: number
) => {
  return await axios.get(
    `${apiUrl}/students/feedbacks/${teacherId}?limit=${limit}&page=${page}`,
    options
  );
};
