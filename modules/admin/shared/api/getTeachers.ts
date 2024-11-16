import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getTeachers = async (
  email: string | null,
  currentPage?: number
) => {
  const url = email
    ? `${apiUrl}/admin/teachers?email=${email}`
    : `${apiUrl}/admin/teachers`;

  return await axios.get(url, options);
};
