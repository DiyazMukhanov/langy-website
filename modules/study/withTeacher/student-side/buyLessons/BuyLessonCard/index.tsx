import styles from "./BuyLessonCard.module.scss";
import classNames from "classnames";

type Props = {
  packageText: string;
  priceText: string;
  color: string;
  priceForOne: number | null;
};

export const BuyLessonCard = ({
  packageText,
  priceText,
  color,
  priceForOne,
}: Props) => {
  return (
    <div className={classNames(styles.container, styles[color])}>
      <div className={styles.packageBlock}>{packageText}</div>
      <div className={styles.priceBlockContainer}>
        <p className={styles.priceBlock}>{priceText}</p>
        {priceForOne && (
          <p className={styles.priceForOne}>Цена одного урока: {priceForOne}</p>
        )}
      </div>
    </div>
  );
};
