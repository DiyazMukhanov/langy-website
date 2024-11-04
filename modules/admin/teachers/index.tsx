import { useQuery } from "@tanstack/react-query";
import { AdminLayout } from "../AdminLayout";
import styles from "./Teachers.module.scss";
import { getTeachers } from "../shared/api/getTeachers";
import { useState } from "react";
import { Button } from "@/ui-kit/Button";
import { Pagination } from "@/ui-kit/Pagination";
import { useRouter } from "next/router";
import { getTeachersWithFutureLessons } from "../shared/api/getTeachersWithFutureLessons";

type Teacher = {
  _id: string;
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  photo: string;
  gender: string;
  description: string;
  isActive: boolean;
};

export default function Teachers() {
  const [email, setEmail] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [iswithLessonsOnly, setIsWithLessonsOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const onPageChangeHandler = (newCurrentPage: number) => {
    setCurrentPage(newCurrentPage);
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["teachers", currentPage, email, iswithLessonsOnly],
    queryFn: () => {
      if (!iswithLessonsOnly) {
        return getTeachers(email, currentPage);
      }

      return getTeachersWithFutureLessons();
    },
  });

  if (isPending) return "Teachers loading...";

  if (error) return "Ooops... please reload...";

  const showByEmailHanlder = () => {
    setIsWithLessonsOnly(false);
    setEmail(emailInput);
  };

  const showAllHanlder = () => {
    setIsWithLessonsOnly(false);
    setEmail(null);
  };

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
        onClick={showByEmailHanlder}
        className={styles.btn}
      >
        Найти по email
      </Button>
      <Button
        variant="teachers"
        onClick={showAllHanlder}
        className={styles.btn}
      >
        Показать всех
      </Button>
      <Button
        variant="teachers"
        onClick={() => setIsWithLessonsOnly(true)}
        className={styles.btn}
      >
        Учителя с предстоящим уроками
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
            <div>телефон: {teacher.phoneNumber}</div>
            <div>
              активен:{" "}
              {teacher.isActive ? (
                <span style={{ color: "green" }}>Да</span>
              ) : (
                <span style={{ color: "red" }}>Нет</span>
              )}
            </div>
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
