import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getTestMaterials = async (lessonNumber: number) => {
    return await axios.get(`${apiUrl}/users/testLessons/${lessonNumber}`, options);
}