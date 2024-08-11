import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getNextWeekLessonsAsTeacher = async () => {
  return await axios.get(`${apiUrl}/teachers/my-schedule/next-week`, options);
};
