import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getCurrentWeekLessonsAsTeacher = async () => {
  return await axios.get(
    `${apiUrl}/teachers/my-schedule/current-week`,
    options
  );
};
