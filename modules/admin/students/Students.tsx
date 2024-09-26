import { useRef, useState } from "react";
import styles from "./Students.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "./shared/api/getAllUsers";
import { Pagination } from "@/ui-kit/Pagination";
import { User } from "../types/users";
import { useRouter } from "next/router";
import { AdminLayout } from "../AdminLayout";
import { useDispatch } from "react-redux";
import { setProfile } from "@/store/admin/studentProfileSlice";

export default function Students() {
  const emailRef = useRef(null);
  const [emailInput, setEmailInput] = useState(null);
  const [email, setEmail] = useState(emailInput);
  const [studentId, setStudentId] = useState(null);
  const [studentIdValue, setStudentIdValue] = useState(studentId);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const router = useRouter();

  const inputChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const idInputChangeHandler = (e) => {
    setStudentIdValue(e.target.value);
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["students", currentPage, email, studentId],
    queryFn: () => getAllUsers(10, currentPage, email, studentId),
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
        <div className={styles.searchBlock}>
          <div className={styles.searchCard}>
            <p>Email</p>
            <input
              type="text"
              ref={emailRef}
              onChange={inputChangeHandler}
            ></input>
            <button onClick={() => setEmail(emailInput)}>Search</button>
          </div>
          <div className={styles.searchCard}>
            <p>Id</p>
            <input
              type="text"
              ref={emailRef}
              onChange={idInputChangeHandler}
            ></input>
            <button onClick={() => setStudentId(studentIdValue)}>Search</button>
          </div>
        </div>
      </div>
      <div className={styles.usersContainer}>
        {data?.data?.data.map((user: User) => (
          <div onClick={() => openStudentProfileHandler(user)}>
            <span>{user.name} </span>
            <span>{user._id} </span>
            <span>{user.email} </span>
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
