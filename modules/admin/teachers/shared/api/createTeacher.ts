import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const createTeacher = async (teacherData) => {
  return await axios.post(`${apiUrl}/admin/teachers`, teacherData, options);
};
