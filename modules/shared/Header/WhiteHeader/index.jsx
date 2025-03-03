import styles from "../Header.module.scss";
import LogoBlue from "../../../../public/images/Logo-blue.svg";
import LogoBlueBottom from "../../../../public/images/Logo-blue-bottom.svg";
import Image from "next/image";
import SandwichBlack from "../../../../public/images/Sandwich-black.svg";
import Modal from "../../Modal/Modal";
import Sidebar from "../../Sidebar";
import ButtonClose from "../../../../public/images/Button-close.svg";
import { useRouter } from "next/router";
import EverydayEnglishSidebar from "@/modules/study/everydayEnglish/EverydayEnglishSidebar/index";
import { Button } from "@/ui-kit/Button";

export default function WhiteHeader({
  modalCloseHandler,
  modalOpenHandler,
  goToMainHandler,
  logOutHandler,
  lessonsSummary,
  firstLetterOfName,
  isModalOpened,
  isEasyEnglish,
}) {
  const router = useRouter();

  return (
    <>
      <div className={styles.whiteContainer}>
        <div className={styles.leftMenuContainer}>
          <span onClick={() => router.push("/menu")} className={styles.menuBtn}>
            Меню
          </span>
        </div>
        <div className={styles.profile}>
          <p className={styles.exit} onClick={logOutHandler}>
            Выйти
          </p>
          <div
            className={styles.circle}
            onClick={() => router.push("/profile")}
          >
            {firstLetterOfName}
          </div>
        </div>
      </div>

      <div className={styles.whiteContainerMobile}>
        <Modal isOpen={isModalOpened} onClose={modalCloseHandler}>
          <div className={styles.modalContainer}>
            <div className={styles.menuContainer}>
              <div
                className={styles.modalLogos}
                onClick={() => router.push("/profile")}
              >
                <p className={styles.goToProfile}>Личный кабинет</p>
              </div>
              <Button variant="menu" onClick={() => router.push("/menu")}>
                Меню
              </Button>
            </div>
            <ButtonClose onClick={modalCloseHandler} />
          </div>
          <div className={styles.sidebarContainer}>
            {!isEasyEnglish ? (
              <Sidebar lessonsSummary={lessonsSummary} />
            ) : (
              <EverydayEnglishSidebar />
            )}
          </div>
        </Modal>
        <SandwichBlack onClick={modalOpenHandler} />
        <div className={styles.modalLogos} onClick={() => router.push("/")}>
          <LogoBlue />
          <LogoBlueBottom />
        </div>
      </div>
    </>
  );
}
