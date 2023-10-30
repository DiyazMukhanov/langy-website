import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const subscribeMe = async (subscribeBody) => {
    return await axios.post(`${apiUrl}/users/payment`, subscribeBody, options);
}