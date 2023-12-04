import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getAudioMaterials = async (lessonNumber: number) => {
    return await axios.get(`${apiUrl}/users/audioLessons/${lessonNumber}`, options);
}