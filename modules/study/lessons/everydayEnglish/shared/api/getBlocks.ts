import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getBlocks = async (lessonNumber: number) => {
    return await axios.get(`${apiUrl}/everyday/blocks/${lessonNumber}`, options);
}