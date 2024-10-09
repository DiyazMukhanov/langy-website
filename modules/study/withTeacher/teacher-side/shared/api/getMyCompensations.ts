import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getMyCompensations = async (limit: number, page: number) => {
  return await axios.get(
    `${apiUrl}/teachers/my-compensations?limit=${limit}&page=${page}`,
    options
  );
};
