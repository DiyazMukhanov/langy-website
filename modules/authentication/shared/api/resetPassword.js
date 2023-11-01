import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const resetPassword = async (password, passwordConfirm, token) => {
    const bodyData = {
        password,
        passwordConfirm
    }
    return await axios.patch(`${apiUrl}/users/resetPassword/${token}`, bodyData, options);
}