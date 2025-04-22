import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const getStudentFeedbacks = async (studentId: string) => {
  return await axios.get(
    `${apiUrl}/admin/feedbacks/student/${studentId}`,
    options
  );
};
