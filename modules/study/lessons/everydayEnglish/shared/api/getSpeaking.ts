import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getSpeaking = async (lessonNumber: number) => {
    return await axios.get(`${apiUrl}/everyday/speaking/${lessonNumber}`, options);
}