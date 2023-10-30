import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const createServiceRequest = async (requestBody) => {
    return await axios.post(`${apiUrl}/services`, requestBody, options);
}