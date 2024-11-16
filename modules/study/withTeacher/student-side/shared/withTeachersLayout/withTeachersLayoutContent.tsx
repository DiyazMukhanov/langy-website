import Header from "@/modules/shared/Header";
import styles from "./WithTeachersLayout.module.scss";
import { Button } from "@/ui-kit/Button";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getPackage } from "../api/getPackage";
import { useDispatch } from "react-redux";
import { setPackage } from "@/store/student/packageSlice";
import classNames from "classnames";
import Modal from "@/modules/shared/Modal/Modal";
import { useState } from "react";
import Sandwich from "../../../../../../public/images/Sandwich-black.svg";
import ButtonClose from "../../../../../../public/images/Button-close.svg";

type TabName =
  | "progress"
  | "chooseTeacher"
  | "plannedLessons"
  | "addLessons"
  | "download";

type Props = {
  children: React.ReactNode;
  tabName?: TabName;
};

export default function WithTeachersLayoutContent({
  children,
  tabName,
}: Props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isModalOpened, setIsModalOpened] = useState(false);

  const { isPending, error, data, isSuccess } = useQuery({
    queryKey: ["package"],
    queryFn: getPackage,
  });

  const modalCloseHandler = () => {
    setIsModalOpened(false);
  };

  const modalOpenHandler = () => {
    setIsModalOpened(true);
  };

  if (isPending) return "Получение пакета уроков";

  if (error) return "Oooops, перезагрузите...";

  if (isSuccess) {
    dispatch(setPackage(data?.data?.data?.lessonsQuantity));

    return (
      <div className={styles.overlay}>
        <Modal isOpen={isModalOpened} onClose={modalCloseHandler}>
          <ButtonClose onClick={modalCloseHandler} />
          <div className={styles.modalContainer}>
            {/* <Button
              variant="bottomOutlined"
              className={classNames(styles.tabBtn, {
                [styles.currentTab]: tabName === "progress",
              })}
              onClick={() => router.push("/with-teachers/student-progress")}
            >
              Мой прогресс
            </Button> */}
            <Button
              variant="bottomOutlined"
              className={classNames(styles.tabBtn, {
                [styles.currentTab]: tabName === "chooseTeacher",
              })}
              onClick={() => router.push("/with-teachers/teachers")}
            >
              Выбрать учителя
            </Button>
            {/* <Button
              variant="bottomOutlined"
              className={classNames(styles.tabBtn, {
                [styles.currentTab]: tabName === "plannedLessons",
              })}
              onClick={() => router.push("/with-teachers/my-lessons")}
            >
              Запланированные уроки
            </Button> */}
            {/* <Button
              variant="bottomOutlined"
              className={classNames(styles.tabBtn, {
                [styles.currentTab]: tabName === "addLessons",
              })}
              onClick={() => router.push("/with-teachers/buy-lessons")}
            >
              Пополнить уроки
            </Button> */}
            <Button
              variant="bottomOutlined"
              className={classNames(styles.tabBtn, {
                [styles.currentTab]: tabName === "download",
              })}
              onClick={() => router.push("/with-teachers/download")}
            >
              Скачать материалы
            </Button>
          </div>
        </Modal>
        <div className={styles.content}>
          <Header variant="blue" isEasyEnglish={false} />
          <div className={styles.top}>
            {/* <Button
              variant="bottomOutlined"
              className={classNames(styles.tabBtn, {
                [styles.currentTab]: tabName === "progress",
              })}
              onClick={() => router.push("/with-teachers/student-progress")}
            >
              Мой прогресс
            </Button> */}
            <Button
              variant="bottomOutlined"
              className={classNames(styles.tabBtn, {
                [styles.currentTab]: tabName === "chooseTeacher",
              })}
              onClick={() => router.push("/with-teachers/teachers")}
            >
              Выбрать учителя
            </Button>
            {/* <Button
              variant="bottomOutlined"
              className={classNames(styles.tabBtn, {
                [styles.currentTab]: tabName === "plannedLessons",
              })}
              onClick={() => router.push("/with-teachers/my-lessons")}
            >
              Запланированные уроки
            </Button> */}
            {/* <Button
              variant="bottomOutlined"
              className={classNames(styles.tabBtn, {
                [styles.currentTab]: tabName === "addLessons",
              })}
              onClick={() => router.push("/with-teachers/buy-lessons")}
            >
              Пополнить уроки
            </Button> */}
            <Button
              variant="bottomOutlined"
              className={classNames(styles.tabBtn, {
                [styles.currentTab]: tabName === "download",
              })}
              onClick={() => router.push("/with-teachers/download")}
            >
              Скачать материалы
            </Button>
          </div>
          <Sandwich onClick={modalOpenHandler} className={styles.sandwich} />
          {children}
        </div>
      </div>
    );
  }
}
