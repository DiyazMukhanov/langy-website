import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getVideoMaterials = async (lessonNumber: number) => {
    return await axios.get(`${apiUrl}/users/videoLessons/${lessonNumber}`, options);
}