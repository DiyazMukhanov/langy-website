import { useRef, useState } from "react";
import styles from "./../Students.module.scss";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "@/ui-kit/Pagination";
import { User } from "../../types/users";
import { useRouter } from "next/router";
import { AdminLayout } from "../../AdminLayout";
import { useDispatch } from "react-redux";
import { setProfile } from "@/store/admin/studentProfileSlice";
import { getStudentsWithLessons } from "../shared/api/getStudentsWithLessons";

export default function StudentsWithLessons() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const router = useRouter();

  const { isPending, error, data } = useQuery({
    queryKey: ["studentsWithLessons", currentPage],
    queryFn: () => getStudentsWithLessons(10, currentPage),
  });

  const onPageChangeHandler = (newCurrentPage) => {
    setCurrentPage(newCurrentPage);
  };

  if (isPending) {
    return <div>Подождите...</div>;
  }

  if (error) return "Oooops, перезагрузите...";

  const openStudentProfileHandler = (student: User) => {
    dispatch(
      setProfile({
        _id: student._id,
        name: student.name,
        email: student.email,
        gender: student.gender,
      })
    );

    router.push(`/admin/student/${student._id}`);
  };

  return (
    <AdminLayout>
      <div className={styles.container}>
        <h2>Студенты с уроками</h2>
      </div>
      <div className={styles.usersContainer}>
        {data?.data?.data.map((user: User) => (
          <div onClick={() => openStudentProfileHandler(user)}>
            <span>{user.name} </span>
            <span>{user._id} </span>
            <span>{user.email} </span>
            <span>{user?.package?.lessonsQuantity} уроков</span>
          </div>
        ))}
        <Pagination
          onPageChange={onPageChangeHandler}
          totalCount={data?.data.totalCount}
          siblingCount={1}
          currentPage={currentPage}
          pageSize={10}
        />
      </div>
    </AdminLayout>
  );
}
