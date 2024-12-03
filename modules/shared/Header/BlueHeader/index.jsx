import styles from "../Header.module.scss";
import ButtonClose from "../../../../public/images/Button-close.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function BlueHeader() {
  const router = useRouter();

  return (
    <>
      <div className={styles.blueContainer}>
        <p onClick={() => router.push("/")}>На главную</p>
        <div className={styles.headerRight}></div>
      </div>

      <div className={styles.blueContainerMobile}>
        <div className={styles.logo}>
          <p onClick={() => router.push("/")}>На главную</p>
        </div>
      </div>
    </>
  );
}
