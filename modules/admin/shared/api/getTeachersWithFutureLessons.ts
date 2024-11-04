import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getTeachersWithFutureLessons = async () => {
  return await axios.get(`${apiUrl}/admin/teachers-with-lessons`, options);
};
