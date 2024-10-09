import { Pagination } from "@/ui-kit/Pagination";
import { useState } from "react";
import { getMyCompensations } from "../shared/api/getMyCompensations";
import { useQuery } from "@tanstack/react-query";
import { TeacherLayout } from "../shared/components/TeacherLayout";
import styles from "./TeacherCompensations.module.scss";

const TeacherCompensations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isPending, error, data } = useQuery({
    queryKey: ["compensations", currentPage],
    queryFn: () => getMyCompensations(10, currentPage),
  });

  const onPageChangeHandler = (newCurrentPage) => {
    setCurrentPage(newCurrentPage);
  };

  const formatDateAndTime = (dateString) => {
    const date = new Date(dateString);

    // Format date as MM/DD/YYYY
    const formattedDate = date.toLocaleDateString("en-US", {
      timeZone: "Asia/Karachi", // GMT+5
    });

    // Format time in GMT+5
    const formattedTime = date.toLocaleTimeString("en-US", {
      timeZone: "Asia/Karachi", // GMT+5
      hour: "2-digit",
      minute: "2-digit",
    });

    return { formattedDate, formattedTime };
  };

  if (isPending) {
    return <>Получаем ваши компенсации...</>;
  }

  return (
    <TeacherLayout>
      <div className={styles.container}>
        <h2>Мои компенсации</h2>
        {data?.data?.compensations.map((comp) => (
          <div className={styles.compensationContainer}>
            <span>
              Дата: {formatDateAndTime(comp.dateOfCompensation).formattedDate}
            </span>
            <span>
              Время: {formatDateAndTime(comp.dateOfCompensation).formattedTime}
            </span>
            <span>За количество уроков: {comp.lessonsQuantity}</span>
          </div>
        ))}
      </div>
      <Pagination
        onPageChange={onPageChangeHandler}
        totalCount={data?.data.totalCount}
        siblingCount={1}
        currentPage={currentPage}
        pageSize={10}
      />
    </TeacherLayout>
  );
};

export default TeacherCompensations;
