import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getServiceById = async (id) => {
    return await axios.get(`${apiUrl}/services/${id}`, options);
}