import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getTeacherCompensations = async (
  teacherId: string,
  currentPage: number
) => {
  return await axios.get(
    `${apiUrl}/admin/compensations/${teacherId}?limit=5&page=${currentPage}`,
    options
  );
};
