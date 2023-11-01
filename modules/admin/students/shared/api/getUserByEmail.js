import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getUserByEmail = async (email) => {
    return await axios.get(`${apiUrl}/users/byEmail/${email}`, options);
}