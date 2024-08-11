import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getTeacherData = async () => {
  return await axios.get(`${apiUrl}/teachers/my-account`, options);
};
