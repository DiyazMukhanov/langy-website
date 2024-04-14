import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getCurrentWeekLessonsAsStudent = async () => {
  return await axios.get(`${apiUrl}/students/current-lessons`, options);
};
