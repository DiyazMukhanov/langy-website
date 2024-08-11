import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const bookLesson = async (lessonId: string) => {
  return await axios.put(
    `${apiUrl}/students/book-lesson/${lessonId}`,
    {},
    options
  );
};
