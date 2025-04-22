import { Button } from "@/ui-kit/Button";
import styles from "./SubscriptionCard.module.scss";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getPackageByStudents } from "../shared/api/getPackageByStudent";

export default function SubscriptionCard({ userData }) {
  const router = useRouter();
  const { isPending, error, data } = useQuery({
    queryKey: ["studentsLessons"],
    queryFn: getPackageByStudents,
  });

  console.log(data?.data?.data?.lessonsQuantity);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const continueHandler = () => {
    router.push("/menu");
  };

  return (
    <div className={styles.cardContainer}>
      <h2>Мои подписки</h2>
      <h3>{data?.data?.data?.lessonsQuantity} уроков</h3>
      {!userData?.isSubscribed && (
        <Button
          variant="standardNextContained"
          className={styles.subscribeButton}
          onClick={() => router.push("/with-teachers/buy-lessons")}
        >
          Приобрести
        </Button>
      )}
      {userData?.isSubscribed && (
        <Button
          variant="standardNextContained"
          onClick={continueHandler}
          className={styles.subscribeButton}
        >
          Продолжить обучение
        </Button>
      )}
    </div>
  );
}
