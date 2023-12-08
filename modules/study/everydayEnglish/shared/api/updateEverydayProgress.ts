import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

interface UpdateBody {
    currentLesson: number,
    currentChapter: string
}

export const updateEverydayProgress = async (updateBody: UpdateBody) => {
    return await axios.post(`${apiUrl}/everyday`, updateBody, options);
}