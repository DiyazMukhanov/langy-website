import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const deleteOldLessons = async (days) => {
  return await axios.delete(`${apiUrl}/admin/old-lessons`, {
    ...options,
    data: days,
  });
};
