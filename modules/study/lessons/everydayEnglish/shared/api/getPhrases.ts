import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getPhrases = async (lessonNumber: number) => {
    return await axios.get(`${apiUrl}/everyday/phrases/${lessonNumber}`, options);
}