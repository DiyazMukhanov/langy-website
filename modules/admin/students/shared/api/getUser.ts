import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getUser = async (studentId: string) => {
  return await axios.get(`${apiUrl}/users/getByid/${studentId}`, options);
};
