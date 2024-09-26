import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getStatistics = async (year) => {
  return await axios.get(
    `${apiUrl}/admin/lessons-packages/statistics/monthly/${year}`,
    options
  );
};
