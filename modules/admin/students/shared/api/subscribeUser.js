import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const subscribeUser = async (subscribeBody, id) => {
    return await axios.patch(`${apiUrl}/users/subscribeById/${id}`, subscribeBody, options);
}