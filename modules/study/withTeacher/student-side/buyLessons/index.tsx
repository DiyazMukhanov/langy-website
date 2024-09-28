import { Button } from "@/ui-kit/Button";
import { BuyLessonCard } from "./BuyLessonCard";
import WithTeachersLayout from "../shared/withTeachersLayout";
import styles from "./BuyLessons.module.scss";
import { PACKAGES } from "./packages";

export default function BuyLessons() {
  return (
    <WithTeachersLayout tabName="addLessons">
      <div className={styles.container}>
        {PACKAGES.map((packageItem) => (
          <div
            className={styles.packageBlock}
            style={{ borderColor: packageItem.color }}
          >
            <BuyLessonCard
              packageText={packageItem.packageText}
              priceText={packageItem.priceText}
              color={packageItem.color}
            />
            <Button variant="teachers" className={styles.btnBuy}>
              Приобрести
            </Button>
          </div>
        ))}
      </div>
    </WithTeachersLayout>
  );
}
