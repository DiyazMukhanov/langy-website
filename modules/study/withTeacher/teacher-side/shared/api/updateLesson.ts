import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const updateLesson = async ({ lessonId, data }) => {
  return await axios.patch(
    `${apiUrl}/teachers/update-lesson/${lessonId}`,
    data,
    options
  );
};
