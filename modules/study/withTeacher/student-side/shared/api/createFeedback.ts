import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";

type FeedbackData = {
  teacherId: string;
  feedback: string;
  rating: number;
};

export const createFeedback = async ({
  teacherId,
  feedback,
  rating,
}: FeedbackData) => {
  return await axios.post(
    `${apiUrl}/students/feedback/${teacherId}`,
    { feedback: feedback, rating: rating },
    options
  );
};
