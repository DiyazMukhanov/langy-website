import { useForm } from "react-hook-form";
import styles from "./Registration.module.scss";
import { Button } from "@/ui-kit/Button";
import { Typography } from "@/ui-kit/Typography";
import { useRouter } from "next/router";
import classNames from "classnames";
import { registerUser } from "./shared/api/registerUser";
import { updatePackageQuantity } from "./shared/api/updatePackageQuantity";
import { useState } from "react";

interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  gender: string;
}

export default function Registration() {
  const router = useRouter();
  const [userExists, setUserExists] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    defaultValues: {
      gender: "male",
    },
  });

  const watchedPassword = watch("password");

  const onSubmit = async (data: RegistrationFormData) => {
    if (data.password !== data.passwordConfirm) {
      setError("passwordConfirm", {
        type: "manual",
        message: "Пароли не совпадают",
      });
      return;
    }

    setIsLoading(true);
    setUserExists(false);

    try {
      const response = await registerUser(data);

      if (response?.data?.message === "User exists") {
        setUserExists(true);
        return;
      }

      await updatePackageQuantity({ lessonsQuantity: 0 });
      router.push("/menu");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Ошибка при регистрации. Попробуйте снова.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.close} onClick={() => router.push("/")}>
          ✕
        </button>
        <Button variant="standardAuthOutlined" onClick={() => router.push("/authorization/login")}>
          Войти
        </Button>
      </div>

      <div className={styles.formContainer}>
        <Typography size="small" element="h2" className={styles.formHeading} onClick={() => {}}>
          Создайте аккаунт
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <input
              placeholder="Имя"
              type="text"
              {...register("name", { 
                required: "Введите имя",
                minLength: {
                  value: 2,
                  message: "Имя должно содержать минимум 2 символа"
                }
              })}
              className={classNames(styles.input, { [styles.errorInput]: errors.name })}
            />
            {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}

            <input
              placeholder="Электронная почта"
              type="email"
              {...register("email", {
                required: "Введите email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Введите валидный email",
                },
              })}
              className={classNames(styles.input, { [styles.errorInput]: errors.email })}
            />
            {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}

            <input
              placeholder="Пароль"
              type="password"
              {...register("password", {
                required: "Введите пароль",
                minLength: {
                  value: 6,
                  message: "Пароль должен содержать минимум 6 символов",
                },
              })}
              className={classNames(styles.input, { [styles.errorInput]: errors.password })}
            />
            {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}

            <input
              placeholder="Повторите пароль"
              type="password"
              {...register("passwordConfirm", {
                required: "Повторите пароль",
                validate: (value) => value === watchedPassword || "Пароли не совпадают",
              })}
              className={classNames(styles.input, { [styles.errorInput]: errors.passwordConfirm })}
            />
            {errors.passwordConfirm && <p className={styles.errorMessage}>{errors.passwordConfirm.message}</p>}

            <input
              placeholder="Ваш номер телефона"
              type="tel"
              {...register("phone", {
                required: "Введите номер телефона",
                pattern: {
                  value: /^[\+]?[1-9][\d]{0,15}$/,
                  message: "Введите валидный номер телефона",
                },
              })}
              className={classNames(styles.input, { [styles.errorInput]: errors.phone })}
            />
            {errors.phone && <p className={styles.errorMessage}>{errors.phone.message}</p>}

            <div className={styles.selectContainer}>
              <label>Ваш пол:</label>
              <select {...register("gender")} className={styles.selectInput}>
                <option value="male">Мужчина</option>
                <option value="female">Женщина</option>
              </select>
            </div>
          </div>

          <Button
            type="submit"
            variant="authLargeContained"
            className={styles.buttonRegister}
            disabled={isLoading}
          >
            Зарегистрироваться
          </Button>
        </form>

        {userExists && <p className={styles.exist}>Пользователь уже существует!</p>}
        {isLoading && <p className={styles.exist}>Идёт регистрация...</p>}
      </div>
    </div>
  );
}
