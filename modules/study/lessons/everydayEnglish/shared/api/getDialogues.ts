import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getDialogues = async (lessonNumber: number) => {
    return await axios.get(`${apiUrl}/everyday/dialogues/${lessonNumber}`, options);
}