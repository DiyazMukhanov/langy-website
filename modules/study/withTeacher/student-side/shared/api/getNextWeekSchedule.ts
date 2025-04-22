import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getNextWeekScheduleOfTeacherAsStudent = async (teacherId: any) => {
  return await axios.get(
    `${apiUrl}/students/next-week/lessons/${teacherId}`,
    options
  );
};
