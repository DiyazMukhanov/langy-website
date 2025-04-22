import styles from "./Card.module.scss";
import { useRouter } from "next/router";
import Star from "public/icons/star.svg";

type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}
