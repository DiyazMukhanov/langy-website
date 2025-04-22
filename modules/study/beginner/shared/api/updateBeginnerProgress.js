import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const updateBeginnerProgress = async (updateBody) => {
    return await axios.patch(`${apiUrl}/beginner`, updateBody, options);
}