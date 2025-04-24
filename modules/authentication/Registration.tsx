import { useForm } from "react-hook-form";
import styles from "./Registration.module.scss";
import { Button } from "@/ui-kit/Button";
import { Typography } from "@/ui-kit/Typography";
import { useRouter } from "next/router";
import classNames from "classnames";
import { registerUser } from "./shared/api/registerUser";
import { updatePackageQuantity } from "./shared/api/updatePackageQuantity";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  gender: string;
};

export default function Registration() {
  const router = useRouter();
  const [userExists, setUserExists] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      gender: "male",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (data.password !== data.passwordConfirm) {
      setError("passwordConfirm", {
        type: "manual",
        message: "Пароли не совпадают",
      });
      return;
    }

    try {
      const response = await registerUser(data);

      if (response?.data?.message === "User exists") {
        setUserExists(true);
        return;
      }

      await updatePackageQuantity({ lessonsQuantity: 0 });
      router.push("/menu");
    } catch (error) {
      alert("Ошибка при регистрации. Попробуйте снова.");
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
          <Typography size="small" element="h2" className={styles.formHeading}>
            Создайте аккаунт
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputs}>
              <input
                  placeholder="Имя"
                  {...register("name", { required: "Введите имя" })}
                  className={classNames(styles.input, { [styles.errorInput]: errors.name })}
              />
              {errors.name && <p>{errors.name.message}</p>}

              <input
                  placeholder="Электронная почта"
                  {...register("email", {
                    required: "Введите email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Неверный email",
                    },
                  })}
                  className={classNames(styles.input, { [styles.errorInput]: errors.email })}
              />
              {errors.email && <p>{errors.email.message}</p>}

              <input
                  placeholder="Пароль"
                  type="password"
                  {...register("password", {
                    required: "Введите пароль",
                  })}
                  className={classNames(styles.input, { [styles.errorInput]: errors.password })}
              />
              {errors.password && <p>{errors.password.message}</p>}

              <input
                  placeholder="Повторите пароль"
                  type="password"
                  {...register("passwordConfirm", {
                    required: "Повторите пароль",
                  })}
                  className={classNames(styles.input, { [styles.errorInput]: errors.passwordConfirm })}
              />
              {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}

              <input
                  placeholder="Ваш номер телефона"
                  {...register("phone", {
                    required: "Введите номер",
                  })}
                  className={classNames(styles.input, { [styles.errorInput]: errors.phone })}
              />
              {errors.phone && <p>{errors.phone.message}</p>}

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
                disabled={isSubmitting}
            >
              Зарегистрироваться
            </Button>
          </form>

          {userExists && <p className={styles.exist}>Пользователь уже существует!</p>}
        </div>
      </div>
  );
}
