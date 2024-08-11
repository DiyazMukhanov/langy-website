import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getPackage = async () => {
  return await axios.get(`${apiUrl}/students/lessons-package`, options);
};
