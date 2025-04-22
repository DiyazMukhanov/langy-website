import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getScheduleAsStudent = async (teacherId: any) => {
  return await axios.get(`${apiUrl}/students/lessons/${teacherId}`, options);
};
