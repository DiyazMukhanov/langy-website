import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getFutureLessonsOfTeacher = async (teacherId: any) => {
  return await axios.get(
    `${apiUrl}/students/future-lessons/${teacherId}`,
    options
  );
};
