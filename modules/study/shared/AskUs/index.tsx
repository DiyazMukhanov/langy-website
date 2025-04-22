import styles from "./AskUs.module.scss";
import { FaWhatsapp } from "react-icons/fa";

export const AskUs = () => {
  return (
    <div className={styles.askUsContainer}>
      <span>Задайте нам вопрос</span>
      <a
        href={`https://api.whatsapp.com/send?phone=+77078805125`}
        target="_blank"
      >
        <div className={styles.whatsIcon}>
          <FaWhatsapp />
        </div>
      </a>
    </div>
  );
};
