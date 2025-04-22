import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./TeacherLogin.module.scss";
import { Button } from "@/ui-kit/Button";
import { useMutation } from "@tanstack/react-query";
import { teacherLogin } from "../shared/api/teacherLogin";
import { useDispatch, useSelector } from "react-redux";
import { setTeacher } from "@/store/teacher/teacherSlice";
import { useEffect } from "react";
import { useRouter } from "next/router";

export type TeacherLoginInputs = {
  email: string;
  password: string;
};

export default function TeacherLogin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const teacher = useSelector((state: any) => state.teacher.teacherData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeacherLoginInputs>();

  const onSuccessLogin = (data) => {
    dispatch(
      setTeacher({
        id: data._id,
        name: data.name,
        surname: data.surname,
        description: data.description,
        email: data.email,
        photo: data.photo,
        gender: data.gender,
        isLoggedIn: true,
      })
    );
  };

  const mutation = useMutation({
    mutationFn: teacherLogin,
    onSuccess: (data) => {
      onSuccessLogin(data.data.data);
    },
  });

  const loginHandler = (loginData: TeacherLoginInputs) => {
    mutation.mutate(loginData);
  };

  const onSubmit: SubmitHandler<TeacherLoginInputs> = (loginData) => {
    loginHandler(loginData);
  };

  useEffect(() => {
    if (teacher?.isLoggedIn) {
      router.push("/with-teachers/teacher-main");
    }
  }, [teacher]);

  return (
    <div className={styles.loginContainer}>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          {...register("email", { required: true })}
          className={styles.input}
        />
        {errors.email && <span>This field is required</span>}
        <input
          {...register("password", { required: true })}
          className={styles.input}
        />
        {errors.password && <span>This field is required</span>}

        <Button
          type="submit"
          variant="teachers"
          disabled={mutation.isPending}
          className={styles.enterBtn}
        >
          Войти
        </Button>
        {mutation.isError && <>Ошибка входа. Попробуйте еще раз...</>}
      </form>
    </div>
  );
}
