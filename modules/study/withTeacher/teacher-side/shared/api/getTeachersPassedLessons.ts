import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getTeacherPassedLessons = async (year: number) => {
  return await axios.get(
    `${apiUrl}/teachers/teachers-past-lessons/${year}`,
    options
  );
};
