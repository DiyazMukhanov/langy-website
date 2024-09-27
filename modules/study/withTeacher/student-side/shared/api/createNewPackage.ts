import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const createNewPackage = async () => {
  return await axios.post(
    `${apiUrl}/students/lessons-package-new`,
    {},
    options
  );
};
