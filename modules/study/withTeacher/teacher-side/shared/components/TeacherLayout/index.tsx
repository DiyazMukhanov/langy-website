import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TeacherLayout.module.scss";
import { clearTeacher, setTeacher } from "@/store/teacher/teacherSlice";
import { userLogout } from "@/modules/shared/api/userLogout";
import { getTeacherData } from "../../api/getTeacherData";

export const TeacherLayout = ({ children }) => {
  const dispatch = useDispatch();
  const teacher = useSelector((state: any) => state.teacher.teacherData);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!teacher?.isLoggedIn) {
      getMyDataAsTeacher();
    } else {
      setIsLoading(false);
    }

    async function getMyDataAsTeacher() {
      try {
        const response = await getTeacherData();
        const data = response?.data?.teacher;

        if (response) {
          dispatch(
            setTeacher({
              id: data._id,
              name: data.name,
              surname: data.surname,
              description: data.description,
              email: data.email,
              photo: data.photo,
              gender: data.gender,
              isLoggedIn: true,
            })
          );

          setIsLoading(false);
        }
      } catch (err) {
        router.push("/with-teachers/teacher-login");
        console.log(err);
      }
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
        <a onClick={() => router.push("/with-teachers/teacher-main")}>
          На главную
        </a>
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
