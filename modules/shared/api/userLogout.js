import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const userLogout = async () => {
    return await axios.get(`${apiUrl}/users/logOut`, options);
}