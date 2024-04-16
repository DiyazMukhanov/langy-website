import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

type FeedbackData = {
  teacherId: string;
  feedback: string;
};

export const createFeedback = async ({ teacherId, feedback }: FeedbackData) => {
  return await axios.post(
    `${apiUrl}/students/feedback/${teacherId}`,
    { feedback: feedback },
    options
  );
};
