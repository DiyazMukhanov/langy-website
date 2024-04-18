import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TeacherLayout.module.scss";
import { clearTeacher } from "@/store/teacher/teacherSlice";
import { userLogout } from "@/modules/shared/api/userLogout";

export const TeacherLayout = ({ children }) => {
  const dispatch = useDispatch();
  const teacher = useSelector((state: any) => state.teacher.teacherData);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!teacher?.isLoggedIn) {
      router.push("/with-teachers/teacher-login");
    } else {
      setIsLoading(false);
    }
  }, [teacher]);

  const logOutHandler = async () => {
    try {
      setIsLoading(true);
      await userLogout();
      dispatch(clearTeacher());
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) return "Loading...";
  return (
    <>
      <div className={styles.header}>
        <a>На главную</a>
        <div className={styles.rightBlock}>
          <span>{teacher?.name}</span>
          <span>{teacher?.surname}</span>
          <span>{teacher?.email}</span>
          <a onClick={logOutHandler}>Выход</a>
        </div>
      </div>

      {children}
    </>
  );
};
