import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/store/userContext";
import { userLogout } from "../api/userLogout";
import BlueHeader from "./BlueHeader";
import WhiteHeader from "./WhiteHeader/index";

type Props = {
  variant?: string;
  isEasyEnglish?: boolean;
};

export default function Header({ variant, isEasyEnglish }: Props) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const router = useRouter();
  const userCtx = useContext(UserContext);

  const modalCloseHandler = () => {
    setIsModalOpened(false);
  };

  const modalOpenHandler = () => {
    setIsModalOpened(true);
  };

  const goToMainHandler = () => {
    router.push("/");
  };

  if (variant === "blue") {
    return (
      <>
        <BlueHeader
          modalCloseHandler={modalCloseHandler}
          modalOpenHandler={modalOpenHandler}
          goToMainHandler={goToMainHandler}
          isModalOpened={isModalOpened}
        />
      </>
    );
  }

  if (variant === "white") {
    return (
      <>
        <WhiteHeader
          modalCloseHandler={modalCloseHandler}
          modalOpenHandler={modalOpenHandler}
          goToMainHandler={goToMainHandler}
          isModalOpened={isModalOpened}
          isEasyEnglish={isEasyEnglish}
          lessonsSummary={userCtx.lessonsSummary}
        />
      </>
    );
  }
}
