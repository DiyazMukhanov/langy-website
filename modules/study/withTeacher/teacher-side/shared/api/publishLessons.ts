import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

export const publishLessons = async (lessonIds: string[]) => {
  return await axios.patch(
    `${apiUrl}/teachers/publish-lessons`,
    { lessonIds },
    options
  );
};
