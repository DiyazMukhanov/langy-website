import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getStudentsWithLessons = async (limit: number, page: number) => {
  let url = `${apiUrl}/admin/students-with-lessons?limit=${limit}&page=${page}`;

  return await axios.get(url, options);
};
