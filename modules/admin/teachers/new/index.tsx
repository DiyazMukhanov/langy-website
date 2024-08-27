import { SubmitHandler, useForm } from "react-hook-form";
import { AdminLayout } from "../../AdminLayout";
import styles from "./New.module.scss";
import { Button } from "@/ui-kit/Button";
import { useTeacher } from "../shared/hooks/useTeacher";
import { useEffect } from "react";

type CreateNewTeacherInputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
  gender: "male" | "female";
  description: string;
  fee: number;
  photoUrl: string;
};

export default function New() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateNewTeacherInputs>();

  const onSubmit: SubmitHandler<CreateNewTeacherInputs> = (data) => {
    createTeacherHandler(data);
  };

  const { createTeacherHandler, createTeacherMutation } = useTeacher(1, 1);

  // Reset the form after successful mutation
  useEffect(() => {
    if (createTeacherMutation.isSuccess) {
      reset();
    }
  }, [createTeacherMutation.isSuccess, reset]);

  return (
    <AdminLayout>
      <div className={styles.newTeacherContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label>Имя</label>
          <input
            {...register("name", { required: true })}
            className={styles.input}
          />
          {errors.name && <span>This field is required</span>}
          <label>Фамилия</label>
          <input
            {...register("surname", { required: true })}
            className={styles.input}
          />
          {errors.surname && <span>This field is required</span>}
          <label>Email</label>
          <input
            {...register("email", { required: true })}
            className={styles.input}
          />
          {errors.email && <span>This field is required</span>}
          <label>Пароль</label>
          <input
            {...register("password", { required: true })}
            className={styles.input}
          />
          {errors.password && <span>This field is required</span>}
          <label>Пол</label>
          <select
            {...register("gender", { required: true })}
            className={styles.input}
          >
            <option value="male">Мужчина</option>
            <option value="female">Женщина</option>
          </select>
          {errors.gender && <span>This field is required</span>}
          <label>Описание</label>
          <input
            {...register("description", { required: true })}
            className={styles.input}
          />
          {errors.description && <span>This field is required</span>}
          <label>Ставка за урок (тг)</label>
          <input
            {...register("fee", { required: true })}
            className={styles.input}
          />
          {errors.fee && <span>This field is required</span>}
          <label>Путь к фото</label>
          <input
            {...register("photoUrl", { required: true })}
            className={styles.input}
          />
          {errors.photoUrl && <span>This field is required</span>}
          <Button type="submit" variant="teachersBook" className={styles.btn}>
            Добавить
          </Button>
        </form>
        {createTeacherMutation.isPending && <p>Добавление учителя...</p>}
        {createTeacherMutation.isError && (
          <p>Ошибка добавления. Попробуйте снова...</p>
        )}
        {createTeacherMutation.isSuccess && <p>Учитель успешно добавлен!</p>}
      </div>
    </AdminLayout>
  );
}
