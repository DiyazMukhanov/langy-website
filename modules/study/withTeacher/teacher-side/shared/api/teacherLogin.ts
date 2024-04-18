import axios from "axios";
import { apiUrl, options } from "@/modules/shared/api/common";
import { TeacherLoginInputs } from "../../TeacherLogin";

export const teacherLogin = async (loginData: TeacherLoginInputs) => {
  return await axios.post(
    `${apiUrl}/teachers/login`,
    { email: loginData.email, password: loginData.password },
    options
  );
};
