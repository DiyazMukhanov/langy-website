import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const compensateTeacher = async (teacherId: string) => {
  return await axios.patch(
    `${apiUrl}/admin/teacher-money/${teacherId}`,
    {},
    options
  );
};
