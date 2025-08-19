import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Forgot.module.scss";
import classNames from "classnames";
import { Button } from "@/ui-kit/Button";
import { forgotPassword } from "./shared/api/forgotPassword";

interface ForgotFormData {
  email: string;
}

const Forgot = () => {
  const router = useRouter();
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError: setFormError,
  } = useForm<ForgotFormData>();

  const onSubmit = async (data: ForgotFormData) => {
    setIsLoading(true);

    try {
      await forgotPassword(data.email);
      setEmailSent(true);
    } catch (err) {
      console.error("Password reset error:", err);
      setFormError("email", {
        type: "server",
        message: "Произошла ошибка при сбросе пароля",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className={styles.complete}>
        Ссылка для сброса отправлена на указанный почтовый ящик
        <Button variant="authLargeContained" onClick={() => router.push("/")}>
          На главную
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.paragraph}>Сброс пароля</p>
        <div className={styles.formBlock}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Укажите ваш почтовый адрес"
            className={classNames(styles.input, {
              [styles.warningInput]: errors.email,
            })}
            {...register("email", {
              required: "Введите почтовый адрес!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Введите валидный почтовый адрес!",
              },
            })}
          />
          {errors.email && (
            <p className={styles.warning}>{errors.email.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="authLargeContained"
          className={styles.button}
          disabled={isLoading}
        >
          Сбросить пароль
        </Button>
        
        {isLoading && (
          <p className={styles.warning}>Идёт сброс вашего пароля...</p>
        )}
      </form>
    </div>
  );
};

export default Forgot;
