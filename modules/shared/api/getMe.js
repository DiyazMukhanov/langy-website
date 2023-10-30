import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getMe = async () => {
    return await axios.get(`${apiUrl}/users/me`, options);
}