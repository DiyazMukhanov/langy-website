import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getTeacher = async (teacherId: string) => {
  return await axios.get(`${apiUrl}/admin/teachers/${teacherId}`, options);
};
