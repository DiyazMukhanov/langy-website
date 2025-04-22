import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const saveSubscriptionInBd = async (subscribeBody) => {
    return await axios.patch(`${apiUrl}/users/subscribe`, subscribeBody, options);
}