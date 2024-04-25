import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const updateTeacherFee = async (teacherId: string, fee: number) => {
  return await axios.patch(
    `${apiUrl}/admin/fee/${teacherId}`,
    { fee },
    options
  );
};
