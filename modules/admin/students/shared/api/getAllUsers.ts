import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getAllUsers = async (
  limit: number,
  page: number,
  email: string | null,
  studentId: string | null
) => {
  let finalPart = "";

  if (email) {
    finalPart = `?email=${email}`;
  } else if (studentId) {
    finalPart = `?_id=${studentId}`;
  } else {
    finalPart = `?limit=${limit}&page=${page}`;
  }

  let url = `${apiUrl}/users${finalPart}`;

  return await axios.get(url, options);
};
