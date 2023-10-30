import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const forgotPassword = async (email) => {
    const bodyData = {
        email
    }
    return await axios.post(`${apiUrl}/users/forgotPassword`, bodyData, options);
}