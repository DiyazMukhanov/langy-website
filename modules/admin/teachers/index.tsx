import { useQuery } from "@tanstack/react-query";
import { AdminLayout } from "../AdminLayout";
import styles from "./Teachers.module.scss";
import { getTeachers } from "../shared/api/getTeachers";
import { useState } from "react";
import { Button } from "@/ui-kit/Button";
import { Pagination } from "@/ui-kit/Pagination";
import { useRouter } from "next/router";

type Teacher = {
  _id: string;
  name: string;
  surname: string;
  email: string;
  photo: string;
  gender: string;
  description: string;
};

export default function Teachers() {
  const [email, setEmail] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const onPageChangeHandler = (newCurrentPage: number) => {
    setCurrentPage(newCurrentPage);
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["teachers", currentPage, email],
    queryFn: () => {
      return getTeachers(email, currentPage);
    },
  });

  if (isPending) return "Teachers loading...";

  if (error) return "Ooops... please reload...";

  return (
    <AdminLayout>
      <div>
        <h3 className={styles.all}>Всего учителей: {data?.data.totalCount}</h3>
        <a
          className={styles.new}
          onClick={() => router.push("/admin/teachers/new")}
        >
          Добавить нового учителя
        </a>
      </div>
      <input
        type="text"
        className={styles.input}
        onChange={(event) => setEmailInput(event.currentTarget.value)}
      />
      <Button
        variant="teachers"
        onClick={() => setEmail(emailInput)}
        className={styles.btn}
      >
        Найти по email
      </Button>
      <Button
        variant="teachers"
        onClick={() => setEmail(null)}
        className={styles.btn}
      >
        Показать всех
      </Button>
      <div className={styles.teachersContainer}>
        {data?.data?.data.map((teacher: Teacher) => (
          <div
            className={styles.teacher}
            onClick={() => router.push(`/admin/teachers/${teacher._id}`)}
          >
            <div>ID: {teacher._id}</div>
            <div>
              Имя: {teacher.name} {teacher.surname}
            </div>
            <div>email: {teacher.email}</div>
            <div>пол: {teacher.gender}</div>
          </div>
        ))}
        <Pagination
          onPageChange={onPageChangeHandler}
          totalCount={data?.data.totalCount}
          siblingCount={1}
          currentPage={currentPage}
          pageSize={5}
        />
      </div>
    </AdminLayout>
  );
}
