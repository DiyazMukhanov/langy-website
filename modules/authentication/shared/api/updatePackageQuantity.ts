import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const updatePackageQuantity = async (bodyData) => {
  return await axios.put(
    `${apiUrl}/students/lessons-package`,
    bodyData,
    options
  );
};
