import styles from "./Login.module.scss";
import ButtonClose from "../../public/images/Button-close.svg";
import Google from "../../public/images/Google.svg";
import Image from "next/image";
import { Button } from "@/ui-kit/Button";
import { Typography } from "@/ui-kit/Typography";
import { useRef, useState } from "react";
import classNames from "classnames";
import { loginUser } from "./shared/api/loginUser";
import { useRouter } from "next/router";

export default function Login() {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userNotExists, setUserNotExists] = useState(false);

  const router = useRouter();

  const emailRef = useRef();
  const passwordRef = useRef();

  let serverUrl;
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
    serverUrl = `http://localhost:3000`;
  } else {
    serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  }

  const emailInputHandler = (event) => {
    setEmailInputValue(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPasswordInputValue(event.target.value);
  };

  const userLoginHandler = async (event) => {
    event.preventDefault();
    setUserNotExists(false);
    setIsLoading(true);

    setPasswordEmpty(false);
    setEmailEmpty(false);

    const body = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (!emailInputValue) {
      setEmailEmpty(true);
    }

    if (!passwordInputValue) {
      setPasswordEmpty(true);
    }

    if (!emailInputValue || !passwordInputValue) {
      setIsLoading(false);
      return;
    }

    try {
      const userData = await loginUser(body);

      if (userData) {
        if (userData?.data?.data?.user?.role === "manager") {
          setIsLoading(false);
          router.push("/admin/main");
        }

        if (userData?.data?.data?.user?.levelChecked === true) {
          //Routing
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
        <Image
          priority
          src={ButtonClose}
          width={15}
          className={styles.close}
          onClick={goToMainHandler}
        />
        <Button variant="standardAuthOutlined" onClick={goToSignUpHandler}>
          Регистрация
        </Button>
      </div>

      <div className={styles.formContainer}>
        <Typography size="small" element="h2" className={styles.formHeading}>
          Вход
        </Typography>

        <form type="submit" onSubmit={userLoginHandler} className={styles.form}>
          <div className={styles.inputs}>
            <input
              placeholder="Email"
              type="email"
              id="user-text-field"
              className={classNames(
                { [styles.errorInput]: emailEmpty },
                { [styles.input]: !emailEmpty }
              )}
              onChange={emailInputHandler}
              name="email"
              autoComplete="email"
              ref={emailRef}
            ></input>
            <input
              placeholder="Пароль"
              type="password"
              id="password-text-field"
              className={classNames(
                { [styles.errorInput]: passwordEmpty },
                { [styles.input]: !passwordEmpty }
              )}
              onChange={passwordInputHandler}
              name="password"
              autoComplete="current-password"
              ref={passwordRef}
            ></input>
          </div>
          <p
            className={styles.forgotPassword}
            onClick={() => router.push("/authorization/forgot")}
          >
            Забыли пароль
          </p>
          <Button variant="authLargeContained" disabled={isLoading}>
            Войти
          </Button>
        </form>
        {/* <p>или</p> */}
        {/* <a href='http://localhost:3000/auth/google'> */}
        {/* <Button
          variant='google'
          // onClick={testGoogleAuth}
          onClick={() => router.push(`${serverUrl}/api/auth`)}
        // onClick={() => router.push(`http://localhost:3000/auth`)}
        // onClick={googleAuthHandler}
        >
          <Image
            priority
            src={Google}
            width={15}
            className={styles.close}
          />
          Google
        </Button> */}
        {/* </a> */}
      </div>

      <div className={styles.existContainer}>
        {userNotExists && <p className={styles.exist}>Неверные данные!</p>}
        {isLoading && <p className={styles.exist}>Идёт вход...</p>}
      </div>
    </div>
  );
}
