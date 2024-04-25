import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getFeedbacks = async (currentPage: number) => {
  return await axios.get(
    `${apiUrl}/admin/feedbacks?limit=5&page=${currentPage}`,
    options
  );
};
