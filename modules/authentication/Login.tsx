import styles from "./Login.module.scss";
import ButtonClose from "../../public/images/Button-close.svg";
import Google from "../../public/images/Google.svg";
import { Button } from "@/ui-kit/Button";
import { Typography } from "@/ui-kit/Typography";
import { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { loginUser } from "./shared/api/loginUser";
import { useRouter } from "next/router";

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [userNotExists, setUserNotExists] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormData>();

  const watchedEmail = watch("email");
  const watchedPassword = watch("password");

  let serverUrl;
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
    serverUrl = `http://localhost:3000`;
  } else {
    serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  }

  const onSubmit = async (data: LoginFormData) => {
    setUserNotExists(false);
    setIsLoading(true);

    try {
      const userData = await loginUser(data);

      if (userData) {
        if (userData?.data?.data?.user?.role === "manager") {
          setIsLoading(false);
          router.push("/admin/main");
        }

        if (userData?.data?.data?.user?.levelChecked === true) {
          if (
            userData?.data?.data?.user?.currentLesson !== 0 &&
            userData?.data?.data?.user?.currentChapter !== "no"
          ) {
            router.push(
              `/lessons/lesson${userData?.data?.data?.user?.currentLesson}/${userData?.data?.data?.user?.currentChapter}`
            );
            setIsLoading(false);
          } else {
            if (userData?.data?.data?.user?.level === "preIntermediate") {
              router.push("/lessons/lesson9/video");
              setIsLoading(false);
            }

            if (userData?.data?.data?.user?.level === "intermediate") {
              router.push("/lessons/lesson17/video");
              setIsLoading(false);
            }

            if (userData?.data?.data?.user?.level === "elementary") {
              router.push("/lessons/lesson1/video");
              setIsLoading(false);
            }

            if (userData?.data?.data?.user?.level === "beginner") {
              router.push("/");
              setIsLoading(false);
            }
          }
        } else {
          setIsLoading(false);
          router.push("/menu");
        }
      }
    } catch (error) {
      setIsLoading(false);
      setUserNotExists(true);
    }
  };

  const goToSignUpHandler = () => {
    router.push("/authorization/registration");
  };

  const goToMainHandler = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ButtonClose className={styles.close} onClick={goToMainHandler} />
        <Button variant="standardAuthOutlined" onClick={goToSignUpHandler}>
          Регистрация
        </Button>
      </div>

      <div className={styles.formContainer}>
        <Typography size="small" element="h2" className={styles.formHeading} onClick={() => {}}>
          Вход
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputs}>
            <input
              placeholder="Email"
              type="email"
              id="user-text-field"
              className={classNames(styles.input, {
                [styles.errorInput]: errors.email,
              })}
              {...register("email", {
                required: "Введите email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Введите валидный email",
                },
              })}
              name="email"
              autoComplete="email"
            />
            <input
              placeholder="Пароль"
              type="password"
              id="password-text-field"
              className={classNames(styles.input, {
                [styles.errorInput]: errors.password,
              })}
              {...register("password", {
                required: "Введите пароль",
                minLength: {
                  value: 6,
                  message: "Пароль должен содержать минимум 6 символов",
                },
              })}
              name="password"
              autoComplete="current-password"
            />
          </div>
          
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}
          {errors.password && (
            <p className={styles.errorMessage}>{errors.password.message}</p>
          )}
          
          <p
            className={styles.forgotPassword}
            onClick={() => router.push("/authorization/forgot")}
          >
            Забыли пароль
          </p>
          
          <Button type="submit" variant="authLargeContained" disabled={isLoading}>
            Войти
          </Button>
        </form>
        
        <Button variant="authLargeContained" onClick={goToSignUpHandler}>
          Регистрация
        </Button>
      </div>

      <div className={styles.existContainer}>
        {userNotExists && <p className={styles.exist}>Неверные данные!</p>}
        {isLoading && <p className={styles.exist}>Идёт вход...</p>}
      </div>
    </div>
  );
}
