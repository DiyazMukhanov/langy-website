import { Button } from "@/ui-kit/Button";
import styles from "./Main.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import WithTeachersLayout from "../shared/withTeachersLayout";
import { useEffect, useState } from "react";
import { createNewPackage } from "../shared/api/createNewPackage";
import { Return } from "./return";
import { AskUs } from "@/modules/study/shared/AskUs";

const returnText = `В случае несостоявшегося урока, обучающемуся следует сфотографировать или сделать скрин урока, в котором видно остутствие учителя и ID данного урока. Также должно быть видно настоящее время. Это необходимо на случай спорных ситуаций с преподавателем. Далее, необходимо обратиться в службу поддержки по телефону, whatsapp, либо по емайлу, и мы вернем несостоявишися урок в пакет ваших уроков.`;
const cancelText = `Отменить предстоящий забронированный урок можно не позднее чем за 24 часа до начала урока`;

export default function Main() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isReturnShowing, setIsReturnShowing] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const createNewPackageHandler = async () => {
      try {
        await createNewPackage();
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };

    createNewPackageHandler();
  }, []);

  const returnHandler = () => {
    setText(returnText);
    setIsReturnShowing(true);
  };

  const cancelHandler = () => {
    setText(cancelText);
    setIsReturnShowing(true);
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <WithTeachersLayout>
      <div className={styles.main}>
        {isReturnShowing && (
          <Return
            isReturnShowing={isReturnShowing}
            setIsReturnShowing={setIsReturnShowing}
            text={text}
          />
        )}
        <AskUs />
        <Image
          priority
          src="/images/teacher.png"
          height={270}
          width={400}
          className={styles.image}
          alt="teacher"
          onError={(e) => console.error("Image load error: ", e)}
        />
        <Button
          variant="teachers"
          className={styles.chooseTeacherBtn}
          onClick={() => router.push("/with-teachers/teachers")}
        >
          Выбрать преподавателя
        </Button>
      </div>

      <div className={styles.bottom}>
        <Button
          variant="standardMiddleOutlined"
          className={styles.returnRulesBtn}
          onClick={returnHandler}
        >
          Правила возврата уроков
        </Button>
        <Button
          variant="standardMiddleOutlined"
          className={styles.returnRulesBtn}
          onClick={cancelHandler}
        >
          Правила отмены уроков
        </Button>
      </div>
    </WithTeachersLayout>
  );
}
