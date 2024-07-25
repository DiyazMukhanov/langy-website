import Modal from "@/modules/shared/Modal/Modal";
import styles from "./Feedback.module.scss";
import { useForm } from "react-hook-form";
import { StarRating } from "../StarRating";
import { Button } from "@/ui-kit/Button";
import { useFeedback } from "../../shared/hooks/useFeedback";

export const Feedback = ({ isOpen, setIsFeedbackShowing, teacherId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { createNewFeedback, isPending, isSuccess, isError } =
    useFeedback(teacherId);

  const onFeedbackSubmit = ({ feedback, rating }) => {
    createNewFeedback({ teacherId, feedback, rating });
    reset();
  };

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
            {...register("feedback", { required: true, maxLength: 80 })}
          />
          {errors.feedback && (
            <span style={{ color: "red" }}>Напишите отзыв</span>
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
        {isSuccess && (
          <div className={styles.comment} style={{ color: "green" }}>
            Ваш отзыв отправлен!
          </div>
        )}
        {isError && (
          <div className={styles.comment} style={{ color: "red" }}>
            Ошибка отправки отзыва...
          </div>
        )}
      </div>
    </Modal>
  );
};
