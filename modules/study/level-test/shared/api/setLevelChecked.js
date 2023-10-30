import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const setLevelChecked = async () => {
    const bodyData = {
        levelChecked: true
    }
    return await axios.patch(`${apiUrl}/users/me`, bodyData, options);
}