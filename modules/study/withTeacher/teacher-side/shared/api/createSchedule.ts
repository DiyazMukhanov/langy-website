import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const createSchedule = async () => {
  return await axios.post(`${apiUrl}/teachers/create-schedule`, {}, options);
};
