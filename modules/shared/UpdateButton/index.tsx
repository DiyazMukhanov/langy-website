import Image from "next/image";
import styles from "./UpdateButton.module.scss";
import Update from "../../../public/images/update.svg";

export default function UpdateButton({ onClick }) {
  return <Update onClick={onClick} className={styles.btn} />;
}
