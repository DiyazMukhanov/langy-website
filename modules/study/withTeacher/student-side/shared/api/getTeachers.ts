import axios from 'axios';
import { apiUrl, options } from '@/modules/shared/api/common';

export const getTeachersAsStudent = async () => {
    return await axios.get(`${apiUrl}/students/teachers`, options);
}