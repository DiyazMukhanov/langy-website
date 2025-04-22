import styles from "./Footer.module.scss";
import Image from "next/image";
import Logo from "../../../public/images/Logo.svg";
import Visa from "../../../public/images/visa.png";
import Service from "../../../public/images/Service.svg";
import { Button } from "@/ui-kit/Button";
import router from "next/router";
import Up from "../../../public/images/Up.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Logo />
        <div className={styles.service}>
          <Service />
          <p onClick={() => router.push("/service")}>Служба поддержки</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p onClick={() => router.push("/agreement")}>
          Публичный договор-оферта
        </p>
        <p onClick={() => router.push("/confindentiality")}>
          Политика конфиденциальности
        </p>
        <p onClick={() => router.push("/procedure")}>
          Описание процедуры оплаты
        </p>
        <p>email: admin@langy.su контактный телефон: +7 707 880 51 25</p>
        <p>ИП Муханов</p>
        <Image priority src={Visa} className={styles.visa} alt={""} />
      </div>
    </footer>
  );
}
