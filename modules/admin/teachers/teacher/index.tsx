import { getDateAndTime } from "@/utils/getDateAndTime";
import { AdminLayout } from "../../AdminLayout";
import { useTeacher } from "../shared/hooks/useTeacher";
import styles from "./Teacher.module.scss";
import { useState } from "react";
import { Pagination } from "@/ui-kit/Pagination";

export default function Teacher() {
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbacksCurrentPage, setfeedbacksCurrentPage] = useState(1);
  const [feeInput, setFeeInput] = useState("");

  const {
    teacherIsPending,
    teacherError,
    teacherData,
    compensationsIsPending,
    compensationsError,
    compensationsData,
    feedbacksIsPending,
    feedbacksError,
    feedbacksData,
    compensateTeacherHandler,
    updateTeacherFeeHandler,
    activateTeacherHandler,
    inactivateTeacherHandler,
  } = useTeacher(currentPage, feedbacksCurrentPage);

  const onPageChangeHandler = (newCurrentPage: number) => {
    setCurrentPage(newCurrentPage);
  };

  const onFeedbackPageChangeHandler = (newCurrentPage: number) => {
    setfeedbacksCurrentPage(newCurrentPage);
  };

  const compensateHandler = () => {
    const confirmCancel = window.confirm(
      "Вы точно хотите провести компенсацию?"
    );

    if (confirmCancel) {
      compensateTeacherHandler();
    }
  };

  const activateHandler = () => {
    const confirmActivate = window.confirm(
      "Вы точно хотите активировать учителя?"
    );

    if (confirmActivate) {
      activateTeacherHandler();
    }
  };

  const inactivateHandler = () => {
    const confirmInactivate = window.confirm(
      "Вы точно хотите де-активировать учителя?"
    );

    if (confirmInactivate) {
      inactivateTeacherHandler();
    }
  };

  const updateFeeHandler = () => {
    if (feeInput) {
      const confirmCancel = window.confirm(
        "Вы точно хотите провести обновить ставку учителя?"
      );

      if (confirmCancel) {
        updateTeacherFeeHandler(Number(feeInput));
      }
    }
  };

  if (teacherIsPending) return "Loading teacher data...";

  if (teacherError) return "Ooops...";

  return (
    <AdminLayout>
      <div className={styles.teacherData}>
        <div>ID учителя: {teacherData?.data?.data.teacher._id}</div>
        <div>
          Имя учителя: {teacherData?.data?.data.teacher.name}{" "}
          {teacherData?.data?.data.teacher.surname}
        </div>
        <div>Пол учителя: {teacherData?.data?.data.teacher.gender}</div>
        <div>Email учителя: {teacherData?.data?.data.teacher.email}</div>
        <div>
          Активный: {teacherData?.data?.data.teacher.isActive ? "Да" : "Нет"}
        </div>
        <div className={styles.activateBtns}>
          <button onClick={activateHandler}>Активировать учителя</button>
          <button onClick={inactivateHandler}>Де-активировать учителя</button>
        </div>
      </div>
      <div className={styles.teacherAccount}>
        <h3>Счет учителя</h3>
        <div>
          Заработал после последней компенсации:{" "}
          {teacherData?.data?.data.teacherAccount.earned}
        </div>
        <button onClick={compensateHandler}>
          Провести компенсацию учителя
        </button>
        <div>
          Дата последней компенсации:{" "}
          {
            getDateAndTime(
              teacherData?.data?.data.teacherAccount.lastCompensated
            ).date
          }{" "}
          {
            getDateAndTime(
              teacherData?.data?.data.teacherAccount.lastCompensated
            ).time
          }
        </div>
      </div>
      <div className={styles.updateFeeBlock}>
        <div>Ставка учителя: {teacherData?.data?.data.fee}</div>
        <input
          type="text"
          onChange={(e) => setFeeInput(e.currentTarget.value)}
        />
        <button onClick={updateFeeHandler}>Обновить ставку учителя</button>
      </div>
      <div className={styles.compensations}>
        <div className={styles.compensationsContainer}>
          <h3>Компенсации:</h3>
          {compensationsData?.data?.compensations.map((compensation) => (
            <div className={styles.compensation}>
              <div>ID компенсации: {compensation._id}</div>
              <div>
                Дата компенсации{" "}
                {getDateAndTime(compensation.dateOfCompensation).date}{" "}
                {getDateAndTime(compensation.dateOfCompensation).time}
              </div>
              <div>За количество уроков: {compensation.lessonsQuantity}</div>
            </div>
          ))}
        </div>
        <Pagination
          onPageChange={onPageChangeHandler}
          totalCount={compensationsData?.data?.totalCount}
          siblingCount={1}
          currentPage={currentPage}
          pageSize={5}
        />
      </div>
      <div className={styles.feedbacks}>
        <h3>Отзывы об учителе:</h3>
        {feedbacksData?.data?.data.map((feedback) => (
          <div>
            <div>{feedback.feedback}</div>
            <div>{getDateAndTime(feedback.createdAt).date}</div>
          </div>
        ))}
        <Pagination
          onPageChange={onFeedbackPageChangeHandler}
          totalCount={feedbacksData?.data?.totalCount}
          siblingCount={1}
          currentPage={feedbacksCurrentPage}
          pageSize={5}
        />
      </div>
    </AdminLayout>
  );
}
