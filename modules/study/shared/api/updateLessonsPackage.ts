import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const updateLessonsPackage = async (body) => {
  return await axios.put(`${apiUrl}/students/lessons-package`, body, options);
};
