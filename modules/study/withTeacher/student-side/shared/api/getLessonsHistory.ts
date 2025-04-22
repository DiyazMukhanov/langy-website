import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getLessonsHistory = async (limit: number, page: number) => {
  return await axios.get(
    `${apiUrl}/students/lessons-history?limit=${limit}&page=${page}`,
    options
  );
};
