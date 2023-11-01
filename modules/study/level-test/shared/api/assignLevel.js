import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const assignLevel = async (level) => {
    const bodyData = {
        level: level
    }
    return await axios.post(`${apiUrl}/users/addMultipleProgresses`, bodyData, options);
}