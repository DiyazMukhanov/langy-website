import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getEverydayProgress = async () => {
    return await axios.get(`${apiUrl}/everyday`, options);
}