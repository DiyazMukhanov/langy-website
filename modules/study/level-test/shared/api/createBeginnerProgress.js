import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const createBeginnerProgress = async () => {
    return await axios.post(`${apiUrl}/beginner`, {}, options);
}