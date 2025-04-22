import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const setCurrentLessonData = async (bodyData) => {
    return await axios.patch(`${apiUrl}/users/me`, bodyData, options);
}