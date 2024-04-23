import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const updateStudentPackage = async ({ studentId, lessonsQuantity }) => {
  return await axios.put(
    `${apiUrl}/admin/lessons-packages/${studentId}`,
    { lessonsQuantity: lessonsQuantity },
    options
  );
};
