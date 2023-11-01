import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const resetProgress = async () => {
    return await axios.delete(`${apiUrl}/users/progress`, options);
}