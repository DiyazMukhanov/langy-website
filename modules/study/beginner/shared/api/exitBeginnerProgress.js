import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const exitBeginnerProgress = async () => {
    return await axios.patch(`${apiUrl}/beginner/exit`, {}, options);
}