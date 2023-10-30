import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const loginUser = async (bodyData) => {
    return await axios.post(`${apiUrl}/users/login`, bodyData, options)
}