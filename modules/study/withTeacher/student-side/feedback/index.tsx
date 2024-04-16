import { Button } from "@/ui-kit/Button";
import { useFeedback } from "../shared/hooks/useFeedback";
import WithTeachersLayout from "../shared/withTeachersLayout";
import styles from "./Feedback.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

type Inputs = {
  feedback: string;
};

export default function Feedback() {
  const { createNewFeedback, teacherId, isPending, isSuccess } = useFeedback();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      feedback: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = ({ feedback }) =>
    createNewFeedback({ teacherId, feedback });

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

  return (
    <WithTeachersLayout>
      <div className={styles.feedbackContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input
            {...register("feedback", { required: true })}
            className={styles.input}
          />
          {errors.feedback && <span>Напишите ваш отзыв</span>}
          <Button variant="teachersBook" type="submit" disabled={isPending}>
            Отправить отзыв
          </Button>
          {isPending && <p>Идет отправка...</p>}
          {isSuccess && <p>Ваш отзыв отправлен!</p>}
        </form>
      </div>
    </WithTeachersLayout>
  );
}
