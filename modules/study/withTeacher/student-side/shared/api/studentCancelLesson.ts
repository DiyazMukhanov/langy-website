import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const studentCancelLesson = async (lessonId: string) => {
  return await axios.put(
    `${apiUrl}/students/cancel-lesson/${lessonId}`,
    {},
    options
  );
};
