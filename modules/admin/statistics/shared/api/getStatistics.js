import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getStatistics = async () => {
    return await axios.get(`${apiUrl}/users/statistics`, options);
}