import Modal from "@/modules/shared/Modal/Modal";
import styles from "./Feedback.module.scss";
import { useForm } from "react-hook-form";
import { StarRating } from "../StarRating";
import { Button } from "@/ui-kit/Button";
import { useFeedback } from "../../shared/hooks/useFeedback";
import { useEffect } from "react";

export const Feedback = ({ isOpen, setIsFeedbackShowing, teacherId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { createNewFeedback, isPending, isSuccess, isError } = useFeedback(
    teacherId,
    1,
    1
  );

  const onFeedbackSubmit = ({ feedback, rating }) => {
    createNewFeedback({ teacherId, feedback, rating });
  };

  // Close modal and show alert on success
  useEffect(() => {
    if (isSuccess) {
      alert("Ваш отзыв отправлен!");
      setIsFeedbackShowing(false);
      reset(); // Reset the form after submission
    }
  }, [isSuccess, setIsFeedbackShowing, reset]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsFeedbackShowing(false)}
      modalClassname={styles.modal}
      isCentral={true}
    >
      <div className={styles.feedbackContainer}>
        <span className={styles.heading}>Ваш отзыв</span>
        <form onSubmit={handleSubmit(onFeedbackSubmit)} className={styles.form}>
          <textarea
            className={styles.textArea}
            {...register("feedback", {
              required: true,
              maxLength: {
                value: 400,
                message: "Отзыв не должен превышать 400 символов",
              },
            })}
          />
          {errors.feedback && (
            <span style={{ color: "red" }}>
              {errors.feedback.type === "required" && "Напишите отзыв"}
              {errors.feedback.type === "maxLength" &&
                "Отзыв не должен превышать 400 символов"}
            </span>
          )}
          <div className={styles.starsContainer}>
            <span>Оцените преподавателя</span>
            <StarRating register={register} setValue={setValue} name="rating" />
          </div>

          {errors.rating && (
            <span style={{ color: "red" }}>Нажмите на звездочку</span>
          )}
          <Button
            type="submit"
            variant="teachers"
            className={styles.btn}
            disabled={isPending}
          >
            Оставить отзыв
          </Button>
        </form>
        {isError && (
          <div className={styles.comment} style={{ color: "red" }}>
            Ошибка отправки отзыва...
          </div>
        )}
      </div>
    </Modal>
  );
};
