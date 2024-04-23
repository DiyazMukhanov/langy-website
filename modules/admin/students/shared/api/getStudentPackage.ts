import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getStudentPackage = async (studentId: string) => {
  return await axios.get(
    `${apiUrl}/admin/lessons-packages/${studentId}`,
    options
  );
};
