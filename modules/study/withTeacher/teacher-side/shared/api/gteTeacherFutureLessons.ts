import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getTeacherFutureLessons = async () => {
  return await axios.get(
    `${apiUrl}/teachers/my-schedule/future-lessons`,
    options
  );
};
