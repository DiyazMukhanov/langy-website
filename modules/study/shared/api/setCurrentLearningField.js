import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const setCurrentLearningField = async (bodyData) => {
    return await axios.post(`${apiUrl}/users/currentLearningField`, bodyData, options);
}