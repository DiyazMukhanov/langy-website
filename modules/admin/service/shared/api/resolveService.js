import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const resolveService = async (id) => {
    return await axios.post(`${apiUrl}/services/${id}`, {}, options);
}