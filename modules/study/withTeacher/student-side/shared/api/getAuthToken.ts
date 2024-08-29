import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getAuthToken = async () => {
  return await axios.get(`${apiUrl}/video-calls/get-auth-token`, options);
};
