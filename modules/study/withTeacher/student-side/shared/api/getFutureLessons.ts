import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getFutureLessonsAsStudent = async () => {
  return await axios.get(`${apiUrl}/students/future-lessons`, options);
};
