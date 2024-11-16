import styles from "./AskUs.module.scss";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

export const AskUs = () => {
  return (
    <div className={styles.askUsContainer}>
      <span>Задайте вопрос или запишитесь в группу</span>
      <div className={styles.iconsContainer}>
        <a
          href="https://t.me/diyaz_mukhanov" // Replace with your actual Telegram username
          target="_blank"
        >
          <div className={styles.telegramIcon}>
            <FaTelegram />
          </div>
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=+77078805125`}
          target="_blank"
        >
          <div className={styles.whatsIcon}>
            <FaWhatsapp />
          </div>
        </a>
      </div>
    </div>
  );
};
