import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const cancelLessonByAdmin = async (lessonId: string) => {
  return await axios.patch(
    `${apiUrl}/admin/cancel-lesson/${lessonId}`,
    {},
    options
  );
};
