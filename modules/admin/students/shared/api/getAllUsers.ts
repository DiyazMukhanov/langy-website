import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getAllUsers = async (
  limit: number,
  page: number,
  email: string | null
) => {
  const url = !email
    ? `${apiUrl}/users?limit=${limit}&page=${page}`
    : `${apiUrl}/users?email=${email}`;

  return await axios.get(url, options);
};
