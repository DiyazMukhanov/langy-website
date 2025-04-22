import styles from "./Advantage.module.scss";
import Circle from "../../../public/images/circle.svg";

export default function Advantage({ text }) {
  return (
    <div className={styles.advantage}>
      <Circle />
      <div className={styles.text}>{text}</div>
    </div>
  );
}
