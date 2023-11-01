import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getProgressData = async () => {
    return await axios.get(`${apiUrl}/users/progress`, options);
}
