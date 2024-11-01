import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const deactivateStudent = async (studentId) => {
  return await axios.patch(
    `${apiUrl}/users/inactivate-user/${studentId}`,
    {},
    options
  );
};
