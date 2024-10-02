import { Button } from "@/ui-kit/Button";
import { BuyLessonCard } from "./BuyLessonCard";
import WithTeachersLayout from "../shared/withTeachersLayout";
import styles from "./BuyLessons.module.scss";
import { PACKAGES } from "./packages";
import { useState } from "react";
import { subscribeMe } from "@/modules/profile/Subscription/shared/api/subscribeMe";
import { useRouter } from "next/router";

export default function BuyLessons() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const subscribeHandler = async (plan) => {
    setIsLoading(true);
    try {
      const response = await subscribeMe(plan);
      if (response) {
        localStorage.setItem("paymentId", response?.data?.paymentId);
        localStorage.setItem("lessons", plan?.lessons);

        router.push(response?.data?.redirectUrl);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("Произошла ошибка!");
    }
  };
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
            <Button
              variant="teachers"
              className={styles.btnBuy}
              onClick={() =>
                subscribeHandler({
                  amount: packageItem.price,
                  lessons: packageItem.lessonsQuantity,
                })
              }
            >
              Приобрести
            </Button>
          </div>
        ))}
      </div>
    </WithTeachersLayout>
  );
}
