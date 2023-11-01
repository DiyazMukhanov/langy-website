import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const setProgressData = async (progressBody) => {
    return await axios.post(`${apiUrl}/users/addProgress`, progressBody, options);
}