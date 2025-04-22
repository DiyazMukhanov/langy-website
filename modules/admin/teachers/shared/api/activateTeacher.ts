import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const activateTeacher = async ({ teacherId }) => {
  return await axios.patch(
    `${apiUrl}/admin/activate/${teacherId}`,
    {},
    options
  );
};
