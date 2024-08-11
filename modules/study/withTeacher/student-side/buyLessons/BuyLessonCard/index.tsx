import styles from "./BuyLessonCard.module.scss";
import classNames from "classnames";

type Props = {
  packageText: string;
  priceText: string;
  color: string;
};

export const BuyLessonCard = ({ packageText, priceText, color }: Props) => {
  return (
    <div className={classNames(styles.container, styles[color])}>
      <div className={styles.packageBlock}>{packageText}</div>
      <p className={styles.priceBlock}>{priceText}</p>
    </div>
  );
};
