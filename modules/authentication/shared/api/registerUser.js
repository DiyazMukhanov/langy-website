import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const registerUser = async (bodyData) => {
    return await axios.post(`${apiUrl}/users/signup`, bodyData, options)
}