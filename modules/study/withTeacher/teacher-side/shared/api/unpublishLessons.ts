import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const unpublishLessons = async (lessonIds: string[]) => {
  return await axios.patch(
    `${apiUrl}/teachers/unpublish-lessons`,
    { lessonIds },
    options
  );
};
