import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getAllServices = async (page) => {
    return await axios.get(`${apiUrl}/services?page=${page}&limit=10`, options);
}