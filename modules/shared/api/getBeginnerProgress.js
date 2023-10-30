import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getBeginnerProgress = async () => {
    return await axios.get(`${apiUrl}/beginner`, options);
}