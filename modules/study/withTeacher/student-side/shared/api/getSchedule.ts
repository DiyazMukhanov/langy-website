import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getScheduleAsStudent = async (teacherId: string) => {
  return await axios.get(`${apiUrl}/students/lessons/${teacherId}`, options);
};
