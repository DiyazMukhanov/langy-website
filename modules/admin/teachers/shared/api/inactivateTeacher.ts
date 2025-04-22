import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const inactivateTeacher = async ({ teacherId }) => {
  return await axios.patch(
    `${apiUrl}/admin/inactivate/${teacherId}`,
    {},
    options
  );
};
